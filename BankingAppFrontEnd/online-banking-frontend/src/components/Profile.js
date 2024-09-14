import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Correct import
import { Header } from './Header';
import { Footer } from './Footer';

export const Profile = () => {
    const [user, setUser] = useState(null); // State to store user data
    const [email, setEmail] = useState(''); // State to store email
    const [firstname, setFirstName] = useState(''); // State to store username
    const [secondname, setSecondName] = useState('');
    const [role, setRole] = useState('');
    const [sub, setSub] = useState(''); // State to store sub (subject or user ID)
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found, please login.');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken);

            // Extract email, username, and sub from the decoded token
            setSub(decodedToken.sub); // Extract the "sub" field from the token

            // Check if the token has expired
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (decodedToken.exp < currentTime) {
                setError('Token has expired. Please login again.');
                return;
            }

            // Fetch user data using the "sub" value
            axios.get(`http://localhost:8080/api/v1/auth/user/${decodedToken.sub}`)
                .then(response => {
                    setEmail(response.data.email); // Set the user data
                    setFirstName(response.data.firstname);
                    setSecondName(response.data.secondname);
                    setRole(response.data.role);
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    setError('Failed to fetch user data.');
                });

        } catch (err) {
            setError('Invalid token.');
        }
    }, []); // Empty dependency array ensures this runs once on mount

    if (error) {
        return <div>{error}</div>;
    }

    // if (!user) {
    //     return <div>Loading...</div>;
    // }

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
                    <p className="card-text">User ID: {sub}</p> {/* Display sub from token */}
                    <p className="card-text">Role: {role}</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};
