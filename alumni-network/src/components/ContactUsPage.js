// ContactUsPage.js

import React, { useState } from 'react';
import './css/Contactus.css';
import Footer from '../components/Footer';
import { IoLogoClosedCaptioning } from "react-icons/io";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    graduationYear: '',
    major: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending an email or saving feedback
    // Simulate form submission success
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    
    <div className="contactus">  
      <div className='d-flex container kava'>
        <div className='col-lg-6 col-sm-12 image-sec'>

          <IoLogoClosedCaptioning />Hello
        </div>
        <div className='col-lg-6 col-sm-12 form-sec' >

          <form action="process_form.php" method="post" className='form'>
            <h1 >Contact Us </h1>
            <input type="text" id="name" name="name" required placeholder='Name'/>

            
            <input type="email" id="email" name="email" required placeholder='Email' />

           
            <input type="number" id="subject" name="subject" required placeholder='Phone Number'  />

            
            <textarea id="message" name="message" rows="4" required placeholder='Type here'/>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>


    </div>
  
  );
};

export default ContactUsPage;
