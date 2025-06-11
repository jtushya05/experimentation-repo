import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Secura Compliances - POSH Consulting & Workplace Safety Experts',
  description: 'Leading POSH consultancy providing comprehensive workplace safety solutions, corporate training, and board advisory services. Creating safe, inclusive work environments.',
  keywords: 'POSH consulting, workplace safety, sexual harassment prevention, corporate training, board advisory, compliance',
  authors: [{ name: 'Secura Compliances' }],
  openGraph: {
    title: 'Secura Compliances - POSH Consulting & Workplace Safety Experts',
    description: 'Leading POSH consultancy providing comprehensive workplace safety solutions, corporate training, and board advisory services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secura Compliances - POSH Consulting & Workplace Safety Experts',
    description: 'Leading POSH consultancy providing comprehensive workplace safety solutions, corporate training, and board advisory services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}