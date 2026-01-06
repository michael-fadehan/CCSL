import React from "react";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-[--color-heading] mb-4">Contact CCSL</h1>
      <p className="text-gray-600 mb-6">Have a project or enquiry? Send us a message and we'll get back to you.</p>
      <ContactForm />
    </div>
  );
}


