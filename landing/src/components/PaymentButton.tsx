'use client';

import Script from 'next/script';

interface AtlosPayOptions {
  merchantId: string;
  orderId: string;
  orderAmount: number;
  onSuccess: (response: unknown) => void;
}

declare const atlos: {
  Pay: (options: AtlosPayOptions) => void;
};

interface PaymentButtonProps {
  tier: 'basic' | 'full';
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ tier }) => {
  const handleSuccess = () => {
    try {
      window.location.href = `/success?tier=${tier}`;
    } catch (err) {
      console.error(err);
      // Handle error
    }
  };

  const handleClick = () => {
    const options: AtlosPayOptions = {
      merchantId: 'DY8MEAIQG6',
      orderId: `${tier}-${Date.now()}`,
      orderAmount: tier === 'basic' ? 250 : 500,
      onSuccess: () => handleSuccess(),
    };
    atlos.Pay(options);
  };

  return (
    <>
      <Script src="https://atlos.io/packages/app/atlos.js" strategy="lazyOnload" />
      <button
        className="atlos-btn bg-black text-white border-none py-3 px-4 rounded-md cursor-pointer text-base"
        onClick={handleClick}
      >
        Pay {tier === 'basic' ? '$25' : '$50 (Full Bundle)'}
      </button>
    </>
  );
};

export default PaymentButton;
