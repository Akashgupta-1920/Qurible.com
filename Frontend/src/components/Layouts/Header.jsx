import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddLocationAlt } from "react-icons/md";
// import Logo from "/src/assets/image/logo.jpeg"; // Imported as `logo`

const Header = () => {
  const [user, setUser] = useState(null);
  const [isauthenticated, setIsAuthenticated] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setDashboard(false);
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <div className="fixed top-0 bg-white w-full py-4 px-8 sm:px-12 z-10">
      <nav className="flex justify-between items-center text-lg font-semibold text-black">
        {/* Logo and Branding */}
        <div className="flex sm:flex-row items-center justify-center gap-2 sm:gap-1 md:gap-1.5 lg:gap-3 p-0 w-40%">
          <Link to='/home'>
            {/* Logo with Location Icon */}
            <div className="relative flex  justify-center items-center">
              {/* Logo Image */}
              {/* <img src={Logo} alt="Logo" className='w-40 h-16 md:w-50 md:h-10 lg:w-20 lg:h-20 rounded-full p-2' /> */}
              <div className='flex flex-col'>
              <h3 className="text-2xl sm:text-2xl lg:text-4xl text-gray-600 font-extrabold">Qurible.com</h3>
              <h3 className='text-sm lg:text-base '>Your Health, Simplified</h3>
              </div>
          

            </div>
          </Link>
        
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12 md:space-x-8">
          <Link
            to="/home"
            className="text-gray-700 hover:text-[#004BBE] relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#004BBE] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-[#95999f] relative group"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#004BBE] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blogs"
            className="text-gray-700 hover:text-[#004BBE] relative group"
          >
            Blogs
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#004BBE] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-[#004BBE] relative group"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#004BBE] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Auth Button - Desktop */}
        {/* <div className="hidden md:flex items-center">
          <button 
            className="text-[#004BBE] px-5 py-2 rounded-full border border-[#004BBE] hover:bg-[#004BBE] hover:text-white"
            onClick={() => setDashboard(!dashboard)}
          >
            <Link to={!isauthenticated ? '/login' : '#'}>
              {isauthenticated ? `${user?.firstName?.[0]}` : 'Sign up / Sign in'}
            </Link>
          </button>
        </div> */}

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col space-y-4">
                <Link to="/home" className="text-gray-700 hover:text-[#004BBE]">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-[#004BBE]">
                  About Us
                </Link>
                <Link to="/blogs" className="text-gray-700 hover:text-[#004BBE]">
                  Blogs
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#004BBE]">
                  Contact Us
                </Link>
                {/* <button 
                  className="mt-4 text-[#004BBE] px-5 py-2 rounded-full border border-[#004BBE] hover:bg-[#004BBE] hover:text-white"
                  onClick={() => {
                    setDashboard(!dashboard);
                    setIsOpen(false);
                  }}
                >
                  <Link to={!isauthenticated ? '/login' : '#'}>
                    {isauthenticated ? `${user?.firstName?.[0]}` : 'Sign up / Sign in'}
                  </Link>
                </button> */}
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Dropdown */}
        {(dashboard && isauthenticated) && (
          <>
            <div onClick={() => setDashboard(false)} className="fixed inset-0 bg-opacity-50 z-40" />
            <div className="fixed top-16 right-4 md:top-20 md:right-20 bg-white shadow-md p-5 z-50 rounded-lg">
              <div onClick={logout} className="text-gray-700 hover:text-[#004BBE] cursor-pointer">
                Logout
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;