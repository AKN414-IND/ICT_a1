import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Table, Form } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.log(error));
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar bg="lighthttps://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png" expand="lg">
        <Navbar.Brand href="#home">Employee List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <Form.Control
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container my-4">
  <Table striped bordered hover style={{ backgroundColor: 'white' }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {filteredEmployees.map(employee => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

      
    
    </div>

  );
}
