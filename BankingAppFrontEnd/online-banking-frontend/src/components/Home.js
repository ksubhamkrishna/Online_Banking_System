import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem('token');

    window.scrollTo(0, 0);
    // If no token, redirect to login page
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSignOut = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('token');
    
    // Redirect to the login page
    navigate('/');
  };

  return (
    <><Header /><div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <h1 className="text-center mb-4">Welcome to Your Bank</h1>
                  <p className="text-center mb-4">
                      Manage your account, view your transactions, and more.
                  </p>
                  <div className="d-flex justify-content-center mb-3">
                      <Link to="/profile" className="btn btn-primary mx-2">
                          View Profile
                      </Link>
                      <Link to="/transactions" className="btn btn-secondary mx-2">
                          View Transactions
                      </Link>
                  </div>
                  <div className="d-flex justify-content-center">
                      <button className="btn btn-danger" onClick={handleSignOut}>
                          Sign Out
                      </button>
                  </div>
              </div>
          </div>
      </div>
        <Footer />
      </>
  );
};

export default Home;
