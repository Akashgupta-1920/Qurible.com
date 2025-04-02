import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import newsletterBg from "/src/assets/image/b14.png";

const Newsletter = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');
  const { register, handleSubmit, reset } = useForm();
  
  // Directly include your Web3Forms access key here
  const accessKey = '97da74fc-4f3b-4150-8380-be16abe30145'; // Replace with your actual key

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Qurible Health',
      subject: 'New Newsletter Subscription'
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg || 'Thank you for subscribing!');
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg || 'Failed to subscribe. Please try again.');
    },
  });

  return (
    <section
      id="newsletter"
      className="flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center px-4 py-8 md:py-0 md:h-64 m-auto bg-[#2ba351] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${newsletterBg})`, backgroundPosition: 'center' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center">
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
  );
};

export default Newsletter;