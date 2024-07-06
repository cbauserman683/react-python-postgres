import React from "react";

const Services = () => {
  return (
    <div class="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div class="max-w-3xl w-full">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h1>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Web Development</h2>
            <p class="text-gray-700">
              We offer custom web development services to meet your business
              needs.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Mobile App Development</h2>
            <p class="text-gray-700">
              Our team can build high-quality mobile applications for both
              Android and iOS.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p class="text-gray-700">
              We provide top-notch UI/UX design services to create engaging and
              intuitive interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
