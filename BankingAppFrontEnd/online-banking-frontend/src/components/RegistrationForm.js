import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // Either "admin" or "user"
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPANNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

function Login(){
    navigate("/");
}

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const errorsCopy = {};

    if (!firstName.trim()) {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName.trim()) {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }
    if (!email.trim()) {
      errorsCopy.email = 'Email is required';
      valid = false;
    }
    if (!password.trim()) {
      errorsCopy.password = 'Password is required';
      valid = false;
    }
    if (!aadharNumber.trim()) {
      errorsCopy.aadharNumber = 'Aadhar number is required';
      valid = false;
    }
    if (!panNumber.trim()) {
        errorsCopy.panNumber = 'PAN number is required';
        valid = false;
      }
  
    setErrors(errorsCopy);
    return valid;
  };

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const signUpRequest = { firstName, lastName, email, password, userType, aadharNumber,panNumber };

      try {
        
        // POST request to your signup API
        console.log(signUpRequest);
        const response = await axios.post('http://localhost:8080/api/v1/auth/signup', signUpRequest);

        if (response.status === 200) {
          setSuccessMessage('User registered successfully!');
          setErrorMessage('');
          
          // Redirect to login after 2 seconds
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        console.error('Error:', error.response || error.message);
        if (error.response && error.response.status === 400) {
          setErrorMessage('User already exists or invalid data.');
        } else {
          setErrorMessage('Registration failed. Please try again.');
        }
        setSuccessMessage(''); // Clear success message if there's an error
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>

          {/* Success Message */}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          {/* Validation Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="alert alert-danger">
              {Object.values(errors).map((err, index) => (
                <div key={index}>{err}</div>
              ))}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="aadharNumber">Aadhar Card Number</label>
              <input
                type="text"
                id="aadharNumber"
                className="form-control"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="PANNUmber">PAN Number</label>
              <input
                type="text"
                id="PANNumber"
                className="form-control"
                value={panNumber}
                onChange={(e) => setPANNumber(e.target.value)}
                required
              />
            </div>

            {/* <div className="form-group mb-3">
              <label htmlFor="userType">Role</label>
              <select
                id="userType"
                className="form-control"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">ADMIN</option>
                <option value="user">USER</option>
              </select>
            </div> */}
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Register
            </button>
            <button type="button" className="btn btn-secondary w-100" onClick={Login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
