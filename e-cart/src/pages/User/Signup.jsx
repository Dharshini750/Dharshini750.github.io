import React from 'react';
import Logox from '../../assets/img/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <div className="w-full h-[92vh] flex justify-center items-center primary">
      <div className="w-[40%] h-[90%] flex flex-col justify-center items-center pl-20">
        <img src={Logox} alt="logo" className="w-auto h-[10%] rounded-full" />
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-title">Sign up to create an account</p>
          <div className="input-container">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email Id" required />
          </div>
          <div className="input-container">
            <input type="number" placeholder="Phone number" required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="submit">Sign up</button>
          <p className="signup-link">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
