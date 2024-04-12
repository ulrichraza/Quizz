import { Metadata } from 'next';
import './globals.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Quizz`,
  description: `Quizz app`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full min-h-screen  flex justify-center items-center relative">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
