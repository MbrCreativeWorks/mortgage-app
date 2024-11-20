import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import b2b from "../../assets/clients/b2b.png";
import cmi from "../../assets/clients/cmi.png";
import communityTrust from "../../assets/clients/communitytrust.png";
import eqBank from "../../assets/clients/eqbank.png";
import merix from "../../assets/clients/merix.png";
import scotiabank from "../../assets/clients/scotiabank.png";
import wealthone from "../../assets/clients/wealthone.png";

const Lenders = () => {
  // Add more logos to the lenders array from here
  const lenders = [
    b2b,
    cmi,
    communityTrust,
    eqBank,
    merix,
    scotiabank,
    wealthone,
  ];
  const getAltText = (url) => {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1];
    return fileName.replace(".png", "").replace(/-/g, " ");
  };

  // Settings for the slider
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 pt-10 md:pt-20 pb-12" id="lenders">
      <div className="mx-auto">
        <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-900 mb-10">
          Our Trusted Lenders
        </h2>
        <Slider {...settings}>
          {lenders.map((lender, index) => (
            <div
              key={index}
              className="flex h-20 justify-center items-center px-4"
            >
              <img
                src={lender}
                alt={getAltText(lender)}
                className="m-auto h-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Lenders;
