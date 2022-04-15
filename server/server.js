const dotenv=require("dotenv");
const express=require("express");
const app=express();
const bodyParser = require('body-parser')
dotenv.config({path:'.env'});
require("./db/conn")
const User=require('./models/userSchema');
const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use(require('./routes/user'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/public/uploads', express.static('public/uploads'));

app.listen(PORT,()=>{
  console.log(`app is running at port number ${PORT}`);
})

/*const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({limit: "30mb",extended:true}));

const DB=process.env.ATLAS_URI;
mongoose.connect(DB).then(()=>{
    console.log(`Connection successful`);
  }).catch((err)=>{
    console.log(`no connection `);
  })

const userRouter = require('./routes/user');

app.use('/add',userRouter);
app.post('/add',(req,res)=>{
    res.send('test');
})
app.listen(PORT,()=>{
    console.log(`App listening on port: ${PORT}`);
})

*/
