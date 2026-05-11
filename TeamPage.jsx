import React from "react";

const team = [
  {
    name: "Emmanuel Divine",
    role: "Founder & CEO",
    department: "Executive",
    email: "employee@globalixtech.com",
    password: "AGT-92!xQw7$1pLz@2026-ADMIN-#Fv"
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    department: "Management",
    email: "employee@globalixtech.com",
    password: "Mgt!2026$#FvXQw7$1pLz"
  },
  {
    name: "Michael Brown",
    role: "Business Development Manager",
    department: "Management",
    email: "employee@globalixtech.com",
    password: "Mgt!2026$#FvXQw7$1pLz"
  },
  {
    name: "Anita Okoro",
    role: "Administrative Director",
    department: "Management",
    email: "employee@globalixtech.com",
    password: "Mgt!2026$#FvXQw7$1pLz"
  },
  {
    name: "Daniel Smith",
    role: "Lead Software Engineer",
    department: "IT & Development",
    email: "employee@globalixtech.com",
    password: "WdV!2026$#xLw8$2nV"
  },
  {
    name: "Kevin Patel",
    role: "Frontend Developer",
    department: "IT & Development",
    email: "employee@globalixtech.com",
    password: "WdV!2026$#xLw8$2nV"
  },
  {
    name: "Aisha Bello",
    role: "Backend Developer",
    department: "IT & Development",
    email: "employee@globalixtech.com",
    password: "WdV!2026$#xLw8$2nV"
  },
  {
    name: "Lucas Martin",
    role: "Mobile App Developer",
    department: "IT & Development",
    email: "employee@globalixtech.com",
    password: "WdV!2026$#xLw8$2nV"
  },
  {
    name: "Grace Kim",
    role: "UI/UX Designer",
    department: "Design",
    email: "employee@globalixtech.com",
    password: "Dsg#2026!LpXQw7$"
  },
  {
    name: "Jessica Adams",
    role: "Marketing Manager",
    department: "Marketing",
    email: "employee@globalixtech.com",
    password: "Mkt!2026$#FvXQw7$"
  },
  {
    name: "Brian Thompson",
    role: "Digital Marketing Specialist",
    department: "Marketing",
    email: "employee@globalixtech.com",
    password: "Mkt!2026$#FvXQw7$"
  },
  {
    name: "Linda Williams",
    role: "Sales Executive",
    department: "Sales",
    email: "employee@globalixtech.com",
    password: "Sls#2026!FvXQw7$1pLz"
  },
  {
    name: "Samuel Osei",
    role: "SEO Specialist",
    department: "Marketing",
    email: "employee@globalixtech.com",
    password: "Mkt!2026$#FvXQw7$"
  },
  {
    name: "Peter Johnson",
    role: "IT Support Specialist",
    department: "Support",
    email: "employee@globalixtech.com",
    password: "Sup!2026$#FvXQw7$1pLz"
  },
  {
    name: "Mary Clarke",
    role: "Customer Service Representative",
    department: "Support",
    email: "employee@globalixtech.com",
    password: "Sup!2026$#FvXQw7$1pLz"
  },
  {
    name: "David Lee",
    role: "Technical Consultant",
    department: "Consulting",
    email: "employee@globalixtech.com",
    password: "AGT-92!xQw7$1pLz@2026-ADMIN-#Fv"
  }
];

export default function TeamPage({ onSelect }) {
  const departments = [...new Set(team.map((t) => t.department))];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-blue-900">Globalix Group</h1>
        <p className="text-center text-gray-600 mb-10">
          Meet our professional team driving innovation and business excellence
        </p>

        {departments.map((dept) => (
          <div key={dept} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-blue-700">
              {dept}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team
                .filter((member) => member.department === dept)
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition cursor-pointer border border-blue-100"
                    onClick={() => onSelect(member)}
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-100 mb-4 flex items-center justify-center text-xl font-bold text-blue-800">
                      {member.name.charAt(0)}
                    </div>

                    <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {member.bio}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
