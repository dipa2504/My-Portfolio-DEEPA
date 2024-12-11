import React, { useState } from 'react'
import './Contact.css'
import { CONTACT, url } from '../../assets/assets'
import { FaEnvelope, FaLinkedin } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import axios from 'axios'

const Contact = () => {

  const [result, setResult] = useState("")

  const [user, setUser] = useState({
    email: '',
    mobile: '',
    name: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    try {
      // const response = await axios.post("http://localhost:1000/api/contact", user)
      const response = await axios.post(`${url}/api/contact`, user)
      const data = response.data;

      if (data.success) {
        setResult("Form Submitted Successfully");
        setUser({ name: '', email: '', mobile: '', message: '' })
      } else {
        setResult(data.message)
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.")
    }
    console.log("Form Sumbitted", user);

  };

  const ValueHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };



  return (
    <div className='contact' id='contact'>
      <div className="contact-details">
        <h1>Get in Touch</h1>

        <div className="contact-item">
          <h3>{CONTACT.name}</h3>
        </div>

        <div className="contact-icons">
          <a href={`tel:${CONTACT.phoneNo}`} className="contact-link"><IoCall /></a>


          <a href={`mailto:${CONTACT.email}`} className="contact-link"><FaEnvelope /></a>


          <a href={CONTACT.linkedin} className="contact-link"><FaLinkedin /></a>

        </div>

      </div>

      <div className="form" onSubmit={onSubmit}>
        <form action="">
          <h1>Contact Me</h1>

          <div className="input-group">
            <input type="text" name="name" className="input" value={user.name} onChange={ValueHandler} required autoComplete='off' />
            <label htmlFor="full-name" className="user-label">Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" className="input" value={user.email} onChange={ValueHandler} required autoComplete='off' />
            <label htmlFor="email" className="user-label">Email</label>
          </div>

          <div className="input-group">
            <input type="tel" name="mobile" className="input" value={user.mobile} onChange={ValueHandler} required autoComplete='off' />
            <label htmlFor="number" className="user-label">Number</label>
          </div>

          <div className="input-group">
            <textarea name="message" className="input" value={user.message} onChange={ValueHandler} required autoComplete='off'></textarea>
            <label htmlFor="message" className="user-label">Message</label>
          </div>

          <button type="submit">Submit</button>
          <span>{result}</span>

        </form>
      </div>
    </div>
  );
}

export default Contact;
