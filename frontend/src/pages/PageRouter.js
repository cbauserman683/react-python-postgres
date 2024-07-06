import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Demo from "./Demo";
import Calculator from "./Calculator";
import FAQ from "./FAQ";
import Services from "./Services";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default PageRouter;
