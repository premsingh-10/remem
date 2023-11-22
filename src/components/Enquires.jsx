import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center mb-5">
      <form className="bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center mb-8">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your email address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-600 text-sm font-semibold">Mobile No</label>
          <input
            type="number"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your mobile number"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 text-sm font-semibold">Subject</label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Your subject"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 text-sm font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Your message"
            required
          />
        </div>

        {/* 
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Submit</button> */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded">Submit</button>

      </form>
    </div>
  );
}

export default ContactForm;