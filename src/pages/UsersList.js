import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UsersList.css"; 

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to view this page.");
      navigate("/login");
    } else {
      fetchUsers();
    }
  }, []);

  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("User deleted successfully!");
          setUsers(users.filter((user) => user.id !== id)); 
        } else {
          alert("Failed to delete user.");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting the user.");
      }
    }
  };

  
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="users-container">
      <h1>Users List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} className="avatar" />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <div className="card-buttons">
                <button className="edit-btn" onClick={() => handleEdit(user.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
