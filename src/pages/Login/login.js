import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {

//   const [isTransparent, setIsTransparent] = useState(false);

//   const handleloginSecClick = (e) => {
//     if (e.target.className.includes('loginSec')) {
//     setIsTransparent(true);
//     }
//   };

  return (
    <div className='login'>
      {/* <div className={`loginContainer ${isTransparent ? 'transparent' : ''}`} onClick={handleloginSecClick} > */}
      <div className='loginContainer'>
        <div className='loginSec' >
          <span className='loginTitle'>Login</span>
          <div className='loginForm'>
            <label>Email</label>
            <input
              className='loginInput'
              type='email'
              placeholder='Enter your email...' />
            <label>Password</label>
            <input
              className='loginInput'
              type='password'
              placeholder='Enter your password...' />
            <button className='loginBut'>Login</button>
          </div>
          <button className='loginRegisBut'>
            <Link to="/register" className='toRegister'>Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;