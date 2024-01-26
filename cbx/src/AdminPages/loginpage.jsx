import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loginpage.css';
import Dashboard from './adminDashboard';
import NavBar from '../Transition-B/Transition-B';
import background from "../assets/LP_Login.jpeg"
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [attemptedLogin, setAttemptedLogin] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    


    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://cbx-backend-e5909b4449e5.herokuapp.com/admin/login',
                {
                    email,
                    password,
                },
                {
                    withCredentials: true, // Include credentials for cross-origin requests
                }
            );

            const data = await response.data;

            if (data.success) {
                setLoggedIn(true);
                setAttemptedLogin(false);
                setEmail('');
                setPassword('');

                const newAccessToken = data.accessToken;
                setAccessToken(newAccessToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

                // Perform a GET request to the '/admin' route after successful login
                await axios.get('http://cbx-backend-e5909b4449e5.herokuapp.com/admin', {
                    withCredentials: true,
                });
            } else {
                setMessage(data.message); // Login failed
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setLoggedIn(false);
                setMessage("Your session has expired. Please log in again.");
            } else if (error.response && error.response.status === 401){
                setAttemptedLogin(true);
                setMessage("Invalid email or password.");
            } else {
                setAttemptedLogin(true);
                setMessage("Server error. Please wait a few moments and try again.");
            }
            
            
            setLoggedIn(false);
            setAccessToken('')
            await handleLogout();
        }
    };

    const handleLogout = async () => {
        try {
            const response = await axios.delete('http://cbx-backend-e5909b4449e5.herokuapp.com/admin/logout', {
                withCredentials: true,
            });
    
            const data = response.data; 
            setAccessToken('');
            setLoggedIn(false); // Clear the authentication state
    
            if (data.success) {
                console.log("Logout Success!");
            } else {
                console.log("Logout Failure");
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    

    return (
      
          
     
        !isLoggedIn ? (
              <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "100vh", // Ensure the div covers the full height of the viewport
            }}
          > <NavBar/>
        <>
            <div style={{marginTop:"20vh"}} className="login-container">
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <input
                        className={"login-button"}
                        type="button"
                        onClick={handleLogin}
                        value={"Login"}
                    />
                {attemptedLogin && <p className="error-message">{`${message}`}</p>}
            </div>
            
        </>
        </div>
        ) : <Dashboard onLogout={handleLogout} accessToken={accessToken}/>
       
    );
};

export default LoginPage;