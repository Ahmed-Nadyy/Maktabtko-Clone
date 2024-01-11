const mongoose = require('mongoose');
const cardbuySchema = new mongoose.Schema(
    {
        oneMontlibBuy:{
            type: Number,
            required: true
        },
        twoMontlibBuy:{
            type: Number,
            required: true
        },
        threeMontlibBuy:{
            type: Number,
            required: true
        },
    },
    { timestamps: true }
);

const Cardbuy = mongoose.model('Cardbuy', cardbuySchema);

module.exports = Cardbuy;