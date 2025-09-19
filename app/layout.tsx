import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajan K K Woodworks - 40 Years of Forest-Inspired Craftsmanship',
  description: 'Experience four decades of masterful woodworking in Kerala. Custom furniture, traditional doors, and premium wood craftsmanship inspired by nature.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
