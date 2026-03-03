import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-black text-gray-200 leading-none">404</h1>
                <h2 className="text-3xl font-black text-gray-900 mt-4 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <Link
                    href="/"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-bold uppercase tracking-widest transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
