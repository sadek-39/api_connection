import './App.css'
import React,{useEffect, useState} from 'react'
import { Table,Button } from 'reactstrap';
import axios from 'axios';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  const [admin, setadmin] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/admin")
          .then(res=>{
            console.log(res);
            setadmin(res.data);
          })
          .catch(err=>{
            console.log(err);
          })
  },[])
  
  return (
    <div className="App cotainer">
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
           admin.map(admins=>
             <tr>
            <td>{admins.id}</td>
            <td>{admins.first_name}</td>
            <td>{admins.last_name}</td>
            <td>{admins.email}</td>
            <td>
            <Button color="Success" size="sm" className="editButton">Edit</Button>
            <Button color="Danger" size="sm" className="dltBButton">Delete</Button>
            </td>
          </tr>)
         }
      </tbody>

    </Table>

      
    </div>
  )
}

export default App
