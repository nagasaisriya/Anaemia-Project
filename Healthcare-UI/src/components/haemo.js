import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';


const IFA= props => {
   
    let history=useHistory();
    const [visible,setVisible]=useState(false);
   
	const handleSubmit = e => {
		e.preventDefault();
		const data = {visible};
		const json = JSON.stringify(data, null, 9);
		console.clear();
		console.log(json);
	};
    const handleClick=e=>{
        e.preventDefault();
        
            history.push('/images');
        //alert('Your data is submitted ');
        
    }
   
    return (
            <div>
                <h4>Haematology</h4>
                <div className='consent'>
                <label>Consuming IFA tablets?</label>
                               
                               <input type="radio" className="mx-2" name='isyes' value="1" onClick={()=>setVisible(false)}/>Yes
                              
                                <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onClick={()=>setVisible(true)}/>
                               No
                </div>
                {visible && 
                <div>
                     <div className="form-group">
                                 <label>Reasons for not consuming IFA Tablets?</label><br></br>
                                 <input type="checkbox" name='c1' value="Nobody Advised or not brought IFA Tablets" />Nobody Advised or not brought IFA Tablets
                                 <input type="checkbox" name='c1' value="Not required (already healthy)" />Not required (already healthy) <br></br>
                                 <input type="checkbox" name='c1' value="Side effects" />Side effects <br></br>
                                 <input type="checkbox" name='c1' value="Don’t remember" />Don’t remember <br></br>
                                 <input type="checkbox" name='c1' value="Fear of medications" />Fear of medications<br></br>
                                 <input type="checkbox" name='c1' value="Other" />Other reasons<br></br>

                                
                             </div>
                </div>
                }
               
                <button type="submit" className="btn btn-primary btn-block" id='div1' onClick={handleClick}>Submit</button>
               
            
            </div>
        );
    
}
export default IFA;


/*
-------------------CLASS COMPONENTS-----------------
class IFA extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }

    }
    onchange = e => {
        this.setState({ value: e.target.value });

    }
    onFun = e =>{
        e.preventDefault();
        this.setState({value:e.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        alert('Your data is submitted ');

    }

    render() {
        const { value } = this.state;
        
        return (
            
               
                    <div className="row">
                        <div className="col-sm-12">
                           <center>
                            <h4>Haematology </h4>
                            </center>
                            <div className="form-group">
                                 <label>Haemoglobin %</label>
                                 <input type="number" className="form-control" placeholder="Haemoglobin" />
                             </div>
                             <div className="form-group">
                             <label>Upload picture of report</label>
                                <input type="file" name="img" id="img"/>
                             <br></br></div>
                            <div className="form-group row">
                                <label className="col-sm-6 col-form-label">Haemoglobin less than 11?</label>
                                <div className="col-sm-2 mt-2">Yes
                                    <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />
                                </div>
                                <div className="col-sm-2 mt-2">No
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="0" onChange={this.onchange} />
                                </div>
                            </div>
                            
                            {value === '1' && (
                             <div className="form-group">
                                 <label>Consuming IFA Tablets?</label>
                                 <input type="radio"  name='yes' value="yes"   /> Yes
                                 <input type="radio"  name='yes' value="no"  onChange={this.onFun}/> No
                                
                             </div>
                             )}
                           
                           {  value === 'no' && (
                             <div className="form-group">
                                 <label>Reasons for not consuming IFA Tablets?</label><br></br>
                                 <input type="checkbox" name='c1' value="Nobody Advised or not brought IFA Tablets" />Nobody Advised or not brought IFA Tablets
                                 <input type="checkbox" name='c1' value="Not required (already healthy)" />Not required (already healthy) <br></br>
                                 <input type="checkbox" name='c1' value="Side effects" />Side effects <br></br>
                                 <input type="checkbox" name='c1' value="Don’t remember" />Don’t remember <br></br>
                                 <input type="checkbox" name='c1' value="Fear of medications" />Fear of medications<br></br>
                                 <input type="checkbox" name='c1' value="Other" />Other reasons<br></br>

                                
                             </div>
                             )}
                             
                             
                             

                            <div className="form-group row mt-5 text-center">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-6 mt-2">
                                    <button name='button' className="btn btn-primary btn-lg" onClick={this.handleSubmit}> Submit </button>
                                </div>
                            </div>
                        </div>


                    </div>
                
           
        );
    }
}
export default IFA;
*/
