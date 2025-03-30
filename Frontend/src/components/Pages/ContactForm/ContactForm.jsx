import React from "react";
import Button from "../../Layouts/Button/Button";
import Header from "../../Layouts/Header";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import Footer from "../../Layouts/Footer";

// Import images
import contactBg from "/src/assets/image/contact.jpg";
import newsletterBg from "/src/assets/image/b14.png";



const ContactForm = () => {
  // Array of pepale images for dynamic rendering

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
  Whether you have questions, feedback, or need assistance, our team is here to help. Please reach out to us using the contact information below or fill out the form. </p>
</section>

        {/* <section id="contact-details" className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
  {/* Contact Details Section */}
  {/* <div className="details w-full md:w-[40%] m-4 md:m-10">
    <span className="text-sm">GET IN TOUCH</span>
    <h2 className="text-2xl md:text-3xl py-3 md:py-5">
      Visit one of our agency locations or contact us today
    </h2>
    <h3 className="text-lg md:text-xl pb-3 md:pb-4">Head office</h3>
    <ul>
      <li className="flex py-2">
        <i className="ri-map-2-line text-lg pr-3 md:pr-5"></i>
        <p className="text-sm md:text-base">
          93-A DDA Janta Flat Rampura New Delhi India
        </p>
      </li>
      <li className="flex py-2">
        <i className="ri-mail-line text-lg pr-3 md:pr-5"></i>
        <p className="text-sm md:text-base">Info@qurible.com</p>
      </li>
      <li className="flex py-2">
        <i className="ri-phone-fill text-lg pr-3 md:pr-5"></i>
        <p className="text-sm md:text-base">+91 9953755248</p>
      </li>
      <li className="flex py-2">
        <i className="ri-time-line text-lg pr-3 md:pr-5"></i>
        <p className="text-sm md:text-base">
          Monday to Saturday : 9:00 AM to 16:00 PM
        </p>
      </li>
    </ul>
  </div> */}

  {/* Map Section */}
  {/* <div className="map w-full md:w-3/5 h-64 md:h-96 mt-6 md:mt-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6245167473076!2d77.14267917544562!3d28.73076537961316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0156757edbf1%3A0xb19ee2afdd82f722!2sGuru%20nanak%20dev%20Institute%20of%20technology!5e0!3m2!1sen!2sin!4v1722368726267!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div> 
</section> */}

        <section
  id="form-details"
  className="flex flex-col md:flex-row justify-between m-4 md:m-8 p-4 md:p-8 border border-gray-400"
>
  {/* Form Section */}
  <form className="w-full md:w-2/3 flex flex-col mb-8 md:mb-0 md:mr-8">
    <span className="text-sm">LEAVE A MESSAGE</span>
    <h2 className="text-2xl md:text-3xl py-3 md:py-5">We love to hear from you</h2>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
    />
    <input
      type="text"
      placeholder="E-mail"
      className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
    />
    <input
      type="text"
      placeholder="Subject"
      className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
    />
    <textarea
      placeholder="Comment"
      className="w-full p-2 md:p-3 mb-3 md:mb-5 border border-gray-300 rounded"
      rows="6"
    ></textarea>
    <button className="bg-teal-600 text-white p-2 md:p-3 rounded hover:bg-teal-700 transition-colors">
      Submit
    </button>
  </form>

  {/* People Section */}
  <div className="w-full md:w-1/3">
  {[
    { name: "Jayant Pandey", phone: "+91 9953755248", email: "Contact@qurible.com" },
    // { name: "Ashish Spehia", phone: "+91 7009380316", email: "Contact@qurible.com" },
    // { name: "Saurabh Sahu", phone: "+91 9899164990", email: "Contact@qurible.com" },
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

        <section
  id="newsletter"
  className="flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center px-4 py-8 md:py-0 md:h-64 m-auto bg-[#2ba343] bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${newsletterBg})`, backgroundPosition: 'center' }}
>
  <div className="w-full md:w-2/5 px-4 text-center">
    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
      Sign Up for Newsletters
    </h4>
    <p className="text-base md:text-lg font-semibold text-[#f0f0f0]">
      Get E-mail updates about our latest Updates and {' '}
      <span className="text-[#ffbd27]">special offers</span>
    </p>
  </div>

  <div className="w-full md:w-2/5 px-4">
    <div className="flex flex-col md:flex-row gap-2 max-w-xl md:max-w-none mx-auto">
      <input
        type="text"
        placeholder="Your email address"
        className="h-12 px-4 text-base md:text-lg border border-transparent bg-amber-50 rounded-md md:rounded-l-md md:rounded-r-none outline-none flex-1"
      />
      <button className="bg-[#088178] text-white h-12 px-4 text-base md:text-lg rounded-md md:rounded-r-md md:rounded-l-none hover:bg-[#076a63] transition-colors">
        Sign Up
      </button>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
