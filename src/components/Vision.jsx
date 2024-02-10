// EnterpriseVision.js
import React from 'react';
import Vision from '../assets/Vision-compass.jpg'

const VisionMission = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center m-3">
      <div className="max-w-4xl p-4 bg-white rounded-lg shadow-md">
      <div className="mb-6">
          <img src={Vision}
           alt="Enterprise Vision" className="w-13 h-13 rounded-md" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Our Enterprise Vision</h1>
        <p className="text-gray-700 mb-6">
          At Remedy Enterprises, our vision is to empower businesses with cutting-edge technologies and innovative solutions.
          We strive to create a future where enterprises seamlessly integrate digital transformation to enhance efficiency,
          drive growth, and stay ahead in a rapidly evolving market.
        </p>
        <div className="flex space-x-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Core Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Innovation and Creativity</li>
              <li>Customer-Centric Approach</li>
              <li>Continuous Learning</li>
              <li>Integrity and Transparency</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Goals</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Develop Industry-Leading Solutions</li>
              <li>Build Strong Client Relationships</li>
              <li>Invest in Employee Growth</li>
              <li>Contribute to Community Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
