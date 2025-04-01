import React, { useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();  
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: '',
    confirm_password: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    state: '',
    city: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (values.password !== values.confirm_password) {
      setErrorMessage("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      const monthIndex = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ].indexOf(values.month) + 1;

      const dateOfBirth = new Date(`${values.year}-${monthIndex}-${values.day}`).toISOString().split('T')[0];

      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        firstName: values.firstname,
        lastName: values.lastname,
        email: values.email,
        phoneNumber: values.contact,
        password: values.password,
        dateOfBirth,  
        gender: values.gender,
        state: values.state,
        city: values.city,
      });

      if (response.status === 201) {
        toast.success("Account created successfully!");
        setValues({
          firstname: '',
          lastname: '',
          email: '',
          contact: '',
          password: '',
          confirm_password: '',
          day: '',
          month: '',
          year: '',
          gender: '',
          state: '',
          city: ''
        });
        navigate("/login");
      }
      
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error("User already exists");
      } else {
        setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  return(
    <>
      <Header/>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-24 mb-10 md:mt-30 mb:mb-20">
        <h1 className="text-center text-2xl font-bold text-green-600">Create New Account</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required className="p-2 border rounded w-full" />
            <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required className="p-2 border rounded w-full" />
          </div>

          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required className="p-2 border rounded w-full" />
          <input type="text" name="contact" placeholder="Contact No" onChange={handleChange} required className="p-2 border rounded w-full" />

          <div className="grid md:grid-cols-2 gap-4">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-2 border rounded w-full" />
            <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} required className="p-2 border rounded w-full" />
          </div>

          <div className="flex justify-between items-center gap-2">
            <select name="day" onChange={handleChange} required className="p-2 border rounded w-full">
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select name="month" onChange={handleChange} required className="p-2 border rounded w-full">
              <option value="">Month</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December",
              ].map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select name="year" onChange={handleChange} required className="p-2 border rounded w-full">
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={2023 - i} value={2023 - i}>{2023 - i}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" onChange={handleChange} required className="mr-2" /> Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" onChange={handleChange} required className="mr-2" /> Female
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Other" onChange={handleChange} required className="mr-2" /> Other
            </label>
          </div>

          <select name="state" onChange={handleChange} required className="p-2 border rounded w-full">
            <option value="">Select State</option>
            {["Delhi", "Maharashtra", "Punjab", "Tamil Nadu", "Uttar Pradesh"].map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
      <Footer/>
    </>
  )
}
export default Signup;
