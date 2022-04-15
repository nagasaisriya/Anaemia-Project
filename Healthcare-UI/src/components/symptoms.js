import React, { Component } from "react";
import { ReactDOM } from "react";
import { useHistory } from "react-router-dom";
const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};
   
const Symptoms = props => {
	const [tired, setTired] = React.useState();
    const [sym,setSym] = React.useState();
    const [sym1,setSym1] = React.useState();
    const [sym2,setSym2] = React.useState();
    const [sym3,setSym3] = React.useState();
    let history=useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		const data = {tired,sym, sym1, sym2, sym3};
		const json = JSON.stringify(data, null, 12);
		console.clear();
		console.log(json);
	};
    const handleClick = e=>{
        e.preventDefault();
        history.push('/ifa');
    }
	return (
	  <form onSubmit={handleSubmit}>
           <h4>Symptoms</h4>
	    <div>
	      <label style={{color: 'red'}}>Do you feel weak easily?</label><br></br>
	      <RadioInput label="YES" value="YES" checked={tired} setter={setTired}  /><br></br>
	      <RadioInput label="NO" value="NO" checked={tired} setter={setTired} />
	    </div>
	    <div>
	      <label style={{color: 'red'}}>While climbing stairs or doing any physical work breathlessness occurs?</label>
	      <RadioInput label="YES" value="YES" checked={sym} setter={setSym} /><br></br>
	      <RadioInput label="NO" value="NO" checked={sym} setter={setSym}  />
	    </div>
        <div>
	      <label style={{color: 'red'}}>Do you have pain in the legs and arms?</label><br></br>
	      <RadioInput label="YES" value="YES" checked={sym1} setter={setSym1} /><br></br>
	      <RadioInput label="NO" value="NO" checked={sym1} setter={setSym1}  />
	    </div>
        
        <div>
	      <label style={{color: 'red'}}>Sometimes did you feel mentally exhausted?</label>
	      <RadioInput label="YES" value="YES" checked={sym2} setter={setSym2} /><br></br>
	      <RadioInput label="NO" value="NO" checked={sym2} setter={setSym2}  />
	    </div>
         
        <div>
	      <label style={{color: 'red'}}>Sometimes you feel irritated?</label><br></br>
	      <RadioInput label="YES" value="YES" checked={sym3} setter={setSym3} /><br></br>
	      <RadioInput label="NO" value="NO" checked={sym3} setter={setSym3}  />
	    </div>
      <button type="submit" className="btn btn-primary btn-block" id='div1' onClick={handleClick}>Submit</button>
               
	  </form>
	);
};

export default Symptoms;

/*
export default class Symptoms extends Component {
    render() {
        return (
            <form>
                <h3>Symptoms</h3>

                <div >
                    <label>Do you feel weak easily?</label>
                    <input type="radio" value="YES" name="consent" /> YES
                    <input type="radio" value="NO" name="consent"/> NO
                </div>

                <div>
                    <label>While climbing stairs or doing any physical work breathlessness occurs?</label>
                    <input type="radio" value="YES" name="consent" /> YES
                    <input type="radio" value="NO" name="consent"/> NO
                </div>
                <div >
                    <label>Do you have pain in the legs and arms?</label>
                    <input type="radio" value="YES" name="consent" /> YES
                    <input type="radio" value="NO" name="consent"/> NO
                </div>
                <div >
                    <label>Sometimes did you feel mentally exhausted?</label>
                    <input type="radio" value="YES" name="consent" /> YES
                    <input type="radio" value="NO" name="consent"/> NO
                </div>
                <div >
                    <label>Sometimes you feel irritated?</label>
                    <input type="radio" value="YES" name="consent" /> YES
                    <input type="radio" value="NO" name="consent"/> NO
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
            </form>
        );
    }
}
*/
