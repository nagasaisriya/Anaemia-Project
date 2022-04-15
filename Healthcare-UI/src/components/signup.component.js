import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

/*const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};
*/
const SignUp = props => {
    const [user,setUser]=useState({name:"",gender:"",age:"",hb:"",mon:""})
	const [gender, setGender] = React.useState();
    const [con,setCon] = React.useState();
    const [hb,setHb] = React.useState();
    const [ifa,setIfa] = React.useState();
    let history=useHistory();
    let name,value;
    const handleInput=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }
    const [visible,setVisible]=useState(false);
    const [visiblePreg,setVisiblePreg]=useState(false);
    const [preg,setPreg]=useState(false);
	const handleSubmit = e => {
		e.preventDefault();
		const data = {gender,con, hb, ifa};
		const json = JSON.stringify(data, null, 9);
		console.clear();
		console.log(json);
	};
    const handleClick=e=>{
        e.preventDefault();
        if(user.hb<11 && visible && visiblePreg && user.age>=13 && user.age<=49 ){
            history.push('/symptoms');
        }
        else if(user.hb<11 && visible && !preg){
            history.push('/symptoms1');
        }
        else if(user.hb>=11 && visible)
        {
            history.push('/images')
        }
        else if(!visible){
            history.push('/sign-in');
        }
        
        //alert('Your data is submitted ');
        
    }
    const handle=()=>{
        history.push("/");
    }
    return (
        
            <form onSubmit={handleSubmit}>
                <h4>Anaemia Data</h4>
                <div className='consent'>
                <label>Consent to submit data</label>
                               
                               <input type="radio" className="mx-2" name='isyes' value="1" onClick={()=>setVisible(true)}/>Yes
                              
                                <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onClick={()=>setVisible(false)}/>
                               No
                </div>
                {visible && 
                <div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" id="name" value={user.name} placeholder="Name" onChange={handleInput} />
                </div>
                
               
                
                <div className="form-group">
                                 <label>Gender</label>
                                 
                                 <input type="radio"  name='Male' value='female' onClick={()=>setVisiblePreg(true)}/> Female
                                 <input type="radio"  name='Male' value='male' onClick={()=>setVisiblePreg(false)}/> Male
                                 <input type="radio" name='Male' value='others' onClick={()=>setVisiblePreg(false)} /> Others
                </div>
                <div className="form-group">
                                <label>Age</label>
                                <input type="number" name="age" id="age" placeholder="Age" value={user.age} onChange={handleInput}/>
                </div> 
                
                
                {visiblePreg  && user.age>=13 && user.age<=49 &&
                 <div>
                     <div className="form-group">
                                 <label>Are you currently pregnant?</label>
                                 <input type="radio"  name='yes' value="female" onClick={()=>setPreg(true)}  /> No
                                 <input type="radio"  name='yes' value="female1" onClick={()=>setPreg(false)}/> Yes
                                 
                    </div>
                    
                </div>
                }
                {preg && 
                <div>
                    <div className="form-group">
                                 <label>When were you pregnant last in months?</label>
                                 <input type="text" name="mon" id="mon" value={user.mon} placeholder="Months" onChange={handleInput} />
                                 
                             </div>
               
                 </div>
                }
                 <div className="form-group">
                    <label>Haemoglobin %</label>
                    <input type="number" name="hb" id="hb" placeholder="Haemoglobin" value={user.hb} onChange={handleInput}/>
                </div>
                <div className="form-group">
                             <label>Upload picture of Haemoglobin report</label>
                                <input type="file" name="img" id="img"/>
                             <br></br></div>
               
               
                </div>
                }
               
                <button type="submit" className="btn btn-primary btn-block" id='div1' onClick={handleClick}>Sign Up</button>
               
                
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    
}
export default SignUp;

