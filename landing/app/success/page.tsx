'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Success() {
  const searchParams = useSearchParams();
  const tier = searchParams.get('tier');
  const downloadUrl = `/assets/toolkit-${tier}.zip`;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Payment Successful!</h1>
      <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Thank you for your purchase. You can now download your toolkit.</p>
      <div className="mt-8">
        <Link href={downloadUrl} className="bg-black text-white px-6 py-3 rounded-md text-lg cursor-pointer">
          Download Now
        </Link>
      </div>
    </div>
  );
}
