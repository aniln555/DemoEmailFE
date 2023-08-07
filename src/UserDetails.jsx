import React from 'react';

const UserDetails = ({ onClose }) => {
  return (
    <div className="user-details">
      <div>Name: John Doe</div>
      <div>Lastname: Doe</div>
      {/* Add profile icon */}
      <button onClick={onClose}>Save</button>
    </div>
  );
};

export default UserDetails;
