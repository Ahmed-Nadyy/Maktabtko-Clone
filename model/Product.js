const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        idname:{
            type: String, 
            required: false,
            
        },
        avatar: {
            type: String, 
            required: false,
            unique: true
        },
        name: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;