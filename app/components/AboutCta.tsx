import React from "react";
import Link from "next/link";

export const AboutCta: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
        <p className="text-gray-600 mb-6">Talk to our team about your project and we'll prepare a consultation plan.</p>
        <Link href="/contact" className="px-6 py-3 bg-[--color-primary] text-white rounded">Request a Consultation</Link>
      </div>
    </section>
  );
};


