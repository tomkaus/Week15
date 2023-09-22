import React, { useState } from 'react';
import '../Components/UserCreationForm.css';

// Define the UserCreationForm component
const UserCreationForm = ({ onSubmit }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    jobTitle: '',
    companyName: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUser);
    setNewUser({ name: '', jobTitle: '', companyName: '' });
  };

  //Render the form
  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <h3>Create New User</h3>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={newUser.name}
        onChange={handleChange}
        className="form-input"
      />
      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={newUser.jobTitle}
        onChange={handleChange}
        className="form-input"
      />
      <label>Company Name</label>
      <input
        type="text"
        name="companyName"
        value={newUser.companyName}
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default UserCreationForm;
