
// import './App.css'
import AboutSection from './components/AboutSection'
import CompanySec from './components/CompanySec'
import Enquires from './components/Enquires'
// import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Machine from './components/Machine'
import Home from './pages/Home';
import About from './pages/About'
import {Route, Routes} from 'react-router-dom' ;




function App() {

  


  return (
    <>
       <Navbar/>
       {/* <Component /> */}
      
        {/* <CompanySec />
        <AboutSection />
        <Machine />
        <div className='m-5'>
        <Testimonials />
        </div>
        <Enquires /> */}
        <div className="contianer">
          <Routes>
            <Route path ="/" element = {<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Testimonials />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
