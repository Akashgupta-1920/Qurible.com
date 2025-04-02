import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';
import {
  FiSearch,
  FiShield,
  FiMessageCircle,
  FiClock,
  FiUser,
  FiLock,
  FiShoppingCart,
  FiBarChart,
} from 'react-icons/fi';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import AboutUS from '/src/assets/image/AboutUs.png';
import healthImg from '/src/assets/image/health2.jpeg';
import featureVideo from '/src/assets/featuerce/2.mp4';
import newsletterBg from '/src/assets/image/b14.png';

const AboutSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');
  const { register, handleSubmit, reset } = useForm();
  
  // Updated environment variable access for Vite
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '97da74fc-4f3b-4150-8380-be16abe30145';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Qurible Health',
      subject: 'New Newsletter Subscription'
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div>
      <Header />
 
      <section
        id="shop-header"
        className="contact-header flex items-center justify-center flex-col bg-cover bg-no-repeat bg-center object-cover mt-[5rem] md:mt-24 py-8 px-4 sm:px-10 gap-3 md:gap-4 min-h-[200px] sm:min-h[30vh] md:min-h-[50vh] bg-[rgb(162,223,162)]"
        style={{ backgroundImage: `url(${AboutUS})`, transform: 'scaleX(1)', maxWidth: '100%' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black text-center font-bold">
          ABOUT US
        </h2>
        <p className="text-black text-base sm:text-lg md:text-xl text-center max-w-2xl">
          We prioritize transparency, speed, affordability, and accessibility to redefine the way users interact with healthcare services.
        </p>
      </section>

      <section id="about-head" className="flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-12 gap-6 md:gap-8">
        <img 
          src={healthImg} 
          alt="About Us" 
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" 
        />
        <div className="md:pl-10 space-y-4 lg:space-y-6">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
            Who We Are?
          </h2>
          <h1 className='text-xl font-semibold mb-1'>Overview :</h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            We are a "SaaS" based digital healthcare platform powered by an innovative AI & Blockchain methodology designed to personalize healthcare services to meet individual needs. We empower users to easily access and find the best healthcare services available in the market
          </p>
          <p>This solution-centric approach empowers users to navigate healthcare with ease and trust, making quality care accessible for everyone</p>
          <abbr className="text-sm md:text-base italic text-gray-600 block">
            <h1 className='text-xl font-semibold mb-1'> Vision</h1>
            "To become a user-centric superApp of health that simplifies healthcare access, making quality care affordable, convenient and personalised for everyone."
          </abbr>
          <h1 className='text-xl font-semibold mb-1'>Mission</h1>
          (To deliver "Right Healthcare Services At the Right Time and At the Right Cost)
          "To deliver personalized healthcare solutions by leveraging technology that meet the unique needs of each individual, ensuring timely and cost-effective access to the right care."
        </div>
      </section>

      <section id="about-app" className="text-center p-5 md:p-8 lg:p-10 md:min-h-[50vh]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Download Our{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700 transition-colors">
            App
          </a>
        </h1>
        <div className="video w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mt-4 md:mt-8 mx-auto">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl"
            controls
          >
            <source src={featureVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Teasure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                <FiSearch size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Search and Selection</h3>
              <p className="text-gray-600 text-sm">
                Choose among the best healthcare services available
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-purple-50 p-3 rounded-full w-fit mb-4">
                <FiShield size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Personalised Care</h3>
              <p className="text-gray-600 text-sm">
                Interact with the most relevant healthcare services for you
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-50 p-3 rounded-full w-fit mb-4">
                <FiMessageCircle size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">One-on-One Care</h3>
              <p className="text-gray-600 text-sm">
                Get personal attention for your health needs
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-amber-50 p-3 rounded-full w-fit mb-4">
                <FiClock size={24} className="text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Order Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track the live status on your orders
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <FiUser size={24} className="text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Health Accounts</h3>
              <p className="text-gray-600 text-sm">
                Take care of your family members as well by creating their separate health accounts
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <FiLock size={24} className="text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Health Locker</h3>
              <p className="text-gray-600 text-sm">
                Keep all your health data in one protected place
              </p>
            </div>

            {/* Feature 7 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <FiShoppingCart size={24} className="text-yellow-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Seamless Checkout</h3>
              <p className="text-gray-600 text-sm">
                Experience the minimum clicks to place your order
              </p>
            </div>

            {/* Feature 8 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="bg-amber-50 p-3 rounded-full w-fit mb-4">
                <FiBarChart size={24} className="text-indigo-800" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Monitor & Earn Through Your Health Data
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with your smart watches and earn rewards at each milestone
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="newsletter"
        className="flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center px-4 py-8 md:py-0 md:h-64 m-auto bg-[#2ba351] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${newsletterBg})`, backgroundPosition: 'center' }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full md:w-2/5 px-4 text-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
              Sign Up for Newsletters
            </h4>
            <p className="text-base md:text-lg font-semibold text-[#ffffff]">
              Get E-mail updates about our latest Updates and {' '}
              <span className="text-[#ffbd27]">special offers</span>
            </p>
          </div>
          <div className="w-full md:w-2/5 px-4">
            <div className="flex flex-col md:flex-row gap-2 max-w-xl md:max-w-none mx-auto">
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Your email address"
                className="h-12 px-4 text-base md:text-lg border border-transparent bg-amber-50 rounded-md md:rounded-l-md md:rounded-r-none outline-none flex-1"
              />
              <button 
                type="submit"
                className="bg-[#088138] text-white h-12 px-4 text-base md:text-lg rounded-md md:rounded-r-md md:rounded-l-none hover:bg-[#076a63] transition-colors"
              >
                Sign Up
              </button>
            </div>
            {result && (
              <div className={`mt-2 p-2 rounded text-center ${
                isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {result}
              </div>
            )}
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default AboutSection;