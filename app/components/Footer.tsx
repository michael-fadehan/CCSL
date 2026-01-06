"use client";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-lg font-semibold text-[--color-primary]">Coarse Construction and Services Limited</h3>
          <p className="text-sm text-gray-600">info@coarse-co.com</p>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} CCSL. All rights reserved.</div>
      </div>
    </footer>
  );
};


