import '../Components/App.css';
import React, { useState, useEffect } from 'react';
import UserList from '../Components/UserList'; // Adjust the import path for UserList
import UserCreationForm from '../Components/UserCreationForm'; // Adjust the import path for UserCreationForm
import UserUpdateModal from '../Components/UserUpdateModal'; // Import your new modal component


// Define the main App component
function App() {
  const MOCK_API_URL = 'https://650b1922dfd73d1fab09934a.mockapi.io/users';

  const [users, setUsers] = useState([{}]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Define the getUsers function to fetch users from mock API
  const getUsers = () => {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  };

  // Define the deleteUser function by ID
  const deleteUser = (id) => {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers());
  };

  // Define the postNewUser function
  const postNewUser = (newUser) => {
    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then(() => getUsers());
  };

  // Define the updateUser function
  const updateUser = (updatedUser) => {
    fetch(`${MOCK_API_URL}/${updatedUser.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      getUsers();
      setSelectedUser(null); // Clear the selectedUser state
    });
  };

  // use useEffect to fetch users when the component mounts
  useEffect(() => {
    getUsers();
  }, []);

// render the UserCreationForm, UserList, and userUpdateModal components
return (
  <div className="App">
    <UserCreationForm onSubmit={postNewUser} />
    <UserList users={users} onDelete={deleteUser} onUpdate={setSelectedUser} />
    {selectedUser && (
      <UserUpdateModal
        user={selectedUser}
        onUpdate={updateUser}
        onClose={() => setSelectedUser(null)}
      />
    )}
  </div>
);

}

export default App;
