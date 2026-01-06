import React from "react";

const services = [
  { title: "Construction Management", blurb: "End-to-end coordination and execution of construction projects." },
  { title: "Project Management", blurb: "Planning, scheduling, cost control and delivery oversight." },
  { title: "Construction Maintenance", blurb: "Ongoing building maintenance & technical support." },
  { title: "Consultancy", blurb: "Advisory services for feasibility, planning, and execution." },
  { title: "Building Services & Facility Management", blurb: "Operational support for completed assets." },
  { title: "Conservatory Facility Management", blurb: "Operational support for completed assets." },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="bg-[--color-primary-light] py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[--color-heading] mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="h-12 w-12 bg-[--color-primary] rounded flex items-center justify-center text-white mb-4">🏗️</div>
              <h3 className="font-semibold text-[--color-heading] mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.blurb}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-[--color-primary] text-white rounded focus:outline-none focus:ring-2 focus:ring-[--color-primary]">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
};


