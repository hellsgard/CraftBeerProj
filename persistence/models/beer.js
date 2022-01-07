
const mongoose = require('mongoose');
// Deconstructing mongoose, Schema is a uppercase
const {Schema, model} = mongoose;
// create our schema
const beerSchema = new Schema({
    id: Number,
    beer_name: String,
    tagline: String,
    first_brewed: String,
    description: String,
    image_url: String,
    abv: Number,
    alcohol_free: Boolean,
    type: String
});
// Creating the hamster model
const beer = model('Beer', beerSchema);
// Export the model
module.exports = {'Beer' : beer};