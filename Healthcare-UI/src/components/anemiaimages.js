import React, {useState } from "react";
import { ReactDOM } from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const Images = props => {
	let history=useHistory();
    const [user,setUser]=useState({
        leftNail:"",rightNail:"",leftPalm:"",rightPalm:"",tongue:"",leftEyelid:"",rightEyelid:""
      });
      let name;
      const handleFileChange=(e)=>{
        name=e.target.name;
        setUser({...user,[name]:e.target.files[0]})
        console.log(e.target.files[0]);
      }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        //alert('Thank you! Your data is submitted ');
        const formData= new FormData();
        formData.append('leftNail', user.leftNail)
        formData.append('rightNail', user.rightNail)
        formData.append('leftPalm', user.leftPalm)
        formData.append('rightPalm', user.rightPalm)
        formData.append('tongue', user.tongue)
        formData.append('leftEyelid', user.leftEyelid)
        formData.append('rightEyelid', user.rightEyelid)
        console.log("trying to reach backend");
        await axios.post("http://localhost:5000/images", formData).then(res => {
            console.log(res);
            alert("Uploaded images Successfully");
           history.push("/");
        }).catch((err)=>{
          console.log("THERES AN ERROR");
          console.log(err);
        })
       
    }
   
    /*const handleFileChange=(e)=>{
        setNewAuthor({...newUser,photo1:e.target.files[0]});
        console.log(newUser.photo1);
    }
    const handleFileChange2=(e)=>{
        setNewAuthor2({...newUser2,photo2:e.target.files[0]});
        console.log(newUser2.photo2);
    }
    const handleFileChange3=(e)=>{
        setNewAuthor3({...newUser3,photo3:e.target.files[0]});
        console.log(newUser3.photo3);
    }
    const handleFileChange4=(e)=>{
        setNewAuthor4({...newUser4,photo4:e.target.files[0]});
        console.log(newUser4.photo4);
    }
    const handleFileChange5=(e)=>{
        setNewAuthor5({...newUser5,photo5:e.target.files[0]});
        console.log(newUser5.photo5);
    }
    const handleFileChange6=(e)=>{
        setNewAuthor6({...newUser6,photo6:e.target.files[0]});
        console.log(newUser6.photo6);
    }
    const handleFileChange7=(e)=>{
        setNewAuthor7({...newUser7,photo7:e.target.files[0]});
        console.log(newUser7.photo7);
    }*/
	return (
            <form  encType='multipart/form-data' method="POST">
                <center>
                <h3>Anaemia Images Upload</h3>
                </center>
                <label>Upload pictures of the left hand nails</label>
                <input type="file" accept=".png, .jpg, .jpeg" name="leftNail" id="leftNail" onChange={handleFileChange}/>
              
                <label>Upload pictures of the right hand nails</label>
                <input type="file" accept=".png, .jpg, .jpeg"  name="rightNail" id="rightNail" onChange={handleFileChange}/>
              
                <label>Upload pictures of the left hand palms</label>
                <input type="file" accept=".png, .jpg, .jpeg"  name="leftPalm" id="leftPalm" onChange={handleFileChange}/>
              
                <label>Upload pictures of the right hand palms</label>
                <input type="file" accept=".png, .jpg, .jpeg" name="righttPalm" id="rightPalm" onChange={handleFileChange}/>
              
                <label>Upload pictures tongue</label><br></br>
                <input type="file" accept=".png, .jpg, .jpeg" name="tongue" id="tongue" onChange={handleFileChange}/>
               
                <label>Upload pictures of left eyelid</label>
                <input type="file" accept=".png, .jpg, .jpeg" name="leftEyelid" id="leftEyelid" onChange={handleFileChange}/>   
                
                <label>Upload pictures of right eyelid</label>
                <input type="file" accept=".png, .jpg, .jpeg"  name="rightEyelid" id="rightEyelid" onChange={handleFileChange}/>
              
              <center>
                <div style={{padding:'10px'}}>
                               
                    <button name='register' className="btn btn-primary" onClick={handleSubmit}> Submit </button>
                                
                </div>
                </center>
            </form>
        );
    };

export default Images;
