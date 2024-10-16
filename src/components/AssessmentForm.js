import React, { useState } from 'react';
import assessmentIcon from '../img/dashboard_icon.png'; 

const AssessmentForm = () => {
  const [formData, setFormData] = useState({ task: '', description: '', file: null });

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Assessment Submitted!');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Submit Assessment</h2>
      
      
      <div className="flex justify-center mb-4">
        <img 
          src={assessmentIcon}
          alt="Assessment Illustration"
          className="rounded-md shadow-md w-20 h-20" 
        />
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Task Title:</label>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload File:</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssessmentForm;
