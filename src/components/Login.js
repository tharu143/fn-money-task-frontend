import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import loginIcon from '../img/login.png'; 

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem('token', data.token);
        alert('Login Successful!');
        navigate('/assessment'); // Redirect to assessment tasks page
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Login</h2>

      <div className="flex justify-center mb-4">
        <img 
          src={loginIcon} 
          alt="Login Illustration"
          className="rounded-md shadow-md w-20 h-20" 
        />
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
