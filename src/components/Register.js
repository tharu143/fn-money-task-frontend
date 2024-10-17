import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerIcon from '../img/signin.png'; 

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace the alert with actual API call
    // Example: await registerUser(formData);
    console.log(formData);
    
    // Redirect to login page on success
    alert('Registration Successful!');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Register</h2>
      
      <div className="flex justify-center mb-4">
        <img 
          src={registerIcon} 
          alt="Registration Illustration"
          className="rounded-md shadow-md w-20 h-20" 
        />
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
