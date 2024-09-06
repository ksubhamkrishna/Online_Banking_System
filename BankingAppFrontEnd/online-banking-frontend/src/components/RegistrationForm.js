import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import  saveCustomer  from './service/BankService';

const RegistrationForm = () => {
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigator = useNavigate();

// const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!firstname || !secondname || !email || !password || !role) {
//       setError('All fields are required.');
//       return;
//     }
//     // Add your registration logic here
//     console.log('Registration data:', { firstname, secondname, email, password, role });
//     setError('');
//   };

  function LoginFunction(){
    navigator('/login')
  }

  function createCustomer(e){
    e.preventDefault();

    if(validateForm()){

        const customer= {firstname,secondname,email,password,role}
        console.log(customer);
            saveCustomer(customer).then((response) => {
                console.log(response.data);
                navigator('/login')
                            }).catch(error =>{
                               console.error(error); 
                            })
                }
            
            
            }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... error}

    if(firstname.trim()){
        errorsCopy.firstName = '';
    }
    else{
        errorsCopy.firstName='First name is required';
        valid = false;
    }

    if(secondname.trim()){
        errorsCopy.secondname = '';
    }
    else{
        errorsCopy.lastName='First name is required';
        valid = false;
    }
    if(email.trim()){
        errorsCopy.email = '';
    }else {
        errorsCopy.email = 'Email is required';
        valid = false;
    }

    if(password.trim()){
        errorsCopy.password = '';
    }else {
        errorsCopy.password = 'Phone Number is required';
        valid = false;
    }

    setError(errorsCopy);

    return valid;

}

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form>
            <div className="form-group mb-3">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="secondname">Second Name</label>
              <input
                type="text"
                id="secondname"
                className="form-control"
                value={secondname}
                onChange={(e) => setSecondname(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="role">Role</label>
              <select
                id="role"
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                {/* Add more roles as needed */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2" onSubmit={createCustomer}>Register</button>
            <button type="submit" className="btn btn-secondary w-100" onClick={LoginFunction}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
