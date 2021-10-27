const express = require('express');
const router = express.Router();
const multer  = require('multer')
const cors = require('cors')
const app = express();
const tutionModel = require('../Model/userModel')
const uploadModel = require('../Model/upload')
var data;
// const storage = multer.diskStorage({
//   destination:'./',
//   filrname:function(req,file,cb){
//     cb(null,Date.now() + '.' + file.mimetype.split('/')[1])
//   }
// })
// const upload = multer({storage:storage})
app.use(cors());
// router.post('/upload',upload.single('file'),(req,res) =>{
//       try{
//         const upload = new uploadModel({
//             file:req.file.filename
//         })
//         upload.save()
//         res.json(upload)
//       }catch(err){
//           res.json(err)
//       }
//     })
const storage = multer.diskStorage({
    destination:'./',
    filename:function(req,file,cb){
      cb(null,Date.now() + '.' + file.mimetype.split('/')[1])
    }
  })
  const upload = multer({storage:storage})
router.post('/',upload.single('file'), async (req,res) =>{
    console.log("call2",req.body);
    console.log(req.file)
    const tution = new tutionModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        paid:req.body.paid,
        unpaid:req.body.unpaid,
        class:req.body.class,
        img:req.file.filename
    })
    try{

       const val = await tution.save()
       res.json(val)
    }catch(err){
        console.log(err);
    }
})

module.exports = router;