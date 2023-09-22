import React, { useState } from 'react';
import '../Components/UserUpdateModal.css';

// Define the UseUpdateModal component
const UserUpdateModal = ({ user, onUpdate, onClose }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });

   // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedUser);
    onClose(); // Close the modal
  };

  // Render the modal content
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <label>Update Name</label>
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
          />
          <label>Update Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={updatedUser.jobTitle}
            onChange={handleChange}
          />
          <label>Update Company Name</label>
          <input
            type="text"
            name="companyName"
            value={updatedUser.companyName}
            onChange={handleChange}
          />
          <button type="submit">Update</button>
        </form>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UserUpdateModal;
