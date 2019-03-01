const mongoose = require('mongoose')

const OrdersSchema = mongoose.Schema({
  ref: String,
  customerinfo: { email: String, firstName: String, lastName: String, country: String, city: String, province: String, postalCode: Number, phoneNumber: Number, address1: String, address2: String },
  order: [{ idItem: String, titleItem: String, selectedSize: String, selectedColor: String, price: Number, quantity: Number }],
  totalDelivery: Number,
  totalAmount: Number 
}, { timestamps: true })

const ModelOrders = mongoose.model('orders', OrdersSchema)

module.exports = ModelOrders