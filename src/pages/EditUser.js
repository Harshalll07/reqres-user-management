import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditUser.css";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state || {};

  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit (Update User)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://reqres.in/api/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User updated successfully!");
        navigate("/users"); // Redirect to Users List
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  return (
    <div className="edit-user-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />

        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
