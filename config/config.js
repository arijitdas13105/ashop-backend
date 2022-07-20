
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURL,{
        useUnifiedTopology:true , 
        useNewUrlParser:true,
        
    });
    console.log("nacho bc ! connect ho gya");
  } catch (error) {
    console.log("kuch to gadbad h ! daya pata lagao ");
  }
};
module.exports = connectDb;
