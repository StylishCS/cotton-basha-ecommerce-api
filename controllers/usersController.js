const User = require('../models/User');

async function getUser(req, res, next) {
    const user = await User.find();
    res.send(user);
}

async function getOneUser(req, res, next) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).send('The User with given ID is not found...');
    res.send(user);
}

async function postUser(req, res, next) {
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        orders: req.body.orders
    })
    user = await user.save();
    res.send(user);
}

async function putUser(req, res, next) {
    const user = await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        orders: req.body.orders
    },
    {
        new: true
    })
    if(!user) return res.status(404).send('The User with given ID is not found...');
    res.send(user);
}

async function deleteUser(req, res, next) {
    const user = await User.findByIdAndRemove(req.params.id);
    if(!user) return res.status(404).send('The User with given ID is not found...');
    res.send(user);
}

module.exports = {getUser, getOneUser, postUser, putUser, deleteUser};