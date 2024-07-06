import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="flex-grow bg-gray-100 flex items-center justify-center p-8">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Welcome to MyApp</h2>
          <p class="text-lg text-gray-700 mb-6">
            Your one-stop solution for web development needs.
          </p>
          <a
            href="/get-started"
            class="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section class="bg-white py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-100 p-6 rounded shadow-md">
              <h3 class="text-2xl font-semibold mb-4">Feature One</h3>
              <p class="text-gray-700">
                Description of feature one. It provides a lot of benefits and
                features.
              </p>
            </div>
            <div class="bg-gray-100 p-6 rounded shadow-md">
              <h3 class="text-2xl font-semibold mb-4">Feature Two</h3>
              <p class="text-gray-700">
                Description of feature two. It provides a lot of benefits and
                features.
              </p>
            </div>
            <div class="bg-gray-100 p-6 rounded shadow-md">
              <h3 class="text-2xl font-semibold mb-4">Feature Three</h3>
              <p class="text-gray-700">
                Description of feature three. It provides a lot of benefits and
                features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
