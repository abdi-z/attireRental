import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Essentials/Home/Home";
import About from "./components/Essentials/About/About";
import ContactUs from "./components/Essentials/ContactUs/ContactUs";
import Attires from "./components/Attire/Attires";
import Navbar from "./components/Essentials/Navbar/Navbar";
import Footer from "./components/Essentials/Footer/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NotFound from "./components/Essentials/NotFound/NotFound";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attires" element={<Attires />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

//added comment by daniyal

//some change by ar

export default App;
