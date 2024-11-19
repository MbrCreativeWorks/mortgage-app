import React from "react";
import mortgageIllustration from "../../assets/mortgageIllustration.svg";

const HeroArea = () => {
  return (
    <div className="heroArea bg-white h-[80vh]">
      <div className="heroAreaOverlay h-full">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left">
            <h1 className="radialColorText text-4xl lg:text-[66px] leading-tight font-bold w-max">
              METAL MORTGAGE
            </h1>
            <h3 className="mt-2 text-2xl lg:text-[30px] font-bold text-white opacity-90">
            Your Partner in Tailored Mortgage Solutions
            </h3>
            <p className="mt-6 text-lg text-white opacity-90 w-1/2">
              At Metal Mortgage, we simplify the path to your financial success.
              Whether you're buying your first property or refinancing, we offer
              personalized solutions to meet your needs. With expert guidance
              and a vast network of lenders, we secure the financing you
              deserve.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start ">
              <button className="radialColor text-black px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition">
                Get Started
              </button>
              <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
