'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-amber-50 py-24 px-6 border-b border-amber-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Say Hello</p>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900">Contact</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-black mb-8 text-gray-900">Get In Touch</h2>
            <div className="space-y-6 text-gray-500">
              <div>
                <p className="text-amber-500 text-xs uppercase tracking-widest mb-1 font-semibold">Email</p>
                <a href="mailto:info@teamayan.com" className="hover:text-amber-500 transition">info@teamayan.com</a>
              </div>
              <div>
                <p className="text-amber-500 text-xs uppercase tracking-widest mb-1 font-semibold">Phone</p>
                <a href="tel:+911234567890" className="hover:text-amber-500 transition">+91 123 456 7890</a>
              </div>
              <div>
                <p className="text-amber-500 text-xs uppercase tracking-widest mb-1 font-semibold">Location</p>
                <p>New Delhi, India</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-amber-500 text-xs uppercase tracking-widest mb-4 font-semibold">Services We Discuss</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>→ Music Production &amp; Composition</li>
                <li>→ Live Performances &amp; Events</li>
                <li>→ Brand Collaborations</li>
                <li>→ Scoring for Film &amp; Media</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent && (
              <div className="bg-amber-50 border border-amber-200 text-amber-700 px-6 py-4 font-semibold mb-6">
                Message sent! We will be in touch soon.
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Name</label>
                  <input name="name" value={form.name} onChange={handle} required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 focus:outline-none focus:border-amber-500 transition"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 focus:outline-none focus:border-amber-500 transition"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Subject</label>
                <select name="subject" value={form.subject} onChange={handle} required
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 focus:outline-none focus:border-amber-500 transition">
                  <option value="">Select a topic</option>
                  <option>Music Production</option>
                  <option>Live Performance</option>
                  <option>Collaboration</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handle} required rows={6}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 focus:outline-none focus:border-amber-500 transition resize-none"
                  placeholder="Tell us about your project..." />
              </div>
              <button type="submit"
                className="w-full bg-amber-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-amber-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
