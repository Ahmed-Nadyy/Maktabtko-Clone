const mongoose = require('mongoose');
const cardlibSchema = new mongoose.Schema(
    {
        oneMontlib:{
            type: Number,
            required: true
        },
        twoMontlib:{
            type: Number,
            required: true
        },
        threeMontlib:{
            type: Number,
            required: true
        },
    },
    { timestamps: true }
);

const Cardlib = mongoose.model('Cardlib', cardlibSchema);

module.exports = Cardlib;