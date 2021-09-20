import React from 'react';
import{Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        
        <Link to="/" className="navbar-brand">Home</Link>
           
            <div className="collpase navbar-collpase">

                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/registration' className="nav-link">Registration</Link>
                    </li>  
               </ul>
            </div>
    </nav> 
        
    );
};

export default Navbar; 