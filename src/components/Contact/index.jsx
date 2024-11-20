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
    // Here you can handle form submission, e.g., send data to the server
    setIsSubmitted(true); // Set success message after submission
    setFormData({ name: "", email: "", phone: "", inquiry: "" }); // Clear form
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 text-center mb-10">
          Apply Now for Mortgage Inquiry
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
             {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <p className="mt-2 text-gray-700">Daniel Char</p>
            <p className="text-gray-700">Phone: 647.748.9010</p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:daniel@metalmortgage.ca"
                className="text-blue-600 hover:underline"
              >
                daniel@metalmortgage.ca
              </a>
            </p>
            <p className="text-gray-700">
              38 Iannuzzi Street, Toronto, Ontario M5V0S2
            </p>
          </div>
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-600">
                  Success! Your inquiry has been submitted.
                </h3>
                <p className="mt-4 text-gray-700">
                  Thank you for reaching out. We will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Describe your mortgage inquiry"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

         
        </div>

        {/* Success Message at the Bottom */}
        {isSubmitted && (
          <div className="mt-6 text-center">
            <p className="text-green-600 text-lg font-semibold">
              Your inquiry has been successfully submitted! We will get back to
              you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
