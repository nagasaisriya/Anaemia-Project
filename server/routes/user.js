const express=require("express");

const jwt=require("jsonwebtoken");
const multer = require('multer');
const uuidv4 = require('uuid');
const router=express.Router();
require("../db/conn");
const User=require('../models/userSchema');

const cookieParser = require('cookie-parser');
router.use(cookieParser());
router.get('/',(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  res.send("Firstrouter");
});

const DIR = './public/uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
var multipleUpload=upload.fields([{name:'leftNail'},{name:'rightNail'},{name:'leftPalm'},{name:'rightPalm'},{name:'tongue'},{name:'leftEyelid'},{name:'rightEyelid'}])
const addDetails=async (req,res)=>{
  console.log(req.files);
  const leftNail=req.files.leftNail.originalname;
  const rightNail=req.files.rightNail.originalname;
  const leftPalm=req.files.leftPalm.originalname;
  const rightPalm=req.files.rightPalm.originalname;
  const tongue=req.files.tongue.originalname;
  const leftEyelid=req.files.leftEyelid.originalname;
  const rightEyelid=req.files.rightEyelid.originalname;
  try{
    const user=new User({leftNail, rightNail,leftPalm ,rightPalm,tongue,leftEyelid,rightEyelid});
    console.log(user);
    const save=await user.save();
    if(save){
      res.status(201).json({message:"User registered successfully"});
    }
    else{
      res.status(500).json({error:"Failed to register"});
    }
  }
  catch(err){
    console.log(err);
  }
};
router.post('/images', multipleUpload,addDetails);

module.exports=router;
