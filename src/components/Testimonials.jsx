// Testimonials.js
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialData = [
  {
    id: 1,
    name: 'Pradip Dasharath Nate',
    designation : 'Senior AGM - Sales APAR Industries',
    text: 'Since the beginning, your service has been excellent. You have always been flexible to meet our business needs, and you consistently know how to complete tasks effectively.',
    image: 'https://placekitten.com/300/200', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Nilesh Nikose',
    designation : 'Zonal Sales Head - Spare Parts and Oil Sonalika Tractors Limited',
    text: 'You are excelling in our implementation process. We haven not experienced this level of attention to detail or involvement before.',
    image: 'https://placekitten.com/300/200', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Shrikant Madhekar',
    designation : 'Senior Sales Manager KSB Limited',
    text: 'Remedy Enterprises offers excellent customer service. They strive to resolve any issue efficiently, no matter the challenge.',
    image: 'https://placekitten.com/300/200', // Replace with actual image path
  },
  {
    id: 4,
    name: 'Santosh Salunke',
    designation : 'State Head - Sales ENI Lubricants',
    text: 'The team collaborates with and backs the changes in our business. As our business expands, Remedy Enterprises has evolved alongside us, playing a vital role in our success.',
    image: 'https://placekitten.com/300/200', // Replace with actual image path
  }
  
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
            <p className="font-bold ">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
