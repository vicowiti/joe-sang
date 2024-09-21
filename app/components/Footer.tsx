import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Background Section */}
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          ‘From Barefoot Beginnings to Boundless Possibilities: A Journey of
          Resilience, Hope, and Transformation’
        </h1>
      </div>

      {/* Overlay Section */}
      <div className="relative">
        <div className="container mx-auto text-center relative">
          {/* Background Image or Design */}
          <div className="absolute inset-0 bg-blue-500 opacity-70 rounded-lg"></div>

          {/* Text Content */}
          <div className="relative py-16 px-8 md:py-24 md:px-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Join Joe Sang in creating a positive impact today.
            </h2>
            <p className="text-white mt-4">
              Together, we can make dreams come true and change lives forever.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex justify-between items-start">
          {/* Logo */}
          <div className="text-white">
            <h2 className="text-xl font-bold">DreamCare</h2>
            <p>Joe Sang Foundation</p>
          </div>

          {/* Contacts */}
          <div className="text-white">
            <h3 className="font-bold">Contacts</h3>
            <p>Nairobi Kenya</p>
            <p>P.O BOX 1508-00500</p>
            <p>+254 720 24 59 06</p>
            <p>info@joesangfoundation.org</p>
          </div>

          {/* Main Menu */}
          <div className="text-white">
            <h3 className="font-bold">Main Menu</h3>
            <ul>
              <li>Home Page</li>
              <li>About Us</li>
              <li>Campaign</li>
              <li>Donation</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-white">
            <h3 className="font-bold">Subscribe to our newsletter</h3>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mt-2 rounded-md text-black"
            />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
