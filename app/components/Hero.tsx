 "use client";
import React from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div
        className="h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/6241ee7f-23b6-4edf-8fba-e939369bda8d.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10" />
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/80 p-6 rounded shadow-md">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[--color-heading] leading-[1.15] md:leading-[1.25]">Building with Purpose. Delivering with Discipline.</h1>
            <p className="mt-4 text-gray-700">Coarse Construction Solutions Limited delivers construction, project management and building services across residential, commercial and industrial developments.</p>
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2 bg-[--color-primary] text-white rounded focus:outline-none focus:ring-2 focus:ring-[--color-primary]">Request a Consultation</button>
              <Link href="/#services" className="px-5 py-2 border border-[--color-primary] text-[--color-primary] rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[--color-primary]">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


