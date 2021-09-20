import axios from 'axios';
import { Link } from 'react-router-dom';

//**COMPONENT TO LIST ALL CLIENTS REGISTERED */

//**DELETE FUNCTION  */
const ClientItem = (props) =>{

  const deleteHandler = (id) => {
    let url = `http://localhost:5000/users/delete/${id}`;
    const result =  window.confirm("Are you sure you want to delete this client?");
    if(result){
      axios.delete(url)
      .then(res =>{
        window.alert(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      window.location.reload();
    }
  }  
  
  return(
    <>
      <tr key={props.client.name}>
      <td>{props.client.name}</td>
      <td>{props.client.phone}</td>
      <td>{props.client.email}</td>
      <td>{props.client.company}</td>
      <td>{props.client.role}</td>
      <td>{props.client.description}</td>
      <td><Link to={`/edit/${props.client._id}`} className="btn btn-warning">EDIT</Link></td> 
      <td><button onClick={()=> deleteHandler(props.client._id)} className="btn btn-danger">DELETE</button></td>
      </tr>
    </>
  );
}
   
export default ClientItem;