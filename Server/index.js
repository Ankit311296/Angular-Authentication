const express = require('express')
const app = express();
const port = 3000
const api = require('./Controller/user')
const userPost = require('./Controller/userPost')
const auth = require('./Controller/auth')
const mongo = require('./Model/connection');
app.use(express.json());
var cors = require("cors");
app.use(cors({ origin: 'http://localhost:4200' }))
const multer = require('multer');
const jwtTokenAuth = require('./Controller/jwtTokenAuth')

app.use('/', api)
app.use('/', userPost);
api.use('/', auth),
api.use('/',jwtTokenAuth)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))
module.exports = app;