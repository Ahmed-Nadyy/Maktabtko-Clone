const mongoose = require('mongoose');
const productbuySchema = new mongoose.Schema(
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
        name:{
            type: String,
            required: true, 
        },
        beforprice: {
            type: String,
            required: true,
        },
        afterprice: {
            type: String,
            required: true,
        },
        desecribationcotach: {
            type: String,
            required: true,
        },
        notdescriation:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Productbuy = mongoose.model('Productbuy', productbuySchema);

module.exports = Productbuy;