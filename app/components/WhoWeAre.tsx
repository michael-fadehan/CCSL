import React from "react";
import { stats } from "../../data/about";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold text-[--color-heading] mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            Coarse Construction and Services Limited (CCSL) is a professional construction and project delivery company focused on quality execution, efficient management, and project results. We work with developers, organizations, and private clients to deliver projects from planning through completion.
          </p>
          <button className="px-5 py-2 bg-[--color-primary] text-white rounded focus:outline-none focus:ring-2 focus:ring-[--color-primary]">Learn More About Us</button>
        </div>

        <aside className="space-y-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-4 shadow flex items-center gap-4">
              <div className="w-12 h-12 bg-[--color-primary] text-white rounded flex items-center justify-center">{s.value}</div>
              <div>
                <div className="text-sm font-semibold">{s.label}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};


