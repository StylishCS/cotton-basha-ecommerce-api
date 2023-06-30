const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {type: String, required: true, minlength: 3},
    products: {type: [String], required: true},
    address: {type: String, required: true},
    ETA: {type: Date, default: Date.now},
    totalPrice: {type: Number, required: true},
    paymentMethod: {type: String, required: true}
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;