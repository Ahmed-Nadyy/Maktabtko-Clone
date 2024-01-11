const mongoose = require('mongoose');
const cardacaSchema = new mongoose.Schema(
    {
        oneMontAcd:{
            type: Number,
            required: true
        },
        twoMontAcd:{
            type: Number,
            required: true
        },
        threeMontAcd:{
            type: Number,
            required: true
        },
    },
    { timestamps: true }
);

const CardAca = mongoose.model('CardAca', cardacaSchema);

module.exports = CardAca;