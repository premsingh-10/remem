// import React from 'react';
import AboutSection from '../components/AboutSection'
import CompanySec from '../components/CompanySec'
import Enquires from '../components/Enquires'
// import Facilities from './components/Facilities'
import FactoryGallery from '../components/Factory'
import Testimonials from '../components/Testimonials'
// import Machine from '../components/Machine'
import Factory1 from '../assets/IMG_5688.jpg'

const Home = () => {

  const factoryImages = [
    {Factory1},
    { url: 'https://picsum.photos/id/1020/400/300' },
    { url: 'https://picsum.photos/id/1020/400/300' },
    // Add more images as needed
  ];

  return <div>

        <CompanySec />
        <AboutSection />
        {/* <Machine /> */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Factory Image Gallery</h1>
          <FactoryGallery images={factoryImages} />
        </div>
        <div className='m-5'>
        <Testimonials />
        </div>
        <Enquires />
    </div>;
};

export default Home;