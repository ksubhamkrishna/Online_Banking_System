import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Profile } from './components/Profile';


function App() {
  return (

      <Router>
          <div className="d-flex flex-column min-vh-100">
        {/* Header is usually outside the Routes so that it appears on every page */}
        {/* <Header /> */}

        {/* Defining routes inside the Routes component */}
        <Routes>
          
           <Route path="/" element = {<Login/>} /> 
           <Route path="/register" element = {<RegistrationForm/>} /> 
           <Route path="/home" element = {<Home/>} />
           <Route path="/profile" element = {<Profile/>} />
        
        </Routes>

        {/* Footer is usually outside the Routes so that it appears on every page */}
      
        </div>
      </Router>
  );
}

export default App;
