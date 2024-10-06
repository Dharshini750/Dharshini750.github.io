import React from 'react';
import Logox from '../assets/img/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
          <p className="form-title">Login to your account</p>
          <div className="input-container">
            <input type="email" placeholder="Email" required autoComplete='' />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="submit">Login</button>
          <p className="signup-link">
            No account?
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
