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
          <div className="bg-white rounded-lg shadow-lg w-max">
            <div className="relative">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WE_EgwFRils?si=poMQKzV_a9wRK6rf"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              <button
                onClick={toggleModal}
                className="absolute top-1 right-1 text-white bg-gray-900 p-1.5 rounded-md hover:bg-gray-900"
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
