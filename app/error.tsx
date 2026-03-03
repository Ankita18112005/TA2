'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <h2 className="text-5xl font-black text-gray-900 mb-4">Oops!</h2>
                <p className="text-gray-500 mb-8">{error.message || 'Something went wrong.'}</p>
                <button
                    onClick={reset}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-bold uppercase tracking-widest transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
