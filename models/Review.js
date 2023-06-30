const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {type: String, required: true, minlength: 3},
    rating: {type: Number, required: true},
    comment: {type: String, required: true, minlength: 5}
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;