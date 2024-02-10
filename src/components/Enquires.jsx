import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobileno,setMobileno] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name,email,mobileno,subject,message)
    const data ={
      name : name,
      email : email,
      mobileno : mobileno,
      subject : subject,
      message : message
    }
    axios.post('https://sheetdb.io/api/v1/tc2x6g3ta6w3c',data).then((responce) =>{
      // console.log(responce)
      setName('')
      setEmail('')
      setMobileno('')
      setSubject('')
      setMessage('')
    })
    alert(`Form Has been updated successfully`);
  }
  

  return (
    <div className="flex items-center justify-center mb-5">
      <form className="bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/4" onSubmit={handleSubmit} >
        <h1 className="text-2xl font-bold text-center mb-8">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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