import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { Header } from './Header';
import { Footer } from './Footer';

export const Profile = () => {
    const [email, setEmail] = useState(''); // State to store email
    const [firstname, setFirstName] = useState(''); // State to store first name
    const [secondname, setSecondName] = useState(''); // State to store second name
    const [role, setRole] = useState(''); // State to store user role
    const [accountNumber, setAccountNumber] = useState(''); // State to store account number
    const [ifscCode, setIfscCode] = useState(''); // State to store IFSC code
    const [sub, setSub] = useState(''); // State to store user ID (sub)
    const [error, setError] = useState(''); // State to handle errors

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            setError('No token found, please login.');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken);

            // Extract the sub (user ID) and role from the token
            setSub(decodedToken.sub);
            console.log(sub);

            // Check if the token has expired
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (decodedToken.exp < currentTime) {
                setError('Token has expired. Please login again.');
                return;
            }

            // Fetch user data using the "sub" value (user ID)
            axios.get(`http://localhost:8080/api/v1/auth/user/${decodedToken.sub}`)
                .then(response => {
                    setEmail(response.data.email); // Set the user data
                    setFirstName(response.data.firstname);
                    setSecondName(response.data.secondname);
                    setRole(response.data.role);

                    // Fetch account details only if the role is "user"
                    if (response.data.role === 'USER') {
                        axios.get(`http://localhost:8080/api/v1/auth/account_details/${decodedToken.sub}`)
                            .then(accountResponse => {
                                setAccountNumber(accountResponse.data.accountNumber); // Set the account number
                                setIfscCode(accountResponse.data.ifscCode); // Set the IFSC code
                            })
                            .catch(accountError => {
                                console.error('Error fetching account details:', accountError);
                                setError('Failed to fetch account details.');
                            });
                    }
                })
                .catch(userError => {
                    console.error('Error fetching user data:', userError);
                    setError('Failed to fetch user data.');
                });

        } catch (err) {
            console.error('Error decoding token:', err);
            setError('Invalid token.');
        }
    }, []); // Empty dependency array ensures this runs once on mount

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
        <Header/>
        <div className="container mt-5">
            <h1>User Profile</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Username: {firstname} {secondname}</p>
                    <p className="card-text">User ID: {sub}</p> {/* Display sub (user ID) */}
                    <p className="card-text">Role: {role}</p>
                    
                    {/* Conditionally render account information if the user has the "user" role */}
                    {role=== 'USER' && (
                        <>
                            <p className="card-text">Account Number: {accountNumber}</p>
                            <p className="card-text">IFSC Code: {ifscCode}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};
