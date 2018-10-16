const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_I = 10;
const jwt = require('jsonwebtoken');

require('dotenv').config();

const brandSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:1,
        maxlength:100
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports= {Brand};