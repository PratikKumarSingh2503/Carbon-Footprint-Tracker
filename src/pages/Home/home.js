import React from 'react';
import './home.css'
// import Topbar from '../../components/Topbar/topbar'
// import Contact from '../../components/Contact/contact'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import About from '../../components/About/about';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <Header />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default Home;