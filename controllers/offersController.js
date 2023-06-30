const Offer = require('../models/Offer');

async function getOffer(req, res, next) {
    const offer = await Offer.find();
    res.send(offer);
}

async function getOneOffer(req, res, next) {
    const offer = await Offer.findById(req.params.id);
    if(!offer) return res.status(404).send('The Offer with given ID is not found...');
    res.send(offer);
}

async function postOffer(req, res, next) {
    let offer = new Offer({
        description: req.body.description,
        bundle: req.body.bundle,
        image: req.body.image,
        value: req.body.value,
        price: req.body.price,
        discount: req.body.discount,
    })
    offer = await offer.save();
    res.send(offer);
}

async function putOffer(req, res, next) {
    const offer = await Offer.findByIdAndUpdate(req.params.id, {
        description : req.body.description,
        bundle : req.body.bundle,
        image : req.body.image,
        value : req.body.value,
        price : req.body.price,
        discount : req.body.discount
    },
    {
        new: true
    })
    if(!offer) return res.status(404).send('The Offer with given ID is not found...');
    res.send(offer);
}

async function deleteOffer(req, res, next) {
    const offer = await Offer.findByIdAndRemove(req.params.id);
    if(!offer) return res.status(404).send('The Offer with given ID is not found...');
    res.send(offer);
}

module.exports = {getOffer,getOneOffer, postOffer, putOffer, deleteOffer};