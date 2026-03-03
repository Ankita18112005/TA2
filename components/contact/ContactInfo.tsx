export default function ContactInfo() {
    return (
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
    );
}
