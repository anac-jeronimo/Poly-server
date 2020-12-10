require("dotenv").config();
//const request = require("request");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
//cors is a mechanism and a library (google ^^)
const session = require("express-session");
const passport = require("passport");
const vision = require("@google-cloud/vision");

require("./configs/passport");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

//THIS LINE IS: WHERE OUR FRONTEND IS BEING SERVED NOW
app.use(express.static(path.join(__dirname, "dist")));


app.use(
  session({
    secret: "projectapp",
    cookie: { expire: 60000 },
    rolling: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());


// default value for title local
app.locals.title = "Poly";

//Allowing our front end to get resources from our backend
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_HOSTNAME, 'http://localhost:3000'],
  })
);

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth-route");
app.use("/api", authRoutes);

const scanRoutes = require("./routes/scan-route");
app.use("/api", scanRoutes);

app.locals.GoogleVisionKey = process.env.GOOGLE_VISION_API_KEY;

module.exports = app;
