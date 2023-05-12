import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export default function EmployeeForm({ setEmployees }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: id,
      name: name,
      email: email
    };
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newEmployee),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setEmployees(prevEmployees => [...prevEmployees, data]);
        setId('');
        setName('');
        setEmail('');
      })
      .catch(error => console.log(error));
  }


  return (
    <div>
      <div className="container my-5 mx-">
        <h1 className='my-5'>Employee Form</h1>
        <Form  onSubmit={handleSubmit} className="employee-form">
        <Form.Group controlId="formName" className="mb-3">
        <div className="row align-items-center">
  <Form.Label className="col-sm-2" style={{ backgroundColor: 'white', border: '1px solid rgba(0, 255, 0, 0.3)' }}>ID</Form.Label>
  <div className="col-sm-10">
    <Form.Control type="text" placeholder="Enter ID" value={name} onChange={e => setName(e.target.value)} />
  </div>
</div>
</Form.Group>

          <Form.Group controlId="formName" className="mb-3">
  <div className="row align-items-center">
  <Form.Label className="col-sm-2" style={{ backgroundColor: 'white', border: '1px solid rgba(0, 255, 0, 0.3)' }}>Name</Form.Label>
    <div className="col-sm-10">
      <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
    </div>
  </div>
</Form.Group>


          <Form.Group controlId="formEmail" className="mb-3">
  <div className="row align-items-center">
  <Form.Label className="col-sm-2" style={{ backgroundColor: 'white', border: '1px solid rgba(0, 255, 0, 0.3)' }}>Email</Form.Label>
    <div className="col-sm-10">
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
  </div>
</Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}