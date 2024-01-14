import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './homepage.css'

const HomePage = ({ firms, users, toggleFirmForm, onDeleteFirm, onUpdateFirmFlag, toggleUserForm, onDeleteUser, onUpdateUserFlag }) => {

    // firms
    const [selectedFirm, setSelectedFirm] = useState(null);
    const handleFirmSelection = (firm) => {
        setSelectedFirm(firm);
    };

    const handleUpdateFirm = () => {
        if (selectedFirm) {
          toggleFirmForm(selectedFirm);
          onUpdateFirmFlag(true);
        }
    };

    const handleDeleteFirm = () => {
        if (selectedFirm) {
          onDeleteFirm(selectedFirm);
        }
    };

    // users
    const [selectedUser, setSelectedUser] = useState(null);
    const handleUserSelection = (user) => {
      setSelectedUser(user);
    };

  const handleUpdateUser = () => {
    if (selectedUser) {
      toggleUserForm(selectedUser);
      onUpdateUserFlag(true);
    }
  };

  const handleDeleteUser = () => {
      if (selectedUser) {
        onDeleteUser(selectedUser);
      }
  };
    


    HomePage.propTypes = {
      firms: PropTypes.array,
      users: PropTypes.array,
      toggleFirmForm: PropTypes.func.isRequired,
      onDeleteFirm: PropTypes.func.isRequired,
      onUpdateFirmFlag: PropTypes.func.isRequired,
      toggleUserForm: PropTypes.func.isRequired,
      onDeleteUser: PropTypes.func.isRequired,
      onUpdateUserFlag: PropTypes.func.isRequired,
    };


    return (
      <div style={{ display: 'flex' }}>
        {/* Firms Section */}
        <div style={{ marginRight: '20px' }}>
          <h2 className='subsection-header'>Firms</h2>
          {firms.map((firm, index) => (
            <div key={index} className="radio-item">
              <input type="radio" id={`radio-${index}`} name="firm" value={firm.name} onChange={() => handleFirmSelection(firm)} />
              <label htmlFor={`radio-${index}`} className="radio-text">{firm.name}</label>
            </div>
          ))}
          <button onClick={toggleFirmForm} className="action-button" >Add Firm</button>
          <button onClick={handleUpdateFirm} disabled={!selectedFirm} className="action-button" >Update Firm</button>
          <button onClick={handleDeleteFirm} disabled={!selectedFirm} className="action-button" >Delete Firm</button>
        </div>

        {/* Users Section */}
        <div>
          <h2 className='subsection-header'>Users</h2>
          {users.map((user, index) => (
            <div key={index} className="radio-item">
              <input type="radio" id={`radio-${index}`} name="user" value={user.name} onChange={() => handleUserSelection(user)} />
              <label htmlFor={`radio-${index}`} className="radio-text">{`${user.firstName} ${user.lastName}`}</label>
            </div>
          ))}
          <button onClick={toggleUserForm} className="action-button" > Add User</button>
          <button onClick={handleUpdateUser} disabled={!selectedUser} className="action-button" >Update User</button>
          <button onClick={handleDeleteUser} disabled={!selectedUser} className="action-button" >Delete User</button>
        </div>
    </div>
    );
  };
  
  export default HomePage;
  