import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Demo from "./Demo";
import Calculator from "./Calculator";
import FAQ from "./FAQ";
import Services from "./Services";
import Authentication from "./Authentication";
import Logout from "../components/authentication/Logout";
import EditProfile from "../components/authentication/EditProfile";

const PageRouter = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<EditProfile token={token} />} />
      <Route
        path="/authentication"
        element={<Authentication setToken={setToken} />}
      />
      <Route path="/logout" element={<Logout setToken={setToken} />} />
    </Routes>
  );
};

export default PageRouter;
