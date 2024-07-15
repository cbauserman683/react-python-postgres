import React from "react";
import LoginOrRegisterComponent from "../components/authentication/LoginOrRegisterComponent";

const Authentication = ({ setToken }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Authentication Example</h1>
      <div className="grid grid-cols-1 gap-4">
        <LoginOrRegisterComponent setToken={setToken}/>
      </div>
    </div>
  );
};

export default Authentication;
