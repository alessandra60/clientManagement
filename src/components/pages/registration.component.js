import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { API_ADD } from '../constant';

//**COMPONENT  TO REGISTER CLIENTS  */

const Registration = () => {
    
    const history = useHistory();
    const [client, setClient] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        role: "",
        description: ""
    })

    const onChangeClientName = (e) => {
        setClient({...client, name: e.target.value});
    }
    const onChangeClientPhone= (e) => {
        setClient({...client, phone: e.target.value});
    }
    const onChangeClientEmail= (e) => {
        setClient({...client, email: e.target.value});
    }
    const onChangeClientCompany= (e) => {
        setClient({...client, company: e.target.value});
    }
    const onChangeClientRole= (e) => {
        setClient({...client, role: e.target.value});
    }
    const onChangeClientDescription= (e) => {
        setClient({...client, description: e.target.value});
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
            console.log("Submit form => check the client object: ", client)
            axios.post(API_ADD, {
                client
                }
            )
        .then((res) =>{
            console.log("result is ", res.data);
                if(res.data.isPhoneNumber === true){
                    alert(res.data.msg);
                    history.push('/');
                }else{
                    alert(res.data.msg)
                }        
            }
        )
            .catch((err) =>{
                console.log(err)
                    alert("Invalid input, try again.")
            }
        )
    }

    return(
        <>
        <div>
            <h3>Registration</h3>
            
            <div style={{ marginLeft: '10%', marginRight: '10%' }}>
                <form onSubmit={submitHandler}>
                    <div className="form-group"> 
                        <label>Name *: </label>
                        <input  
                        type="text"
                        placeholder="Field Required" 
                        required 
                        className="form-control" 
                        value={client.name} 
                        onChange={onChangeClientName}
                        />
                     
                        <label>Phone *: </label>
                        <input  
                        type="string"
                        placeholder="Field Required"  
                        required 
                        className="form-control" 
                        value={client.phone} 
                        onChange={onChangeClientPhone}
                        /> 

                        <label>Email*: </label>
                        <input  
                        type="email"
                        placeholder="Field Required" 
                        required 
                        className="form-control" 
                        value={client.email} 
                        onChange={onChangeClientEmail}
                        />

                        <label>Company: </label>
                        <input  type="text" 
                        className="form-control"
                        value={client.company} 
                        onChange={onChangeClientCompany}
                        />

                        <label>Role: </label>
                        <input  type="text"
                        className="form-control" 
                        value={client.role} 
                        onChange={onChangeClientRole}/>

                        <label>Description: </label>
                        <input  type="text"
                        className="form-control" 
                        value={client.description} 
                        onChange={onChangeClientDescription}/>
                    </div> 

                    <div className="form-group">  
                        <input type="submit" value="Register" className="btn btn-primary" style={{margin: '16px'}} />
                    </div>                
                </form>
            </div>
            </div>
        </>
    )

};

export default Registration;