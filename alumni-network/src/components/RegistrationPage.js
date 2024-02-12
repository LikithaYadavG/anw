// RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import './css/RegistrationPage.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleRegistrationSubmit = (role, formData) => {
    // Handle the registration logic here (e.g., send data to the backend)
    console.log(`Registering as ${role}`, formData);
    // After successful registration, you can navigate or perform other actions
    navigate('/success'); // Replace with your desired navigation path
  };

  return (
    <div className="custom-registration-page-container">
      <h2 className="custom-text-center">Choose your role:</h2>
      <div className="custom-form-check">
        <input
          className="custom-input-checkbox"
          type="radio"
          name="role"
          value="student"
          onChange={() => handleRoleSelection('student')}
        />
        <label className="custom-label">Student</label>
      </div>
      <div className="custom-form-check">
        <input
          className="custom-input-checkbox"
          type="radio"
          name="role"
          value="staff"
          onChange={() => handleRoleSelection('staff')}
        />
        <label className="custom-label">Staff</label>
      </div>
      <div className="custom-form-check">
        <input
          className="custom-input-checkbox"
          type="radio"
          name="role"
          value="alumni"
          onChange={() => handleRoleSelection('alumni')}
        />
        <label className="custom-label">Alumni</label>
      </div>
      {selectedRole && (
        <RegistrationForm selectedRole={selectedRole} onSubmit={handleRegistrationSubmit} />
      )}
    </div>
  );
};

export default RegistrationPage;
