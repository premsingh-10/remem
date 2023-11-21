// // import React from 'react'
// import './Facilities.css'

// const Facilities = () => {
//   return (
//     <div>
//        <div className="contain">
//         <div className="sec">
//             <h2 className='facheading'>FACILITIES</h2>
//             <ul>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 {/* <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li> */}
//             </ul>
//         </div>
//         <div className="sec">
//             <h2 className='facheading'>STANDARD FORMS</h2>
//             <ul>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 {/* <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li>
//                 <li className='listing'><i className="fa-solid fa-check fa-sm m-2"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, recusandae.</li> */}
//             </ul>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Facilities


// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faPlane, faTools, faGlobe, faUserShield, faLock } from '@fortawesome/free-solid-svg-icons';

function LogisticsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faShip} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Maritime Services</h3>
            <p className="text-gray-600 mb-4">
              Our maritime services ensure efficient cargo transport via sea routes, providing cost-effective and reliable shipping solutions for your goods.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faPlane} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Air Cargo</h3>
            <p className="text-gray-600 mb-4">
              Our air cargo services are designed for time-sensitive shipments. We ensure swift and secure delivery to meet your business's urgent demands.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faTools} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Maintenance Support</h3>
            <p className="text-gray-600 mb-4">
              We offer maintenance support to keep your cargo, vehicles, and equipment in top condition, ensuring reliability and safety.
            </p>
          </div>
          {/* <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faGlobe} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-600 mb-4">
              With a worldwide network, we provide global reach and connectivity for your logistics needs, ensuring seamless operations across borders.
            </p>
          </div> */}
        </div>

        <h2 className="text-4xl font-bold text-center mb-8">Standard Norms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faUserShield} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Customer Privacy</h3>
            <p className="text-gray-600 mb-4">
              We prioritize customer privacy and data protection, ensuring that your information is safeguarded with the highest standards.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faLock} className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Data Security</h3>
            <p className="text-gray-600 mb-4">
              We employ state-of-the-art data security measures to protect your sensitive information, reducing the risk of data breaches and cyber threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogisticsSection;
