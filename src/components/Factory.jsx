// FactoryGallery.js
import React from 'react';
import Factory1 from '../assets/IMG_5688.jpg';
import Factory2 from '../assets/IMG_5695.jpg';
import Factory3 from '../assets/IMG_5699.jpg';
import Factory4 from '../assets/IMG_5706.jpg';

const factories = [
  { id: 1, image: Factory1, name: 'Factory 1' },
  { id: 2, image: Factory2, name: 'Factory 2' },
  { id: 3, image: Factory3, name: 'Factory 3' },
  { id: 4, image: Factory4, name: 'Factory 4' },
];

const FactoryGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {factories.map((factory) => (
        <div key={factory.id} className="relative group overflow-hidden">
          <img
            src={factory.image}
            className="w-full h-48 object-cover transition-transform transform scale-100 group-hover:scale-110"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex h-full items-center justify-center">
              <p className="text-white text-lg font-semibold">{factory.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactoryGallery;
