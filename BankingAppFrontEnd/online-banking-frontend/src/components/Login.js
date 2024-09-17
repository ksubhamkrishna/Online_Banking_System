import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigator = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (email === '' || password === '') {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signin', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const { token } = response.data;
      // Store JWT token in local storage
      localStorage.setItem('token', token);

      // Redirect to home or dashboard
      navigator('/home'); // Adjust path as necessary

    } catch (error) {
      setError('Invalid email or password.');
    }
  };

  function RegistrationForm() {
    navigator('/register');
}

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
            <button type="button" className="btn btn-secondary w-100" onClick={RegistrationForm}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
