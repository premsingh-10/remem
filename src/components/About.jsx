// AboutUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLightbulb, faTrophy } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Enterprise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: faUsers,
            title: 'Collaborative Teamwork',
            description: 'We believe in the power of collaboration. Our diverse and skilled team works together to achieve common goals.',
          },
          {
            icon: faLightbulb,
            title: 'Innovation Driven',
            description: 'Innovation is at the heart of our enterprise. We leverage the latest technologies to deliver cutting-edge solutions.',
          },
          {
            icon: faTrophy,
            title: 'Commitment to Excellence',
            description: 'We are committed to delivering excellence in everything we do. Our focus is on exceeding expectations and setting industry standards.',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <FontAwesomeIcon icon={item.icon} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
