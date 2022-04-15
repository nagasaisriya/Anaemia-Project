const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
  leftNail: {
    type: String,
    
  },
  rightNail: {
    type: String,
    
  },
  leftPalm: {
    type: String,
    
  },
  rightPalm: {
    type: String,
    
  },
  tongue: {
    type: String,
    
  },
  leftEyelid: {
    type: String,
    
  },
  rightEyelid: {
    type: String,
    
  },
  tokens:[
    {
      token:{
        type:String,
        
      }
    }
  ]
})

userSchema.methods.generateAuthToken=async function(){
  try{
    let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
  }
  catch(err){
    console.log(err);
  }
}
const User=mongoose.model('USER',userSchema);
module.exports=User;
