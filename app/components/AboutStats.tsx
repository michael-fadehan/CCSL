import React from "react";
import { stats } from "../../data/about";

export const AboutStats: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-3xl font-bold text-[--color-primary] mb-2">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


