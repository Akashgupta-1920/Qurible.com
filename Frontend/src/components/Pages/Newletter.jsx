import React, { useState } from "react";
import newsletterBg from "/src/assets/image/b14.png";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if email is already registered
  const isEmailRegistered = (email) => {
    const registeredEmails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
    return registeredEmails.includes(email.toLowerCase());
  };

  // Add email to registered list
  const addEmailToRegistered = (email) => {
    const registeredEmails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
    registeredEmails.push(email.toLowerCase());
    localStorage.setItem('newsletterEmails', JSON.stringify(registeredEmails));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!email) {
      setIsSuccess(false);
      setResult('Please enter your email address');
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setIsSuccess(false);
      setResult('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Check for duplicate registration
    if (isEmailRegistered(email)) {
      setIsSuccess(false);
      setResult('This email is already registered for our newsletter');
      setIsLoading(false);
      return;
    }

    try {
      // Google Form submission URL
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf9xdha0Ubl4RSaXIY85ezBNHZCn6GLeakiYswHv_rgyj_B6A/formResponse';
      
      // Create form data for Google Forms
      const googleFormData = new FormData();
      googleFormData.append('entry.948334724', email);

      // Submit to Google Form
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });

      // Add email to registered list
      addEmailToRegistered(email);
      
      // Since Google Forms returns opaque response in no-cors mode, we assume success
      setIsSuccess(true);
      setResult('Thank you for subscribing to our newsletter!');
      setEmail('');
      
    } catch (error) {
      setIsSuccess(false);
      setResult('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center px-4 py-8 md:py-0 md:h-64 m-auto bg-[#2ba351] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${newsletterBg})`, backgroundPosition: 'center' }}
    >
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center gap-4 md:flex-row md:flex-wrap items-center">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 px-4 text-base md:text-lg border border-transparent bg-amber-50 rounded-md md:rounded-l-md md:rounded-r-none outline-none flex-1"
              required
            />
            <button 
              type="submit"
              className="bg-[#088138] text-white h-12 px-4 text-base md:text-lg rounded-md md:rounded-r-md md:rounded-l-none hover:bg-[#076a63] transition-colors flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Up...
                </>
              ) : (
                'Sign Up'
              )}
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