const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("../models/User-model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//this are passport mathods
//we know what they do but not how they work

//Set the user in the session - login
passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});
//Gets the user from the session req.user
passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    //first argument is an error
    cb(null, userDocument);
  });
});

//what allows the authentication it self
//using passport

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }
      if (!foundUser) {
        next(null, false, { message: "Incorrect username." });
        return;
      }
      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: "Incorrect password." });
        return;
      }
      next(null, foundUser);
    });
  })
);

passport.use(
  new GoogleStrategy(
    {
      //info stored on the .env file
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((user) => {
          if (user) {
            //authenticate and presist in session
            done(null, user);
            return;
          }

          //creates a new user
          User.create({ googleId: profile.id, username: profile.displayName })
            .then((newUser) => {
              // after creating, google authenticates and presists in session
              done(null, newUser);
            })
            .catch((err) => done(err)); // closes User.create()
        })
        .catch((err) => done(err)); // closes User.findOne()
    }
  )
);
