const Review = require('../models/Review');


async function getReview(req, res, next) {
    const review = await Review.find();
    res.send(review);
}

async function getOneReview(req, res, next) {
    const review = await Review.findById(req.params.id);
    if(!review) return res.status(404).send('The Review with given ID is not found...');
    res.send(review);
}

async function postReview(req, res, next) {
    let review = new Review({
        user: req.body.user,
        rating: req.body.rating,
        comment: req.body.comment
    })
    review = await review.save();
    res.send(review);
}

async function putReview(req, res, next) {
    const review = await Review.findByIdAndUpdate(req.params.id, {
        user: req.body.user,
        rating: req.body.rating,
        comment: req.body.comment
    },
    {
        new: true
    })
    if(!review) return res.status(404).send('The Review with given ID is not found...');
    res.send(review);
}

async function deleteReview(req, res, next) {
    const review = await Review.findByIdAndRemove(req.params.id);
    if(!review) return res.status(404).send('The Review with given ID is not found...');
    res.send(review);
}

module.exports = {getReview, getOneReview, postReview, putReview, deleteReview};