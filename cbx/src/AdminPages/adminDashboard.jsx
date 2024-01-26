import React from 'react'
import { useState, useEffect } from 'react'
import HomePage from "./HomePage";
import FirmForm from "./FirmForm";
import UserForm from './UserForm';
import axios from 'axios'
import {deleteFile} from './awsHelper'
import './loginpage.css';
import { useNavigate } from 'react-router-dom'; // Import Redirect


const Dashboard = ({onLogout, accessToken}) => { 
  // logout functionality
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

  const checkAuthentication = async () => {
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // await axios.get('http://cbx-backend-e5909b4449e5.herokuapp.com/admin', {
        //     withCredentials: true,
        // });
    } catch (error) {
        console.log("ERROR:", error);
        alert("Token expired, please log in again")
        await handleLogout();
    }
}

  // firms
  const [firms, setFirms] = useState([]);
  const fetchFirms = async () => {
    try {
      const response = await axios.get("http://cbx-backend-e5909b4449e5.herokuapp.com/firms");
      setFirms(response.data);
    } catch (error) {
      console.error("Error fetching firm info:", error);
    }
  };

  const addFirm = async (postData) => {
    try {
      const response = await axios.post('http://cbx-backend-e5909b4449e5.herokuapp.com/firms/firmAdd', postData);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };

  
  const deleteFirm = async (firmId) => {
    try {
      await axios.delete(`http://cbx-backend-e5909b4449e5.herokuapp.com/firms/${firmId}`);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert(error.response.data.error);
    }
  };

  const updateFirm = async (putData) => {
    try {
      await axios.put(`http://cbx-backend-e5909b4449e5.herokuapp.com/firms/firmUpdate`, putData);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert(error.response.data.error);
    }
  };

  const [showFirmForm, setShowFirmForm] = useState(false);
  const [currentFirm, setCurrentFirm] = useState(null);
  const [updateFirmFlag, setUpdateFirmFlag] = useState(false);

  // Function to toggle the FirmForm visibility
  const toggleFirmForm = (firm = null) => {
    setCurrentFirm(firm);
    setShowFirmForm(!showFirmForm);
    if (updateFirmFlag) setUpdateFirmFlag(false);
  };
  
  // Function to handle adding a new firm
  const handleAddOrUpdateFirm = async (newFirm) => {
    try {
      if (updateFirmFlag) {
        // Update existing firm
        setUpdateFirmFlag(true);
        await updateFirm(newFirm);
        setCurrentFirm(newFirm);
        toggleFirmForm(newFirm);
      
      } else {
        setUpdateFirmFlag(false)

        const result = await addFirm(newFirm);
        if (result.error) alert(result.error);
      }
      
      await fetchFirms();
      setShowFirmForm(false);
    } catch (error) {
      alert(error)
    }
  };

  const handleDeleteFirm = async (firmToDelete) => {
    try {
      await deleteFile(firmToDelete.logofile);
      await deleteFirm(firmToDelete._id);
    } catch (error) {
      alert(error)
    }

    fetchFirms()
  };

  const handleUpdateFirmFlag = (value) => {
    setUpdateFirmFlag(value);
  };


  
  // users
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://cbx-backend-e5909b4449e5.herokuapp.com/team/all");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const addUser = async (postData) => {
    try {
      const response = await axios.post('http://cbx-backend-e5909b4449e5.herokuapp.com/team/userAdd', postData);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };

  
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://cbx-backend-e5909b4449e5.herokuapp.com/team/${userId}`);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert(error.response.data.error);
    }
  };

  const updateUser = async (putData) => {
    try {
      await axios.put(`http://cbx-backend-e5909b4449e5.herokuapp.com/team/userUpdate`, putData);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert(error.response.data.error);
    }
  };

  const [showUserForm, setShowUserForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [updateUserFlag, setUpdateUserFlag] = useState(false);

  // Function to toggle the UserForm visibility
  const toggleUserForm = (user = null) => {
    setCurrentUser(user);
    setShowUserForm(!showUserForm);
    if (updateUserFlag) setUpdateUserFlag(false);
  };
  
  // Function to handle adding a new user
  const handleAddOrUpdateUser = async (newUser) => {
    try {
      if (updateUserFlag) {
        // Update existing user
        setUpdateUserFlag(true);
        await updateUser(newUser);
        setCurrentUser(newUser);
        toggleUserForm(newUser);
      
      } else {
        setUpdateUserFlag(false)

        const result = await addUser(newUser);
        if (result.error) alert(result.error);
      }
      
      await fetchUsers();
      setShowUserForm(false);
    } catch (error) {
      alert(error)
    }
  };

  const handleDeleteUser = async (userToDelete) => {
    try {
      await deleteFile(userToDelete.pictureFile);
      await deleteUser(userToDelete._id);
    } catch (error) {
      alert(error)
    }

    fetchUsers()
  };

  const handleUpdateUserFlag = (value) => {
    setUpdateUserFlag(value);
  };

  useEffect(() => {
    fetchFirms();
    fetchUsers();
  }, []);

  useEffect(() => { 
    checkAuthentication();
    const intervalId = setInterval(() => {
      checkAuthentication(); // checks user is authenticated every 10s
    }, 10000);

    return () => clearInterval(intervalId);

  }, []);


  

  return (
      <div>
      <h2 className='admin-header'>Dashboard</h2>
      <div style={{ marginRight: '20px' }}>
      <HomePage
        firms={firms}
        users={users}
        toggleFirmForm={toggleFirmForm}
        onDeleteFirm={handleDeleteFirm}
        onUpdateFirmFlag={handleUpdateFirmFlag}
        toggleUserForm={toggleUserForm}
        onDeleteUser={handleDeleteUser}
        onUpdateUserFlag={handleUpdateUserFlag}
      />
    </div>
    <div style={{ display: 'flex' }}>
      {showFirmForm && (
        <div style={{ flex: 1 }}>
          <FirmForm
            firm={currentFirm}
            onSubmit={handleAddOrUpdateFirm}
            onCancel={toggleFirmForm}
            updateFirmFlag={updateFirmFlag}
          />
        </div>
      )}

      {showUserForm && (
        <div style={{ flex: 1, marginRight: '10px'}}>
          <UserForm
            user={currentUser}
            onSubmit={handleAddOrUpdateUser}
            onCancel={toggleUserForm}
            updateUserFlag={updateUserFlag}
          />
        </div>
      )}
    </div>
    <input
        className={"logout-button"}
        type="button"
        value={"Logout"}
        onClick={handleLogout}
        />
  </div>
  )
}

export default Dashboard