import React from "react";

const About = () => {
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div class="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          About This Application
        </h1>
        <p class="text-gray-600 mb-4">
          This application is built using a modern web development stack
          designed to ensure a high level of performance, scalability, and ease
          of development.
        </p>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Frontend</h2>
          <p class="text-gray-600">
            The frontend of this application is built using{" "}
            <strong>React</strong>, a popular JavaScript library for building
            user interfaces. React allows us to create reusable UI components
            and manage the application state efficiently.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Backend</h2>
          <p class="text-gray-600">
            The backend is powered by <strong>Python</strong> using the{" "}
            <strong>FastAPI</strong> framework. FastAPI is a modern, fast
            (high-performance) web framework for building APIs with Python 3.7+
            based on standard Python type hints.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Database</h2>
          <p class="text-gray-600">
            For data storage, we use <strong>PostgreSQL</strong>, a powerful,
            open-source object-relational database system. It provides robust
            data integrity and support for advanced data types.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">
            Containerization
          </h2>
          <p class="text-gray-600">
            The entire application is containerized using{" "}
            <strong>Docker</strong>. Docker allows us to package the application
            and its dependencies into a container, ensuring consistent behavior
            across different environments.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Styling</h2>
          <p class="text-gray-600">
            For styling, we use <strong>Tailwind CSS</strong> along with{" "}
            <strong>DaisyUI</strong>. Tailwind CSS is a utility-first CSS
            framework that provides low-level utility classes to build custom
            designs without leaving your HTML. DaisyUI extends Tailwind CSS with
            pre-designed components that are easy to use and customize.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
