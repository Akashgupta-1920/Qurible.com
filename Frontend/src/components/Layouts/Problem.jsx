import React from "react";
import {
  FiEye,
  FiHelpCircle,
  FiClock,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";


const DigitalHealthChallenges = () => {
  // Data for challenges and solutions
  const challenges = [
    {
      problem: "Limited visibility of available online healthcare services.",
      solution:
        "Our platform provides a comprehensive directory of healthcare services, making it easy to find what you need.",
      icon: <FiEye className="w-8 h-8 text-blue-600" />, // Icon for visibility
      bgColor: "bg-blue-50", // Background color for visibility
    },
    {
      problem: "High costs making quality care unaffordable.",
      solution:
        "We partner with providers to offer affordable, high-quality care options.",
      icon: <GiReceiveMoney  className="w-8 h-8 text-green-600" />, // Icon for cost
      bgColor: "bg-green-50", // Background color for cost
    },
    {
      problem: "Confusion in selecting the right healthcare services.",
      solution:
        "Our platform simplifies decision-making with clear, user-friendly filters.",
      icon: <FiHelpCircle className="w-8 h-8 text-purple-600" />, // Icon for confusion
      bgColor: "bg-purple-50", // Background color for confusion
    },
    {
      problem: "Lack of timely availability of critical services.",
      solution:
        "Need care fast? We connect you with providers who offer timely and reliable services.",
      icon: <FiClock className="w-8 h-8 text-orange-600" />, // Icon for time
      bgColor: "bg-orange-50", // Background color for time
    },
    {
      problem: "Time-consuming searches for trusted providers.",
      solution: "Save time with our curated list of trusted healthcare providers.",
      icon: <FiSearch className="w-8 h-8 text-indigo-600" />, // Icon for search
      bgColor: "bg-indigo-50", // Background color for search
    },
    {
      problem: "Low trust in online healthcare options.",
      solution:
        "We verify all providers to ensure you receive safe and reliable care.",
      icon: <FiCheckCircle className="w-8 h-8 text-teal-600" />, // Icon for trust
      bgColor: "bg-teal-50", // Background color for trust
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 lg:text-3xl md:text-2xl">
          Key Challenges in Digital Health Deliveries
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We understand the challenges you face. Here's how we solve them:
        </p>

        {/* Challenges and Solutions Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-center">
                {/* Icon with background color */}
                <div
                  className={`flex justify-center items-center w-16 h-16 mx-auto rounded-full ${challenge.bgColor}`}
                >
                  {challenge.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {challenge.problem}
                </h3>
                <p className="mt-2 text-gray-600">{challenge.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12">
          <a
            href="/signup" // Replace with your actual link
            className="inline-block bg-[#004BBE] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#003A8C] transition duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigitalHealthChallenges;