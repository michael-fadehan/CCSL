import React from "react";
import Image from "next/image";
import { team } from "../../data/about";

export const TeamGrid: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-heading">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <article key={m.name} className="bg-white rounded-lg p-6 shadow text-center">
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden mb-4">
                <Image src={m.photo} alt={m.name} width={112} height={112} className="object-cover" />
              </div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-gray-500 mb-2">{m.role}</div>
              <p className="text-sm text-gray-600">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


