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

createAndSavePerson = (done) => {
  let Jim = new Person({ name: 'Jim', age:'33', favoriteFoods:['pizza','cheeseballs']});

  Jim.save(function(err, data) {
    if (err) return console.error(err);
    done(null,data)
  });
};



exports.PersonModel = Person;
exports.createAndSavePerson= createAndSavePerson;