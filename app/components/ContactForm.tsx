 "use client";
import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setForm({ ...form, [name]: checkbox.checked } as any);
      return;
    }
    setForm({ ...form, [name]: value } as any);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!form.name || !form.email || !form.message || !form.consent) {
      setStatus({ type: "error", message: "Please fill required fields and consent." });
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Your message has been sent. Thank you!" });
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          consent: false,
        });
      } else {
        setStatus({ type: "error", message: data?.error || "There was an error sending your message." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4" aria-busy={loading}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Name *</span>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" aria-required className="p-3 border rounded bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm mb-1">Email *</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" aria-required className="p-3 border rounded bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Phone</span>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1" />
        </label>
        <label className="flex flex-col">
          <span className="text-sm mb-1">Company</span>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="p-3 border rounded bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1" />
        </label>
      </div>
      <label className="flex flex-col">
        <span className="text-sm mb-1">Service of interest</span>
        <select name="service" value={form.service} onChange={handleChange} className="p-3 border rounded bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1">
          <option value="">Select a service</option>
          <option>Construction Management</option>
          <option>Project Management</option>
          <option>Maintenance & Facility</option>
          <option>Consultancy</option>
        </select>
      </label>
      <label className="flex flex-col">
        <span className="text-sm mb-1">Message *</span>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" aria-required className="p-3 border rounded min-h-[120px] bg-white text-[--color-heading] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1" />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange} />
        <span>I consent to CCSL storing and using my contact information to respond to this inquiry.</span>
      </label>
      <div>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-[--color-primary] text-white rounded">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {status && (
        <div role="status" className={`text-sm mt-2 ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>
          {status.message}
        </div>
      )}
    </form>
  );
};


