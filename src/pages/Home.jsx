// import React from 'react';
import AboutSection from '../components/AboutSection'
import CompanySec from '../components/CompanySec'
import Enquires from '../components/Enquires'
// import Facilities from './components/Facilities'
import Testimonials from '../components/Testimonials'
import Machine from '../components/Machine'

const Home = () => {
  return <div>

        <CompanySec />
        <AboutSection />
        <Machine />
        <div className='m-5'>
        <Testimonials />
        </div>
        <Enquires />
    </div>;
};

export default Home;