'use client';

import dynamic from 'next/dynamic';

const PaymentButton = dynamic(() => import('@/components/PaymentButton'), {
  ssr: false,
  loading: () => <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse" />,
});

const DynamicPaymentButton = ({ tier }: { tier: 'basic' | 'full' }) => {
  return <PaymentButton tier={tier} />;
};

export default DynamicPaymentButton;
