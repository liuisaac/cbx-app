import React from 'react';
import './loginpage.css';
import { useNavigate } from 'react-router-dom'; // Import Redirect

const Dashboard = ({onLogout}) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
             await onLogout();
        } catch (error) {
            console.error('Error during logout:', error);
            navigate("/lp-login")
            window.location.reload()
        }
    };

  return (
    <div>
      <h2 className='admin-header'>Dashboard</h2>
      <p>You are logged in!</p>
      <input
        className={"logout-button"}
        type="button"
        value={"Logout"}
        onClick={handleLogout}
        />
    </div>
  );
};

export default Dashboard;