// import React from 'react'
import './style.css'
// import logistics from './Logistics.jpg';
// import Company from './Company.webp';

const Navbar = () => {
  return (
    <>
        {/* <!-- Start Landing Page --> */}
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">Remedy <b>Enterprises</b></a>
            <ul className="links">
              <li>Home</li>
              <li>About</li>
              <li>Work</li>
              <li>Get Started</li>
            </ul>
          </div>
        </header>




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
      </div>
      {/* <!-- End Landing Page --> */}

    </>
  )
}

export default Navbar