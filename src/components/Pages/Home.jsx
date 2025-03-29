import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiClock,
  FiShield,
  FiHeart,
  FiArrowRight,
  FiStar,
  FiDownload,
  FiMessageCircle,
  FiUser,
  FiLock,
  FiShoppingCart,
  FiBarChart,
  FiDollarSign,
} from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";

import { Link } from "react-router-dom";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Signup from "./Signup";
import DigitalHealthChallenges from "../Layouts/Problem";
import mainBackground from "/src/assets/image/main.png"; // Adjust the path
import FeatureSection from "../Layouts/FeatureSection";


const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample list of medicines for suggestions
  const medicineList = [
    "Aspirin",
    "Ibuprofen",
    "Paracetamol",
    "Amoxicillin",
    "Vitamin C",
    "Vitamin D",
    "Metformin",
    "Lisinopril",
    "Simvastatin",
    "Omeprazole",
  ];



  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filteredSuggestions = medicineList.filter((medicine) =>
        medicine.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  // Function to handle scroll animations
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate-fade-in");
        element.classList.remove("opacity-0");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <Header />
      <div className="mt-35 bg-white">
        {/* Background Section */}
        <div className="absolute inset-0 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <div
        className="w-full bg-cover bg-no-repeat h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] bg-[rgb(162,223,162)] 
                   rounded-[0_0_40%_40%] 
                   md:rounded-[0_0_40%_40%] 
                   lg:rounded-[0_0_70%_70%]
                   bg-center 
                   sm:bg-[position:20%_50%]"
        style={{
          backgroundImage: `url(${mainBackground})`,
          transform: "scaleX(1)",
          maxWidth: "100%",
        }}
      ></div>
    </div>

        {/* Heading Section */}
        <div className="top relative px-4 sm:px-6 md:px-8 lg:px-0">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold mt-12 sm:mt-16 md:mt-20 lg:mt-22">
          "Revolutionising The Healthcare Experience" </h1>
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-semibold py-2 sm:py-3 mt-4 sm:mt-6 md:mt-5">
            with AI and Blockchain
          </h1>

          {/* Search Bar and Suggestions */}
          {/* <div className="relative w-full flex justify-center gap-5">
            <div className="absolute top-0 left-0 p-6 text-white w-full flex justify-center gap-4 flex-col sm:flex-row mt-12">
              <input
                type="text"
                placeholder="Enter a Challange"
                value={inputValue}
                onChange={handleInputChange}
                className="bg-white border border-gray-500 rounded-3xl box-border text-[#201f1b] h-14 block outline-none m-auto sm:m-0 w-[60vw] sm:w-[30vw] px-6 transition duration-250 appearance-none text-base font-normal leading-6 mb-0"
              />
              <button className="bg-[#0f56a6] py-4 px-7 border-white-[1px] rounded-3xl">
                Find the Best Solution
              </button>
            </div>
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded-lg mt-33 mr-60 w-[40vw] sm:w-[30vw] z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="cursor-pointer hover:bg-gray-200 p-2"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div> */}

        </div>
    
        {/* Featured Image Section */}
        <div className="relative max-w-6xl mx-auto px-4 mt-8 sm:mt-18 md:mt-15 lg:mt-18 xl:mt-20">
  <div 
    className="bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl mt-24"
    style={{
      backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/015/587/591/small_2x/doctor-s-desk-table-photo.jpg')",
      height: "380px" // Mobile first
    }}
  >
    <div className="bg-gradient-to-r from-black/40 md:from-black/30 to-transparent h-full p-4 sm:p-6 md:p-8 lg:p-12 flex items-center">
      <div className="max-w-full md:max-w-xl text-white px-2 sm:px-0">
        <h3 className="text-2xl sm:text-xl md:text-xl lg:text-4xl font-bold mb-2 sm:mb-3 italic ">
       <span className=" italic "> Right Healthcare Services</span> <br /> "At the Right Time " <br />"At the Right Cost"
        </h3>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
          Delivering personalized healthcare solutions using technology to meet individual needs, ensuring timely and cost-effective access to the right care.
        </h2>
        {/* <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          Get discounts on FDA-approved tirzepatide, semaglutide, and more.
        </p> */}
        <button className="text-xs sm:text-sm md:text-base bg-white text-gray-900 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <Link
              to="/contact"> Suggestions</Link>
        </button>
      </div>
    </div>
  </div>
</div>



        {/* Service Categories */}
        <section className="py-12">
  <div className="container mx-auto px-4 mt-15">
    <h1 className="text-5xl lg:text-4xl md:text-2xl sm:text-xl font-semibold text-center mb-8 text-gray-900">
      Why Choose Qurible?
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Save Money Card */}
      <div className="rounded-xl p-6 bg-yellow-100 animate-on-scroll opacity-0 hover:shadow-md transition-all">
        <div className="h-12 w-12 bg-yellow-200 rounded-lg flex items-center justify-center mb-4">
          <GiTakeMyMoney className="text-yellow-600" size={30} />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Save More, Money<br/>
          {/* <span className="text-yellow-600">Smart Cost Management</span> */}
        </h3>
        <p className="text-gray-700">
        Discover affordable healthcare options without comprising the quality services

        </p>
      </div>

      {/* Save Time Card */}
      <div className="rounded-xl p-6 bg-green-100 animate-on-scroll opacity-0 hover:shadow-md transition-all">
        <div className="h-10 w-10 bg-green-200 rounded-lg flex items-center justify-center mb-4">
          <FiClock className="text-green-600" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Save More,Time<br/>
          {/* <span className="text-green-600">Instant Service Matching</span> */}
        </h3>
        <p className="text-gray-700">
          Our AI-powered system instantly connects you with the most relevant healthcare solutions
        </p>
      </div>

      {/* Access Care Card */}
      <div className="rounded-xl p-6 bg-red-100 animate-on-scroll opacity-0 hover:shadow-md transition-all">
        <div className="h-10 w-10 bg-red-200 rounded-lg flex items-center justify-center mb-4">
          <FiStar className="text-red-600" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Access More, Care<br/>
          {/* <span className="text-red-600">Premium Care Options</span> */}
        </h3>
        <p className="text-gray-700">
        Unlock exclusive excess to the top- rated healthcare services available at your location 
        </p>
      </div>

      {/* Secure Records Card */}
      <div className="rounded-xl p-6 bg-blue-100 animate-on-scroll opacity-0 hover:shadow-md transition-all">
        <div className="h-10 w-10 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
          <FiLock className="text-blue-600" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Secure More, Health Records<br/>
          {/* <span className="text-blue-600">Digital Health Vault</span> */}
        </h3>
        <p className="text-gray-700">
          Blockchain-protected medical records with 24/7 access and real-time updates
        </p>
      </div>
    </div>
  </div>
</section>

        <DigitalHealthChallenges/>
        {/* Key Features Section */}
        <FeatureSection/>

        {/* Other Features */}
        
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[rgb(162,223,162)] rounded-xl p-8 animate-on-scroll opacity-0">
                <h3 className="text-2xl font-bold">
                  Nutrition and<br />Mental Health
                </h3>
                <p className="mt-4 text-gray-700">
                  We believe in a holistic approach to healthcare, focusing on both physical and mental wellbeing.
                </p>
                <div className="flex mt-6 gap-2">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                </div>
                <div className="mt-6">
                  <button className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-sm">
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-[#53589b] text-white rounded-xl p-8 animate-on-scroll opacity-0">
                <h3 className="text-2xl font-bold">
                  Healthy habits for a<br />Happy Heart
                </h3>
                <p className="mt-4 opacity-80">
                  Discover personalized recommendations for maintaining a healthy heart and preventing cardiovascular issues.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#3A3F7B] rounded-xl p-4">
                    <div className="text-3xl font-bold">08</div>
                    <p className="text-sm opacity-80">Health tips per week</p>
                  </div>
                  <div className="bg-pink-200 text-pink-800 rounded-xl p-4">
                    <div className="text-3xl font-bold">100k</div>
                    <p className="text-sm">Satisfied users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-2">
                Our platform is trusted by many
              </h3>
              <p className="mb-6 text-gray-600">
                Users love our approach to simplified healthcare
              </p>
              <div className="flex justify-center items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl">
                <p className="italic text-gray-700">
                  "Qurible has transformed the way I access healthcare services. The platform is intuitive, and I can easily find, compare, and select the best options for my needs."
                </p>
                <div className="flex items-center justify-center mt-4 gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                     User image can go here 
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Akash Gupta</p>
                    <p className="text-xs text-gray-500">Healthcare Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* App Download Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-[rgb(162,223,162)] p-8 rounded-xl animate-on-scroll opacity-0">
                <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
                <p className="mb-6">
                  Be the first to experience our innovative healthcare platform when it launches
                </p>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="rounded-xl bg-[#5358ac] h-32 flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="font-semibold mb-2">App coming soon!</p>
                      <p className="text-sm opacity-80">
                        We're working hard to bring you the best experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll opacity-0">
                <h3 className="text-2xl font-bold mb-4">
                  Download Our<br />Healthcare App for<br />Easy Access
                </h3>
                <p className="mb-6 text-gray-600">
                  Stay tuned for our upcoming mobile app that will make healthcare access even more convenient
                </p>
                <div className="flex gap-4 mb-6">
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FiDownload size={18} />
                    <div>
                      <p className="text-xs">Coming soon on</p>
                      <p className="font-semibold">App Store</p>
                    </div>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FiDownload size={18} />
                    <div>
                      <p className="text-xs">Coming soon on</p>
                      <p className="font-semibold">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
