import React from 'react';
import './footer.css';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footerSec'>
                <div className='footerContainer'>
                    <div className='footerSlide'>
                        <h3>Quick Links</h3>
                        <RouterLink to="/"><i class="fa-solid fa-house"></i> Home</RouterLink>
                        <RouterLink to="/workflow"><i class="fa-solid fa-house"></i> Workflow</RouterLink>
                        <RouterLink to="/tracker"><i class="fa-brands fa-servicestack"></i> Track</RouterLink>
                    </div>
                    <div className='footerSlide'>
                        <h3>Branches</h3>
                        <a href='#'>Delhi</a>
                        <a href='#'>Kolkata</a>
                        <a href='#'>Mumbai</a>
                        <a href='#'>Chennai</a>
                    </div>
                    <div className='footerSlide'>
                        <h3>Contact Info</h3>
                        <a href='#'><i class="fa-solid fa-phone-flip"></i> +123-456-7890</a>
                        <a href='#'><i class="fa-solid fa-phone-flip"></i> +111-222-3333</a>
                        <a href='#'><i class="fa-solid fa-envelope"></i> pratikkumarsingh@gmail.com</a>
                        <a href='#'><i class="fa-solid fa-envelope"></i> prashantanandgdd@gmail.com</a>
                        <a href='#'><i class="fa-solid fa-map"></i> Kolkata, India - 700141</a>
                    </div>
                    <div className='footerSlide'>
                        <h3>Follow Us</h3>
                         {/* Member 1 contact Info  */}
                        <a href="https://github.com/PratikKumarSingh2503"><i class="fa-brands fa-facebook"></i> Facebook</a>
                        <a href="https://twitter.com/PratikSingh819"><i class="fa-brands fa-twitter"></i> Twitter</a>
                        <a href="https://www.linkedin.com/in/pratik-kumar-singh-aa6746221/"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                        <a href="https://github.com/PratikKumarSingh2503"><i class="fa-brands fa-github"></i> Github</a>
                         {/* Member 2 Contact Info */}
                        <a href="https://twitter.com/PrashanAnand"><i class="fa-brands fa-twitter"></i> Twitter</a>
                        <a href="https://www.linkedin.com/in/prashant-anand2oo3"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                        <a href="https://github.com/PrashantAnand03"><i class="fa-brands fa-github"></i> Github</a>
                    </div>
                </div>
                <p>Copywright &#169; JARVIS 404.Made with <i class="fa-solid fa-heart"></i> by Team JARVIS 404</p>
            </div>
        </footer>
    );
}

export default Footer;