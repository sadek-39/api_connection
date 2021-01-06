import axios from 'axios';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Formfile() {
    const submit=(e)=>{
        let first_name=e.target[0].value;
        let last_name=e.target[1].value;
        let email=e.target[2].value;
        let password=e.target[3].value;
        let data={
            first_name,
            last_name,
            email,
            password
        };
        console.log(data);
        postUser(data)

    }
    const postUser=(data)=>{
        axios.post('http://localhost:8000/api/create',data)
          .then(d=>{
              console.log(d);
          })
          .catch(err=>{
              console.log(err);
          })
    }
  return (
    <Form onSubmit={e=>{
        e.preventDefault();
        submit(e);

    }}>
      <FormGroup>
        <Label for="first_name">First Name</Label>
        <Input type="name" name="fname" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="name" name="lname" id="last_name" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <button type="Submit">Submit</button>
      </Form>
  );
}
  export default Formfile;