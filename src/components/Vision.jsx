// VisionMission.js
import React from 'react';
// import VisionMissionImage from '../assets/vision_mission.jpg';

const VisionImage = 'https://picsum.photos/id/1010/800/600';

const VisionMission = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mr-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision and Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We aspire to create a future where innovation and sustainability intersect, making a positive impact on our community and the world.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to:
          </p>
          <ul className="list-disc text-gray-700 pl-8">
            <li>Foster a culture of creativity and collaboration.</li>
            <li>Deliver products and services that exceed customer expectations.</li>
            <li>Embrace environmental responsibility and sustainable practices.</li>
            <li>Empower our employees to reach their full potential.</li>
            <li>Contribute to the well-being of our local and global communities.</li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={VisionImage}
          alt="Vision and Mission"
          className="rounded-lg object-cover w-full h-64"
        />
      </div>
    </div>
  );
};

export default VisionMission;
