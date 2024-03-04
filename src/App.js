import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Login'; 
import Employee from './Employee';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Employee" element={<Employee />} />

    </Routes>
  </Router>
  );
}

export default App;
