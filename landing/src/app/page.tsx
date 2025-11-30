import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentButton from '@/components/PaymentButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viral Growth Toolkit — Your Ultimate Social Media Companion',
  description: 'Unlock your social media potential with the Viral Growth Toolkit. Get AI-powered prompts, customizable templates, and a comprehensive content calendar to boost your online presence.',
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Viral Growth Toolkit — Plug & Play</h1>
          <p className="text-lg text-gray-600 mb-8">
            Get 20 AI prompts, 10 reel templates, 30-day content calendar, TikTok scripts, and a daily AI content agent. Instant delivery after payment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 my-8">
          <div className="card border border-gray-200 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-md">
            <h3 className="text-2xl font-bold mb-4">Basic Toolkit — $25</h3>
            <ul className="list-disc list-inside mb-6">
              <li>PDF Growth Plan</li>
              <li>20 AI prompts</li>
              <li>10 post templates</li>
            </ul>
            <div className="mt-4">
              <PaymentButton tier="basic" />
            </div>
            <div className="text-sm text-gray-500 mt-4">Instant download link after payment.</div>
          </div>

          <div className="card border border-gray-200 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-md">
            <h3 className="text-2xl font-bold mb-4">Full Bundle — $50</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Everything in Basic</li>
              <li>10 Reel templates (Canva)</li>
              <li>Agent preset + 7-day WhatsApp support</li>
            </ul>
            <div className="mt-4">
              <PaymentButton tier="full" />
            </div>
            <div className="text-sm text-gray-500 mt-4">Includes 7-day WhatsApp group invite link.</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h4 className="text-2xl font-bold mb-4">How it works</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click Pay → complete payment → you’ll be redirected to a download page</li>
            <li>Download the zip (single-use link)</li>
            <li>Join the WhatsApp support group (Full only)</li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
