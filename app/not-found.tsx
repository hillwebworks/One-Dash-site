import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          <span className="text-[#DC143C]">404</span>
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

