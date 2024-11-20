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
    email: "john.doe@metalmortgage.ca",
    image: "https://pittakis.com/wp-content/uploads/2016/10/team-1-2.jpg", // Replace with actual image URL
  },
];

const Team = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl lg:text-5xl font-bold text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="flex justify-center gap-6">
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
                <p className="text-gray-600 mb-4">{member.title}</p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone: </strong> {member.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Email: </strong>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-primary hover:underline"
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
