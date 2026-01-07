 "use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-20">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/CCSL-Icon.png" alt="CCSL logo" width={44} height={44} />
          <span className="text-xl font-bold text-[--color-primary]">CCSL</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary">
          <Link href="/" className="text-gray-700">Home</Link>
          <Link href="/about" className="text-gray-700">About</Link>
          <Link href="/#services" className="text-gray-700">Services</Link>
          <Link href="/projects" className="text-gray-700">Projects</Link>
          <Link href="/contact" className="px-4 py-2 bg-[--color-primary] text-white rounded">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/" className="text-gray-700" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#services" className="text-gray-700" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/projects" className="text-gray-700" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" className="px-4 py-2 bg-[--color-primary] text-white rounded w-max" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};


