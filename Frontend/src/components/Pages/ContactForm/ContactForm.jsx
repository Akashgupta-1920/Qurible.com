import React, { useState } from "react";
import Button from "../../Layouts/Button/Button";
import Header from "../../Layouts/Header";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import Footer from "../../Layouts/Footer";

// Import images
import contactBg from "/src/assets/image/contact.jpg";
import newsletterBg from "/src/assets/image/b14.png";
import Newletter from "../Newletter";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill in all required fields' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://qurible-com-1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Error submitting form' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error: ' + error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div>
        <section
          id="shop-header"
          className="contact-header flex items-center justify-center flex-col bg-cover bg-center object-cover mt-[4.5rem] md:mt-16 py-8 px-4 sm:px-8 gap-3 md:gap-4 min-h-[40vh] md:min-h-[50vh]"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black text-center">
            # CONTACT US
          </h2>
          <p className="text-black text-base sm:text-lg md:text-xl text-center max-w-3xl">
            Whether you have questions, feedback, or need assistance, our team is here to help. 
            Please reach out to us using the contact information below or fill out the form.
          </p>
        </section>

        <section
          id="form-details"
          className="flex flex-col md:flex-row justify-between m-4 md:m-8 p-4 md:p-8 border border-gray-400"
        >
          {/* Form Section */}
          <form 
            className="w-full md:w-2/3 flex flex-col mb-8 md:mb-0 md:mr-8"
            onSubmit={handleSubmit}
          >
            <span className="text-sm">LEAVE A MESSAGE</span>
            <h2 className="text-2xl md:text-3xl py-3 md:py-5">We love to hear from you</h2>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
              value={formData.subject}
              onChange={handleChange}
            />
            
            <textarea
              name="message"
              placeholder="Comment"
              className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <button 
              type="submit"
              className="bg-teal-600 text-white p-2 md:p-3 rounded hover:bg-teal-700 transition-colors flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>

          {/* People Section */}
          <div className="w-full md:w-1/3">
            {[
              { name: "", phone: "", email: "Contact@qurible.com" },
            ].map((person, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-6 mb-4 md:mb-6 border border-gray-300 rounded"
              >
                <p className="text-sm text-center md:text-left">
                  <span className="block text-base md:text-lg font-semibold">
                    {person.name}
                  </span>
                  <br />
                  Phone: {person.phone}
                  <br />
                  E-mail: {person.email}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Newletter/>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;