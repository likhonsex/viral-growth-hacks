import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with the Viral Growth Toolkit Team',
  description: 'Have a question or feedback? Contact the Viral Growth Toolkit team. We are here to help you with your social media growth journey.',
};

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We&apos;d love to hear from you.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
