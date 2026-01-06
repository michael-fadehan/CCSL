import "../styles/globals.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "Coarse Construction and Services Limited (CCSL)",
  description: "Building with purpose. Delivering with discipline. CCSL construction & services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


