const mongoose = require("mongoose");

const tutionSchema  = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    birthday:{
        type:Date,
        required:true
    },
    paid:{
        type:Number,
        required:true
    },
    unpaid:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true,
    },
    img: { 
        type:String
     }, 
    updated: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Tution",tutionSchema)