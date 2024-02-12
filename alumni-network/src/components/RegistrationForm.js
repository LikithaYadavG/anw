// RegistrationForm.js
import React, { useState } from 'react';
import './css/RegistrationForm.css'; // Import your custom CSS file

const RegistrationForm = ({ selectedRole, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the role and form data to the parent component for further processing
    onSubmit(selectedRole, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="custom-registration-form" noValidate>
      <h2 className="custom-form-heading">Registration Form - {selectedRole}</h2>
      <div className="custom-form-group">
        <label htmlFor="username" className="custom-label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="custom-input"
            id="username"
            required
          />
          <div className="custom-error">Please enter a username.</div>
        </label>
      </div>
      <div className="custom-form-group">
        <label htmlFor="email" className="custom-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="custom-input"
            id="email"
            required
          />
          <div className="custom-error">Please enter a valid email address.</div>
        </label>
      </div>
      <div className="custom-form-group">
        <label htmlFor="password" className="custom-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="custom-input"
            id="password"
            required
          />
          <div className="custom-error">Please enter a password.</div>
        </label>
      </div>
      {/* Add more fields for each role as needed */}
      <button type="submit" className="custom-submit-button">Register</button>
    </form>
  );
};

export default RegistrationForm;
