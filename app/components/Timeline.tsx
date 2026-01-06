import React from "react";
import { timeline } from "../../data/about";

export const Timeline: React.FC = () => {
  return (
    <section className="py-12 bg-[--color-primary-light]">
      <div className="container">
        <h2 className="section-heading">Our Journey</h2>
        <div className="flex flex-col md:flex-row md:space-x-6 gap-4">
          {timeline.map((t) => (
            <div key={t.year} className="bg-white rounded-lg p-4 shadow flex-1">
              <div className="text-sm text-[--color-primary] font-semibold">{t.year}</div>
              <h3 className="font-semibold mt-2">{t.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


