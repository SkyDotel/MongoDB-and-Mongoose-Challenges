require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]

});

const Person = mongoose.model('Person', personSchema);