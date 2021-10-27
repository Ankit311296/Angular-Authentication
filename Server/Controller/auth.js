const express = require('express');
const app = express();
const router = express.Router();
const authModel = require('../Model/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json())
require('dotenv').config();

/**
 * Register
 */

router.post("/register", async (req, res) => {
    console.log("Auth Called...");
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { name: req.body.name, password: hashedPassword };

    const auth = new authModel({
        name: req.body.name,
        password: hashedPassword
    })

    try {
        await auth.save();
        res.json(auth)
    } catch (err) {
        console.log(err);
    }
})

/**
 * login
 */
router.post("/login", async (req, res) => {
    console.log("login backend");
    const obj = {}
    let password = "";
    const user = await authModel.find({
        name: req.body.name
    })
    obj.users = user;
    await obj.users.forEach(res => {
        password = res.password
    });
    const userName = {name:req.body.name}
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, password)) {
            const accessToken = jwt.sign(userName,process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({"accessToken":accessToken})
        } else {
            res.send('Not Allowed')
        }
    } catch (err) {
        console.log(err);
    }
})

/**
 * Check via token
 */
router.get('/username',authenticateToken,(req,res) =>{
    return res.status(200).json(req.user)
})
function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token =authHeader && authHeader.split(' ')[1]
    if(token == null) res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
            if(err){
                console.log("Token not found");
            }
            req.user = user;
            next()
        })
    
}

module.exports = router;