import React from "react";
import handleLinkClick from "../../utils/utils";


const HeroArea = () => {
  return (
    <div className="heroArea bg-white h-[90vh]" id="home">
      <div className="heroAreaOverlay h-full">
        <div className="container px-4 md:px-8  mx-auto h-full py-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <div className="pb-20 text-center lg:text-left">
            <h1 className="radialColorText text-4xl lg:text-[66px] leading-tight font-bold w-max mx-auto lg:mx-0">
              METAL MORTGAGE
            </h1>
            <h3 className="mt-2 text-2xl lg:text-[30px] font-bold text-white opacity-90">
              Your Partner in Tailored Mortgage Solutions
            </h3>
            <p className="mt-6 text-lg text-white opacity-90 w-full lg:w-1/2">
              At Metal Mortgage, we simplify the path to your financial success.
              Whether you're buying your first property or refinancing, we offer
              personalized solutions to meet your needs. With expert guidance
              and a vast network of lenders, we secure the financing you
              deserve.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="radialColorBg text-black font-semibold px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition"
              >
                Apply Now
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#aboutUs');
                }}
                className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
              >
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
