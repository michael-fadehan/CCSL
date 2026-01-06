import React from "react";
import Link from "next/link";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-[--color-primary] text-white py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Coarse Construction and Services Limited (CCSL)</h1>
          <p className="text-lg text-white/90 mb-6">
            We deliver disciplined project delivery and construction services across residential, commercial and industrial sectors — combining safety, quality and operational excellence.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="px-5 py-3 bg-white text-[--color-primary] rounded font-semibold">Request a Consultation</Link>
            <Link href="/#services" className="px-5 py-3 border border-white/30 text-white rounded">View Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};


