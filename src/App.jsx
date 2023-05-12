import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EmployeeForm from './pages/EmployeeForm';




export default function App() {
  return (
    <>
    
    
    <Navbar /><Container>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<EmployeeForm />} />
          <Route path="/about" element={<About />} />
       </Routes>
      </Container>
      
      
      </>
  );
};

