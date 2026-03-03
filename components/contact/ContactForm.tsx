'use client';

import { useState } from 'react';

export default function ContactForm() {
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
    );
}
