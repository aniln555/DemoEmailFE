// UserDetailPopup.js

import React from 'react';

const UserDetailPopup = ({ onClose }) => {
  return (
    <div className="user-details-popup">
      <div className="user-details-popup-content">
        <div>User Dummy Email</div>
        <div>Name: John</div>
        <div>Last Name: Doe</div>
        {/* Add more user details as needed */}
        <button className="close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default UserDetailPopup;
