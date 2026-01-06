import React from "react";
export const Certifications: React.FC = () => {
  const logos = ["/partners/.gitkeep"];
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="section-heading">Partners & Certifications</h2>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">Logo</div>
          <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">Logo</div>
          <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">Logo</div>
        </div>
      </div>
    </section>
  );
};


