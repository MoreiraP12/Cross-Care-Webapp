import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'Cross-Care Dataset',
  description:
    'The Cross-Care Dataset provides comprehensive insights into co-occurrence patterns of various diseases. This dataset is invaluable for researchers and healthcare professionals seeking to understand complex disease interactions and trends.',
  keywords: 'healthcare, dataset, disease co-occurrence, medical research, disease trends'
  };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
