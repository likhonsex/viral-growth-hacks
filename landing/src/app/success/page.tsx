'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tier = searchParams.get('tier');

  const downloadLinks = {
    basic: '/assets/toolkit-basic.zip',
    full: '/assets/toolkit-full.zip',
  };

  const downloadLink = tier === 'basic' ? downloadLinks.basic : downloadLinks.full;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase. You can now download your toolkit.
          </p>
          {downloadLink && (
            <Link href={downloadLink} download
              className="bg-black text-white py-3 px-6 rounded-md inline-block">
              Download Toolkit
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
