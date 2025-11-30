import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Viral Growth Toolkit',
  description: 'Learn more about the team behind the Viral Growth Toolkit.',
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Us</h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">We are a team of passionate creators and marketers who want to help you grow your brand.</p>
      </div>
    </div>
  );
}
