import { useState } from "react";
import mortgageLogo from "../../assets/mortgageLogo.png";
import handleLinkClick from "../../utils/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#aboutUs", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 bg-black shadow-md z-50">
      <div className="container px-4 md:px-8  mx-auto">
        <div className="flex items-center justify-between py-3">
          <a href="/">
            <div className="w-32">
              <img src={mortgageLogo} alt="Mortgage Logo" className="w-full" />
            </div>
          </a>
          {/* Links (hidden on mobile)   */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* CTA Button (hidden on mobile) */}
          <div className="hidden md:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="radialColorBg text-black font-semibold px-4 py-2 rounded-lg transition"
            >
              Apply Now
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown Links */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="p-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-400 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="w-full radialColorBg text-black font-semibold px-4 py-2 rounded-lg transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
