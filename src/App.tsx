import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
