// Testimonials.js
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://placekitten.com/300/200', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem magnam eos atque consectetur, enim praesentium reprehenderit iusto dolor error voluptas earum! Error maiores et, doloribus vitae soluta tempora quibusdam!',
    image: 'jane-smith.jpg', // Replace with actual image path
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Client Testimonials</h2>
      <Slider {...sliderSettings} className="text-center">
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg">{testimonial.text}</p>
            <p className="font-bold mt-4">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
