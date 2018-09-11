const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_I = 10;
const jwt = require('jsonwebtoken');

require('dotenv').config();

const woodSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:1,
        maxlength:100
    }
});

const Wood = mongoose.model('Wood', woodSchema);

module.exports= {Wood};