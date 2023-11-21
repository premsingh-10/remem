// // import React from 'react'
// import './WorkingSpace.css'

// const WorkingSpace = () => {
//   return (
//     <>
//        <section className="image-section">
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+1" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+1" alt="Image 1"/>
//             </a>
//         </div>
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+2" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+2" alt="Image 2"/>
//             </a>
//         </div>
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+3" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+3" alt="Image 3"/>
//             </a>
//         </div>
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+4" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+4" alt="Image 4"/>
//             </a>
//         </div>
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+5" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+5" alt="Image 5"/>
//             </a>
//         </div>
//         <div className="image-wrapper">
//             <a href="https://via.placeholder.com/400x200?text=Image+6" target="#">
//                 <img src="https://via.placeholder.com/400x200?text=Image+6" alt="Image 6"/>
//             </a>
//         </div>
//     </section>
//     </>
//   )
// }

// export default WorkingSpace


// import React from 'react';

function ImageSection() {
  const images = [
    'https://via.placeholder.com/400x300?text=Warehouse+1',
    'https://via.placeholder.com/400x300?text=Warehouse+2',
    'https://via.placeholder.com/400x300?text=Warehouse+3',
    'https://via.placeholder.com/400x300?text=Warehouse+4',
    'https://via.placeholder.com/400x300?text=Warehouse+5',
    'https://via.placeholder.com/400x300?text=Warehouse+6',
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Warehouses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img src={image} alt={`Warehouse ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
