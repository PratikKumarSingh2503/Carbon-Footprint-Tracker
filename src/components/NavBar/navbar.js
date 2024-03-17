import React from "react";
import './navbar.css';
import profilePic from '../../assessts/profilePic.png'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const user = false;

    return (
        <div className='nav'>
            <div className='left'>
                <RouterLink to="/" className=''>
                    <h3>Tracker.</h3>
                    <p>Explore<span> More</span></p>
                </RouterLink>
            </div>


            <div className='middle'>
                <li>
                    <RouterLink to="/" className='middlelink'>HOME</RouterLink>
                </li>
                <li>
                    <RouterLink to="/workflow" className='middlelink'>WORKFLOW</RouterLink>
                </li>
                <li>
                    <RouterLink to="/tracker" className='middlelink'>TRACKER</RouterLink>
                </li>
            </div>


            <div className='right'>
                {user ? (
                    <div className='sub-right1'>
                        <img className='right-img' src={profilePic} alt='' height={50} width={50} />
                        <li>
                            <RouterLink to="/" className='rightlink'>{user && 'LOGOUT'}</RouterLink>
                        </li>
                    </div>
                ) : (
                    <div className='right2'>
                        <li>
                            <RouterLink to="/login" className='rightlink'>LOGIN</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/register" className='rightlink'>REGISTER</RouterLink>
                        </li>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Navbar;