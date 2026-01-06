import React from "react";

const steps = [
  { num: 1, title: "Consultation & Assessment", desc: "Initial consultation to understand client needs." },
  { num: 2, title: "Planning & Strategy", desc: "Developing a deliverable project plan, resource allocation & budget." },
  { num: 3, title: "Execution & Supervision", desc: "Managing construction activities, strict oversight & quality control." },
  { num: 4, title: "Delivery & Support", desc: "Delivering completed projects and providing aftercare and maintenance." },
];

export const SelectedWorks: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[--color-heading] mb-4 text-center">Selected Works</h2>
        <p className="text-center text-gray-600 mb-8">We operate with a lean internal team and a strong network of vetted professionals to deliver projects efficiently.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-[--color-primary] mb-3">{s.num}.</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border border-[--color-primary] text-[--color-primary] rounded">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
};


