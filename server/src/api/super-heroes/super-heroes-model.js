const mongoose = require('mongoose');

const superHeroSchema = new mongoose.Schema({
  nickname: String,
  real_name: String,
  origin_description: String,
  superpowers: String,
  catch_phrase: String,
  Images: [String],
});

module.exports = mongoose.model('SuperHero', superHeroSchema);
