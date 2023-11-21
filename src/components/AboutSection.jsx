// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTruck, faPlane } from '@fortawesome/free-solid-svg-icons';

function AboutSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Logistics Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Facility 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faWarehouse} className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Warehouses</h3>
            <p className="text-gray-600">Our modern warehouses are equipped with the latest technology to ensure the safety and security of your goods.</p>
          </div>

          {/* Facility 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faTruck} className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Trucking</h3>
            <p className="text-gray-600">Our reliable trucking services deliver your products on time, every time, with a focus on efficiency and safety.</p>
          </div>

          {/* Facility 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faPlane} className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Air Cargo</h3>
            <p className="text-gray-600">Our air cargo solutions provide fast and secure transportation for your time-sensitive shipments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
