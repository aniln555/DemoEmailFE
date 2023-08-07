import React from 'react';
import { MdDelete } from 'react-icons/md'; // Import the delete icon from react-icons
import dummyEmails from './data/dummyEmails.json';

const Inbox = () => {
  const handleDelete = (id) => {
    // Implement your logic to move the email to the deleted folder
    console.log('Deleting email with ID:', id);
  };

  return (
    <div className="email-content">
      <h2>Inbox</h2>
      <div className="email-list">
        {dummyEmails.map((email) => (
          <div className="email-item" key={email.id}>
            <div className="email-details">
              <div className="email-sender">{email.sender}</div>
              <div className="email-subject">{email.subject}</div>
              <div className="email-date">{email.date}</div>
            </div>
            <div className="delete-icon" onClick={() => handleDelete(email.id)}>
              <MdDelete />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
