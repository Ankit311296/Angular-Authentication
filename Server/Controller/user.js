const express = require('express');
const router = express.Router();
const tutionModel = require('../Model/userModel')

router.get("/",async(req,res)=>{
    try{
        console.log("call");
        const tution = await tutionModel.find();
        res.json(tution);
    }catch(err){
        console.log(err);
    }
})
module.exports = router;