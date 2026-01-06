 "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/CCSL-Icon.png" alt="CCSL logo" width={44} height={44} />
          <span className="text-xl font-bold text-[--color-primary]">CCSL</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-gray-700">Home</Link>
          <Link href="/about" className="text-gray-700">About</Link>
          <Link href="/#services" className="text-gray-700">Services</Link>
          <Link href="/projects" className="text-gray-700">Projects</Link>
          <Link href="/contact" className="px-4 py-2 bg-[--color-primary] text-white rounded">Contact</Link>
        </nav>
        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
};


