import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import "./index.css";
import Blogs from "./components/Pages/Blogs";
import Signup from "./components/Pages/Signup";
import ContactForm from "./components/Pages/ContactForm/ContactForm";
import Login from "./components/Pages/Login";
import AboutSection from "./components/Pages/AboutSection";
function App() {
  return (
    <Router>
       
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>

    </Router>
  );
}

export default App;
