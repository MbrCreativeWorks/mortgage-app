import { useState } from "react";

const Navbar =()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Metal Mortgage
            </a>
          </div>

          {/* Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* CTA Button (hidden on mobile) */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600">
              About
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;