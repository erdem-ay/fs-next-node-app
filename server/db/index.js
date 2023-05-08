const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URL;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

module.exports = mongoose;
