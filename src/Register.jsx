import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your own registration logic here
    if (email && password) {
      onRegister();
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="myemail@example.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
