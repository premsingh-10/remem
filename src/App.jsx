
// import './App.css'
// import AboutSection from './components/AboutSection'
// import CompanySec from './components/CompanySec'
// import Enquires from './components/Enquires'
// import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Testimonials from './components/Testimonials'
// import Machine from './components/Machine'
import Home from './pages/Home';
import About from './pages/About'




function App() {

  let Component 
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      // eslint-disable-next-line no-unused-vars
      Component = About
  }


  return (
    <>
       <Navbar/>
       <Component />
      
        {/* <CompanySec />
        <AboutSection />
        <Machine />
        <div className='m-5'>
        <Testimonials />
        </div>
        <Enquires /> */}
      <Footer />
    </>
  )
}

export default App
