import React, { useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Singup from "../Pages/Signup";

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(" http://localhost:3000/api/auth/login", {
        email: values.email,
        password: values.password
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-[600px] mx-auto bg-white p-8 rounded-lg shadow-lg mt-40 mb-10">
        <h1 className="text-center text-3xl text-green-600 mb-5">Login to Your Account</h1>

        {/* Error Message Display */}
        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="email" className="font-bold text-sm mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChanges}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="font-bold text-sm mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChanges}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div className="mt-5 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
