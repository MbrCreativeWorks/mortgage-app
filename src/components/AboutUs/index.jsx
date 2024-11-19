import React from "react";
import  mortgageIllustration  from "../../assets/mortgageIllustration.svg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">

        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Welcome to Our Amazing Product
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover how we can help you achieve your goals with our innovative
            solutions. Easy, fast, and affordable.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <img
            src={mortgageIllustration}
            alt="Mortgage Illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
