const mongoose = require("mongoose");

const tutionSchema  = new mongoose.Schema({

    file:{
        type:String
    },
    updated: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Upload",tutionSchema)