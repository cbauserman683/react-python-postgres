import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        alert("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-base-100 rounded-md w-full max-w-sm mx-auto"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Register
      </button>
    </form>
  );
};

export default Register;
