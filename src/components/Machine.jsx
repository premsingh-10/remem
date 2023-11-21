import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const images = [
  'https://placekitten.com/300/200',
  'https://placekitten.com/301/200',
  'https://placekitten.com/302/200',
  // Add more image URLs as needed
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Image Slider</h1>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={goToPrev}
        >
          Previous
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="mx-auto rounded-lg w-60vw" // Set image width to 60% of the viewport width
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={goToNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
