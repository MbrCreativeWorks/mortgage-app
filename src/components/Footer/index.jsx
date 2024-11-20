import React from "react";
import mortgageLogo from "../../assets/mortgageLogo.png";

const Footer = () => {
  const footerSections = [
    {
      heading: "Useful Links",
      items: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { name: "Blog", url: "/blog" },
        { name: "Documentation", url: "/docs" },
        { name: "FAQ", url: "/faq" },
      ],
    },
    {
      heading: "Contact",
      items: [
        { label: "Email", value: "daniel@metalmortgage.ca" },
        { label: "Phone", value: "647.748.9010" },
        { label: "Address", value: "38 Iannuzzi Street, Toronto, Ontario." },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-400 py-20">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col space-y-1">
          <div className="w-44 mb-4">
            <img src={mortgageLogo} alt="Mortgage Logo" className="w-full" />
          </div>
          <p className="text-base text-gray-400">Building Your Future with Rock-Solid Solutions.</p>
          <p className="text-base text-gray-400">2024 Metal Mortgage. All Rights Reserved.</p>
         
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h3 className="font-semibold text-primary">{section.heading}</h3>
            <ul className="text-sm text-gray-400">
              {section.items.map((item, itemIndex) =>
                item.url ? (
                  <li key={itemIndex} className="mb-4">
                    <a
                      href={item.url}
                      className="text-base hover:text-primary transition-[colors,opacity] duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ) : (
                  <li key={itemIndex} className="mb-1">
                    <p className="text-base hover:text-primary transition-[colors,opacity] duration-200">
                      <strong>{item.label}:</strong> {item.value}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
