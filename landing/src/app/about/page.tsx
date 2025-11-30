import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — The Team Behind the Viral Growth Toolkit',
  description: 'Learn more about the creators of the Viral Growth Toolkit and our mission to empower creators and businesses with the tools they need to succeed on social media.',
};

export default function About() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a team of passionate creators and marketers dedicated to helping you achieve viral growth on social media. Our toolkit is designed to provide you with the resources and strategies you need to succeed.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
