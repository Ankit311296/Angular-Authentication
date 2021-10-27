const express = require('express');
const app = express();
const router = express.Router();
const authModel = require('../Model/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json())
require('dotenv').config();

const posts = [{
    name:"ankit",
    title:"post1"
}]

router.get('/posts',authenticateToken,(req,res) =>{
    res.json(req.user)
})


router.get("/loginJwt",(req,res) =>{
    console.log(req.body);
    const name = req.body.name;
    const user = {user:name}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
   res.status(200).json({accessToken:accessToken})
    
})
function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    console.log("authHeader",authHeader);
    const token =authHeader && authHeader.split(' ')[1]
    console.log("token ===>",token);
    if(token == null) res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
            if(err){
                console.log(err);
            }
            req.user = user;
            next()
            // res.json(req.user)
        })
    
}
module.exports = router;