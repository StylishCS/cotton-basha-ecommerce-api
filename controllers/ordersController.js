const Order = require('../models/Order');

async function getOrder(req, res, next) {
    const order = await Order.find();
    res.send(order);
}

async function getOneOrder(req, res, next) {
    const order = await Order.findById(req.params.id);
    if(!order) return res.status(404).send('The Order with given ID is not found...');
    res.send(order);
}

async function postOrder(req, res, next) {
    let order = new Order({
        customer: req.body.customer,
        products: req.body.products,
        address: req.body.address,
        ETA: req.body.ETA,
        totalPrice: req.body.totalPrice,
        paymentMethod: req.body.paymentMethod
    })
    order = await order.save();
    res.send(order);
}

async function putOrder(req, res, next) {
    const order = await Order.findByIdAndUpdate(req.params.id, {
        customer: req.body.customer,
        products: req.body.products,
        address: req.body.address,
        ETA: req.body.ETA,
        totalPrice: req.body.totalPrice,
        paymentMethod: req.body.paymentMethod
    },
    {
        new: true
    })
    if(!order) return res.status(404).send('The Order with given ID is not found...');
    res.send(order);
}

async function deleteOrder(req, res, next) {
    const order = await Order.findByIdAndRemove(req.params.id);
    if(!order) return res.status(404).send('The Order with given ID is not found...');
    res.send(order);
}

module.exports = {getOrder, getOneOrder, postOrder, putOrder, deleteOrder};