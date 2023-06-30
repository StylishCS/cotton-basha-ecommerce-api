const Procuct = require('../models/Product');

async function getProduct(req, res, next) {
    const product = await Procuct.find();
    res.send(product);
}

async function getOneProduct(req, res, next) {
    const product = await Procuct.findById(req.params.id);
    if(!product) return res.status(404).send('The Procuct with given ID is not found...');
    res.send(product);
}

async function postProduct(req, res, next) {
    let product = new Procuct({
        imagesArray: req.body.imagesArray,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        colors: req.body.colors,
        reviews: req.body.reviews,
        new: req.body.new,
        featured: req.body.featured
    })
    product = await product.save();
    res.send(product);
}

async function putProduct(req, res, next) {
    const product = await Procuct.findByIdAndUpdate(req.params.id, {
        imagesArray: req.body.imagesArray,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        colors: req.body.colors,
        reviews: req.body.reviews,
        new: req.body.new,
        featured: req.body.featured
    },
    {
        new: true
    })
    if(!product) return res.status(404).send('The Product with given ID is not found...');
    res.send(product);
}

async function deleteProduct(req, res, next) {
    const product = await Procuct.findByIdAndRemove(req.params.id);
    if(!product) return res.status(404).send('The Procuct with given ID is not found...');
    res.send(product);
}

module.exports = {getProduct, getOneProduct, postProduct, putProduct, deleteProduct};