import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Davison -  Portfolio',
  description: 'A professional portfolio website built with Next.js and Vercel.',
  icons: {
    icon: 'favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-8 text-center text-sm border-t dark:border-gray-800">
            © {new Date().getFullYear()} Davison. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}