import React from "react";

// Array of team members with their information
const teamMembers = [
  {
    name: "Daniel Char",
    title: "Mortgage Specialist",
    phone: "647.748.9010",
    email: "daniel@metalmortgage.ca",
    image: "https://agentphotos.mortgageweb.ca/18347_profile.png",
  },
  {
    name: "John Doe",
    title: "Loan Officer",
    phone: "123.456.7890",
    email: "john.d@metalmortgage.ca",
    image: "https://pittakis.com/wp-content/uploads/2016/10/team-1-2.jpg", // Replace with actual image URL
  },
];

const Team = () => {
  return (
    <section className="bg-white py-10 pt-10 md:pt-20" id="team">
      <div className="container px-4 md:px-8  mx-auto">
        <h2 className="text-center text-2xl lg:text-5xl font-bold text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 mb-2">{member.title}</p>
                <p className="text-gray-700 mb-1">
                  <strong>Phone: </strong> {member.phone}
                </p>
                <p className="text-gray-700">
                  <strong>Email: </strong>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-700 hover:text-primary hover:underline"
                  >
                    {member.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
