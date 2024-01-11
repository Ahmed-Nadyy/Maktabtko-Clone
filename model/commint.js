const mongoose = require('mongoose');
const commintSchema = new mongoose.Schema(
    {
        idname:{
            type: String, 
            required: false,
        },
        namecommint: {
            type: String,
            required: true,
        },
        massagecommint:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Commint = mongoose.model('Commint', commintSchema);

module.exports = Commint;