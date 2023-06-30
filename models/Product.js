const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    imagesArray: {type: [String], required: true},
    name: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true},
    description: {type: String, required: true, minlength: 5},
    colors: {type: [String], required: true},
    reviews: {type: [String]},
    new: {type: Boolean, required: true},
    featured: {type: Boolean, required: true}
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;