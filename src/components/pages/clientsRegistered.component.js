import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ClientItem from './clientItem.component';

//**COMPONENT TO SHOW CLIENTS REGISTERED  */
const ClienstRegistered=()=>{
  const[clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setClients(data))
  }, [clients]);

    return(
    <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '5%' }}>
      <Table striped bordered hover> 
       <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Role</th>
              <th>Description</th>
              <th>#</th>
              <th>#</th>
            </tr>
        </thead>
          <tbody>
            {clients.map(client => {
                return <ClientItem client={client}/>
                }
              )
            }
          </tbody>
          </Table>
    </div>     
  );
}
 
export default ClienstRegistered;