const mongoose=require("mongoose");
const DB=process.env.ATLAS_URI;
mongoose.connect(DB).then(()=>{
  console.log(`Connection successful`);
}).catch((err)=>{
  console.log(`no connection `);
})
