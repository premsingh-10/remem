// import React from 'react'
import './style.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logistics from './Logistics.jpg';
// import Company from './Company.webp'


const Navbar = () => {
  return (
    <>
        {/* <!-- Start Landing Page --> */}
       
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">Remedy <b>Enterprises</b></a>
            <ul className="links">
              <li><a href ="/">Home</a></li>
              <li><a href="/about">About</a></li>
              {/* <li>Work</li> */}
              <li>contact Us</li>
            </ul>
          </div>
        </header>
        </div>

        



        {/* <div className="content">
          <div className="container">
            <div className="info">
              <h1>Looking For Inspiration</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              <button>Button name</button>
            </div>
            <div className="image">
              <img className="logois" src={logistics}/>
            </div>
          </div>
        </div> */}
      
      {/* <!-- End Landing Page --> */}

    </>
  )
}

export default Navbar