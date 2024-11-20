import React from "react";
import mortgageIllustration from "../../assets/mortgageIllustration.png";
import VideoPopup from "../VideoPopup";

const AboutUs = () => {
  return (
    <div className="bg-white" id="aboutUs">
      <div className="container mx-auto py-20 flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            At Metal Mortgage, we understand that finding the right financing
            solution can be challenging, especially if traditional banks have
            turned you away. That's where we come in. Whether you're purchasing
            your first home, refinancing, or seeking tailored solutions, our
            team is committed to helping you navigate the complex world of
            mortgages. With our extensive network of lenders and expert
            knowledge, we work tirelessly to secure the best possible terms for
            you.
            <br /> Connect with us today to schedule a free Discovery Call, and
            let's work together to unlock the doors to your financial success.
          </p>
          <div className="mt-8">
            <VideoPopup />
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
