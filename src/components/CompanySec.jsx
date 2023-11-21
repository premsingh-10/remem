
import Company from './logistic.webp';
// function LogisticsSection() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto text-center">
//         <div className="md:flex md:items-center md:justify-between">
//           <div className="md:w-1/2 md:order-2 mb-6 md:mb-0 m-4">
//             <img
//               src={Company}
//               alt="Company Warehouse"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="md:w-1/2 md:order-1">
//             <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
//             <p className="text-gray-600 mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p className="text-gray-600 mb-4">
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LogisticsSection;

function HeroSection() {
    const backgroundImageStyle = {
      backgroundImage: `url(${Company})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
    };
  
    const textOverlayStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color
    };
  
    return (
      <section className="relative text-white">
        <div style={backgroundImageStyle} className="relative flex items-center justify-center">
          <div style={textOverlayStyle} className="absolute inset-0"></div>
          <div className="container mx-auto text-center relative z-10 p-8">
            <h3 className="text-2xl md:text-6xl font-bold text-black-500 mb-4">Optimizing Supply Chain with Maximum Service And Customer Satisfaction</h3>
            <p className="text-lg md:text-xl text-blue-200 mb-8">The overarching goal is to create supply chains that are not only faster and more efficient but also environmentally responsible, equitable, and robust. This involves a commitment to constructing improved supply chains that not only meet the needs of today but are adaptable for the future. In doing so, we aim to foster greater connectivity in the global economy.</p>
            <a
              href="#read-more"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-full inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;