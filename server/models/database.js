require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error:"));

db.once('open', function () {
  console.log('Connected');
});

// Import your models after the database connection is established
require("./Category"); // This assumes that the Category model is defined in "Category.js" or "Category.js" file in the same directory
require('./Recipe')
