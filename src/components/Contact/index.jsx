import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", inquiry: "" });
  };

  return (
    <section className="bg-gray-100 py-10" id="contact">
      <div className="container px-4 md:px-8  mx-auto">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 text-center mb-10">
          Apply Now for Mortgage Inquiry
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <p className="mt-2 text-gray-700">Daniel Char</p>
            <p className="text-gray-700">
              <strong>Phone: </strong> 647.748.9010
            </p>
            <p className="text-gray-700">
              <strong>Email: </strong>
              <a
                href="mailto:daniel@metalmortgage.ca"
                className="text-gray-700 hover:text-primary hover:underline"
              >
                daniel@metalmortgage.ca
              </a>
            </p>
            <p className="text-gray-700">
              38 Iannuzzi Street, Toronto, Ontario M5V0S2
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Our Location
              </h4>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJbasjMigDKckKDJ_bvO82jvW4QyJmd6s&q=38+Iannuzzi+Street,+Toronto,+Ontario+M5V0S2"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Map Location"
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 flex items-center justify-center">
            {isSubmitted ? (
              <div>
                <h3 className="text-center text-xl font-semibold text-green-600">
                  Success! Your inquiry has been submitted.
                </h3>
                <p className="text-center mt-2 text-gray-700">
                  Thank you for reaching out. We will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="inquiry"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Inquiry Details
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    placeholder="Describe your mortgage inquiry"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-light text-black font-semibold py-3 rounded-lg transition"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
