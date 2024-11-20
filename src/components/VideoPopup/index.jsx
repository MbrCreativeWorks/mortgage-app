import React, { useState } from "react";
import { X } from "lucide-react";

const VideoPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal state
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-primary-light text-black font-semibold px-6 py-3 rounded-lg"
      >
        Watch Video
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] h-[40%] md:w-[75%] md:h-[50%] lg:w-[720px] lg:h-[405px]">
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/WE_EgwFRils?si=poMQKzV_a9wRK6rf"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg w-full h-full"
                ></iframe>
              </div>
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-white bg-gray-900 p-1.5 rounded-md hover:bg-gray-700"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
