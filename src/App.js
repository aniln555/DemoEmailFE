import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Inbox from './Inbox';
import ComposePopup from './ComposePopup';
import Sent from './Sent';
import Drafts from './Drafts';
import Deleted from './Deleted';
import HamburgerMenu from './HamburgerMenu';
import UserDetailPopup from './UserDetailPopup'; // Import the UserDetailPopup component
import dummyEmails from './data/dummyEmails.json';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCompose, setShowCompose] = useState(false);
  const [currentFolder, setCurrentFolder] = useState('inbox');
  const [emails, setEmails] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false); // State for user details popup

  // Function to handle login (You can implement your own login logic here)
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Load emails from the dummy data (Replace this with your API call logic)
    setEmails(dummyEmails);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmails([]);
  };

  // Function to show/hide the compose popup
  const handleCompose = () => {
    setShowCompose((prev) => !prev);
    setShowUserDetails(false); // Close the user details popup when the compose popup is opened
  };

  // Function to handle email submission from the compose popup
  const handleComposeSubmit = (emailData) => {
    // Implement your logic to send the email or update the state with the new email data
    console.log(emailData);
  };

  // Function to handle folder navigation
  const handleFolderChange = (folder) => {
    setCurrentFolder(folder);
    setShowCompose(false); // Close the compose popup after selecting a folder
    setShowUserDetails(false); // Close the user details popup when changing the folder
  };

  // Function to handle hamburger menu click
  const handleMenuClick = () => {
    setShowUserDetails(!showUserDetails); // Toggle the user details popup
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="auth-container">
          <Login onLogin={handleLogin} />
          <Register onRegister={handleLogin} />
        </div>
      ) : (
        <div className="email-client">
          <div className="header">
            <HamburgerMenu onMenuClick={handleMenuClick} />
            <div className="logo">DummyEmailDisplay</div>
            <div className="hamburger-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className={`content ${currentFolder === 'menu' ? 'show-menu' : ''}`}>
            <div className="folder-menu">
              <button onClick={() => handleFolderChange('inbox')}>Inbox</button>
              <button onClick={() => handleFolderChange('sent')}>Sent</button>
              <button onClick={() => handleFolderChange('draft')}>Draft</button>
              <button onClick={() => handleFolderChange('deleted')}>Deleted</button>
            </div>
            {currentFolder === 'inbox' && <Inbox emails={emails} />}
            {currentFolder === 'sent' && <Sent />}
            {currentFolder === 'draft' && <Drafts />}
            {currentFolder === 'deleted' && <Deleted />}
          </div>
          <div className="compose-button" onClick={handleCompose}>
            Compose
          </div>
          {showCompose && <ComposePopup onClose={handleCompose} onSubmit={handleComposeSubmit} />}
          {showUserDetails && <UserDetailPopup onClose={() => setShowUserDetails(false)} />} {/* Use the UserDetailPopup component */}
        </div>
      )}
    </div>
  );
};

export default App;
