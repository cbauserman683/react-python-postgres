import React from "react";
import Register from "./Register";
import Login from "./Login";

const LoginOrRegisterComponent = ({ setToken }) => {
  return (
    <div role="tablist" class="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="Login"
        checked="true"
      />
      <div
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Login setToken={setToken} />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab"
        aria-label="Register"
      />
      <div
        role="tabpanel"
        class="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Register />
      </div>
    </div>
  );
};

export default LoginOrRegisterComponent;
