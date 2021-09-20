import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch}from  'react-router-dom';
import Navbar from './components/template/navbar.component.js';
import ClienstRegistered from './components/pages/clientsRegistered.component.js';
import Registration from './components/pages/registration.component';
import EditClients from './components/pages/edit.component';


const App=()=> {
  return (
    <Router>
      <div>
        <Navbar/>
      <Switch>   
              <Route path="/" exact><ClienstRegistered/></Route>          
              <Route path="/registration"><Registration/></Route>
              <Route path="/edit/:id" component={EditClients} ></Route>        
        {/* <Redirect to="/"/> */}
      </Switch>
      </div>
    </Router>
  );
} 

export default App;





