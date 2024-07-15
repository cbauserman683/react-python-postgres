import React from "react";
import { Link } from "react-router-dom";

const NavigationComponent = ({ token, avatar }) => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link class="btn btn-ghost text-xl" to="/">
          React App
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Quick Links</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/demo">Demo</Link>
                </li>
                <li>
                  <Link to="/calculator">Calculator</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/authentication">Authentication</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Theme</summary>
              <ul class="menu bg-base-100 rounded-t-none p-2">
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Light"
                    value="light"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Dark"
                    value="dark"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cupcake"
                    value="cupcake"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="cmyk"
                    value="cmyk"
                  />
                </li>
              </ul>
            </details>
          </li>
          <li>
            {token ? (
              <div className="dropdown dropdown-end">
                <button
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={avatar} alt="Avatar" />
                  </div>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/authentication">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationComponent;
