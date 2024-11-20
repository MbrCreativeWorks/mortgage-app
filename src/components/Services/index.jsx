import React from "react";
import { Check } from "lucide-react";

const services = [
  {
    title: "Purchase Mortgage",
    details: [
      "You need the help of a mortgage professional to make the right decisions.",
      "Home Purchase Advice & Services",
      "Shop all the Banks",
      "Lowest Rates",
      "Self-employed / New to Canada",
      "Lower your monthly payments",
    ],
  },
  {
    title: "Mortgage Renewals",
    details: [
      "Most homeowners simply sign the lenders renewal without shopping for the best rate and terms.",
      "We shop for you, no charge",
      "No cost switch program",
      "Canada's best prepayment options",
    ],
  },
  {
    title: "Mortgage Refinance",
    details: [
      "Mortgage refinance can prove beneficial in several ways.",
      "Get cash out for any purpose",
      "Consolidate high interest credit cards",
      "Lower your monthly payments",
      "Renovations and home improvements",
      "Programs for self-employed",
      "Canada's best prepayment options",
    ],
  },
  {
    title: "Home Equity Loans",
    details: [
      "You need the help of a mortgage professional to make the right decisions.",
      "Many programs to help you",
      "Easy access to low interest loans",
      "Start a new business",
      "Renovations and home improvements",
      "Education, Invest for retirement",
      "Canada's best prepayment options",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-10" id="services">
      <div className="container px-4 md:px-8  mx-auto">
        <h2 className="text-center text-2xl lg:text-5xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid gap-4  md:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
