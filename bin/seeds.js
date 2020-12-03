require('dotenv').config();
const mongoose = require('mongoose');
const Color = require('../models/Color');
const DB_NAME = 'poly-server';

mongoose.connect('mongodb://127.0.0.1:27017/poly-server', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const color = [
  {
    name: "black",
    imageURL: " "
  }, 
  {
    name: "blue" ,
    imageURL: 
  },
  {
    name: "cyan" ,
    imageURL: 
  },
  {
    name: "green" ,
    imageURL: 
  },
  {
    name: "teal" ,
    imageURL: 
  },
  {
    name: "turquoise" ,
    imageURL: 
  },
  {
    name: "indigo" ,
    imageURL: 
  },
  {
    name: "gray" ,
    imageURL: 
  },
  {
    name: "purple" ,
    imageURL: 
  },
  {
    name: "brown" ,
    imageURL: 
  },
  {
    name: "tan" ,
    imageURL: 
  },
  {
    name: "violet" ,
    imageURL: 
  },
  {
    name: "beige" ,
    imageURL: 
  },
  {
    name: "fuchsia" ,
    imageURL: 
  },
  {
    name: "gold" ,
    imageURL: 
  },
  {
    name: "mangenta" ,
    imageURL: 
  },
  {
    name: "orange" ,
    imageURL: 
  },
  {
    name: "pink" ,
    imageURL: 
  },
  {
    name: "red" ,
    imageURL: 
  },
  {
    name: "white" ,
    imageURL: 
  },
  {
    name: "yellow" ,
    imageURL: 
  }
   
]
