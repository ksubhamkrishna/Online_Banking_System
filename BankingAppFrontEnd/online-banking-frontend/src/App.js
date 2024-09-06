import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './components/Home';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (

      <Router>
        {/* Header is usually outside the Routes so that it appears on every page */}
        <Home/>

        {/* Defining routes inside the Routes component */}
        <Routes>
          
           <Route path="/login" element = {<Login/>} /> 
           <Route path="/register" element = {<RegistrationForm/>} /> 
        
        </Routes>

        {/* Footer is usually outside the Routes so that it appears on every page */}
      
      </Router>
  );
}

export default App;
