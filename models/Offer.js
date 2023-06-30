const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    description: {type: String, required: true, minlength: 5},
    bundle: {type: Number, required: true},
    image: {type: String, required: true},
    value: {type: Number, required: true},
    price: {type: Number, required: true},
    discount: {type: Number}
})

const Offer = mongoose.model('Offer',offerSchema);

module.exports = Offer;