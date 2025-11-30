'use client';

export default function Page() {
  const handleSuccess = (tier: string) => {
    window.location.href = `/success?tier=${tier}`;
  };

  return (
    <main>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Viral Growth Toolkit — Plug & Play</h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Get 20 AI prompts, 10 reel templates, 30-day content calendar, TikTok scripts, and a daily AI content agent. Instant delivery after payment.</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto my-10 p-6">
        <div className="flex gap-4 mb-5 flex-wrap">
          <div className="border rounded-lg p-5 flex-1 min-w-[260px] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Basic Toolkit — $25</h3>
            <ul className="list-disc list-inside mb-3">
              <li>PDF Growth Plan</li>
              <li>20 AI prompts</li>
              <li>10 post templates</li>
            </ul>
            <div className="mt-3">
              <button className="bg-black text-white px-4 py-3 rounded-md text-base cursor-pointer"
                onClick={() =>
                  (window as any).atlos.Pay({
                    merchantId: 'DY8MEAIQG6',
                    orderId: 'basic-1',
                    orderAmount: 250,
                    onSuccess: () => handleSuccess('basic'),
                  })
                }>
                Pay $25
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-3">Instant download link after payment.</div>
          </div>

          <div className="border rounded-lg p-5 flex-1 min-w-[260px] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Full Bundle — $50</h3>
            <ul className="list-disc list-inside mb-3">
              <li>Everything in Basic</li>
              <li>10 Reel templates (Canva)</li>
              <li>Agent preset + 7-day WhatsApp support</li>
            </ul>
            <div className="mt-3">
              <button className="bg-black text-white px-4 py-3 rounded-md text-base cursor-pointer"
                onClick={() =>
                  (window as any).atlos.Pay({
                    merchantId: 'DY8MEAIQG6',
                    orderId: 'full-1',
                    orderAmount: 500,
                    onSuccess: () => handleSuccess('full'),
                  })
                }>
                Pay $50 (Full Bundle)
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-3">Includes 7-day WhatsApp group invite link.</div>
          </div>
        </div>

        <h4 className="text-lg font-semibold">How it works</h4>
        <ol className="list-decimal list-inside">
          <li>Click Pay → complete payment → you’ll be redirected to a download page</li>
          <li>Download the zip (single-use link)</li>
          <li>Join the WhatsApp support group (Full only)</li>
        </ol>

        <div id="msg" className="mt-4 text-green-600"></div>
      </div>
    </main>
  );
}
