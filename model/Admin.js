const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        permissions:{
            type: Number,
            required: false
        },
        definthome: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique:false
        },
        phoneadmin:{
            type: String,
            required: true,
        },
        governorate: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        avatar: {
            type: String, 
            required: false
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        dateregister: {
            type: String,
            required: true,
        },
        subdata:{
            type: Number,
            required: true,
        },
        subenddate:{
            type: String,
            required: true,
        },
        deliveryservice:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Admin = mongoose.model('Admin', userSchema);

module.exports = Admin;