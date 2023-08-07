import React, { useState } from 'react';

const ComposePopup = ({ onClose, onSubmit }) => {
  const [emailData, setEmailData] = useState({ to: '', subject: '', body: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(emailData);
  };

  return (
    <div className="compose-popup">
      <div className="compose-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Compose Email</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={emailData.to}
            onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
            required
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
            required
          />
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={emailData.body}
            onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ComposePopup;
