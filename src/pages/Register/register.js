import React from 'react';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='registerContainer'>
        <div className='registerSec'>
          <span className='regisTitle'>Register</span>
          <div className='regisForm'>
            <label>Username</label>
            <input className='regisInput' type='text' placeholder='Enter your username...' />
            <label>Email</label>
            <input className='regisInput' type='email' placeholder='Enter your email...' />
            <label>Password</label>
            <input className='regisInput' type='password' placeholder='Enter your password...' />
            <button className='regisBut'>Register</button>
          </div>
          <button className='regisLoginBut'>
            <Link to="/login" className='toLogin'>Login</Link>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Register;