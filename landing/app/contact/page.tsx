import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Viral Growth Toolkit',
  description: 'Get in touch with the Viral Growth Toolkit team.',
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">You can reach us at contact@viralgrowth.com</p>
      </div>
    </div>
  );
}
