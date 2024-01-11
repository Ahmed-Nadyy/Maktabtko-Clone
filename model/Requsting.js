// Requsting
// 
const mongoose = require('mongoose');
const requstingSchema = new mongoose.Schema(
    {
        idname:{
            type: String, 
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        filepdf: {
            type: String,
            required: true,
        },
        massage:{
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

const Requsting = mongoose.model('Requsting', requstingSchema);

module.exports = Requsting;