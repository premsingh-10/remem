
// import './App.css'
import AboutSection from './components/AboutSection'
import CompanySec from './components/CompanySec'
import Enquires from './components/Enquires'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Machine from './components/Machine'
import WorkingSpace from './components/WorkingSpace'
// import Page from './components/Page'

function App() {


  return (
    <>
      <Navbar />
        {/* <Page /> */}
        <CompanySec />
        <AboutSection />
        {/* <WorkingSpace /> */}
        <Facilities />
        <Machine />
        <div className='m-5'>
        <Testimonials />
        </div>
        <Enquires />
      <Footer />
    </>
  )
}

export default App
