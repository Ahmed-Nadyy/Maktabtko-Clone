const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
    {
        idname:{
            type: String, 
            required: false,
        },
        nameOrder: {
            type: String,
            required: true,
        },
        phoneOrder:{
            type: String,
            required: true,
        },
        massageOrder:{
            type: String,
            required: true,
        },
        dateregister: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;