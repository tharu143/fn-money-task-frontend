import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../img/dashboard_icon.png'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Assessment Platform</h1>
        <p className="mt-4 text-lg">Your place to submit and review assessment tasks.</p>
        <nav className="mt-6">
          <Link to="/" className="text-white font-bold mx-4 hover:underline">Home</Link>
          <Link to="/login" className="text-white font-bold mx-4 hover:underline">Login</Link>
          <Link to="/register" className="text-white font-bold mx-4 hover:underline">Register</Link>
          <Link to="/assessment" className="text-white font-bold mx-4 hover:underline">Assessment Tasks</Link>
        </nav>
      </header>

      
      <div className="flex justify-center mt-10">
        <img 
          src={landingImage} 
          alt="Assessment Platform"
          className="rounded-md shadow-md w-1/2 h-auto" 
        />
      </div>

      
      <section className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Why Choose Our Platform?</h2>
        <p className="text-gray-700 mb-4">
          Our Assessment Platform is designed to streamline the process of submitting and reviewing assignments.
          Whether you're a student looking to showcase your work or an instructor assessing submissions, we've got you covered.
        </p>
        <p className="text-gray-700 mb-4">
          With user-friendly interfaces and seamless navigation, you can easily track your tasks and receive timely feedback. 
          Join us today and take your assessment experience to the next level!
        </p>
        <p className="text-gray-700">
          Ready to get started? Click on the links above to log in or register now!
        </p>
      </section>
      
      
    </div>
  );
};

export default LandingPage;
