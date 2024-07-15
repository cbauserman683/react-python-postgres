import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setToken(null);
    localStorage.removeItem("token");
    toast.info("You have logged out successfully!");
    navigate("/"); // Redirect to home page or any other page
  }, []);

  return null;
};

export default Logout;
