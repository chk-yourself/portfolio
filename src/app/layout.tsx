import type { Metadata } from 'next';
import { Inter, Inconsolata, Karla, Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  title: 'Christina Kim',
  description:
    'Christina Kim is a user-centric frontend engineer with 7+ years of experience in crafting impactful, accessible, and performant consumer-facing digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inconsolata.variable}`}>
      <body className="bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
