import React from 'react';
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

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Feature Teaser</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
              <FiSearch size={24} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Search and Selection</h3>
            <p className="text-gray-600 text-sm">
              Choose among the best healthcare services available
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-purple-50 p-3 rounded-full w-fit mb-4">
              <FiShield size={24} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">AI-Powered Personalised Care</h3>
            <p className="text-gray-600 text-sm">
              Interact with the most relevant healthcare services for you
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-green-50 p-3 rounded-full w-fit mb-4">
              <FiMessageCircle size={24} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">One-on-One Care</h3>
            <p className="text-gray-600 text-sm">
              Get personal attention for your health needs
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-amber-50 p-3 rounded-full w-fit mb-4">
              <FiClock size={24} className="text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Live Order Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track the live status on your orders
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
              <FiUser size={24} className="text-teal-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Health Accounts</h3>
            <p className="text-gray-600 text-sm">
              Take care of your family members as well by creating their separate health accounts
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
              <FiLock size={24} className="text-red-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Health Locker</h3>
            <p className="text-gray-600 text-sm">
              Keep all your health data in one protected place
            </p>
          </div>

          {/* Feature 7 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
              <FiShoppingCart size={24} className="text-yellow-700" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Seamless Checkout</h3>
            <p className="text-gray-600 text-sm">
              Experience the minimum clicks to place your order
            </p>
          </div>

          {/* Feature 8 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm animate-on-scroll opacity-0 hover:shadow-md transition-all">
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
  );
};

export default FeatureSection;