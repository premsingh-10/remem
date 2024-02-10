// import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg'

import ContactForm from './Enquires';

const Navbar = () => {



  return (
    <>
      <div className="landing-page">
        <header>
          <div className="container">
            <div className='logo-con'>
              <img src={Logo} className='logo-img' alt="" />
              {/* <a href="#" className="logo"><b>Remedy <span className='sub-logo'>Enterprises</span></b></a> */}
            </div>
            
            <ul className="links">
              <li><Link to ="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* <li>Work</li> */}
              <li ><Link to="/contactus">Contact Us</Link></li>
            </ul>
            
          </div>
        </header>
        </div>

        

    </>
  )
}

export default Navbar