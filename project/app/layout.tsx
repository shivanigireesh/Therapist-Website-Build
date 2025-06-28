import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Clinical Psychologist | Los Angeles Therapy',
  description: 'Licensed Clinical Psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery. Compassionate, evidence-based therapy with Dr. Serena Blake, PsyD.',
  keywords: 'therapist Los Angeles, clinical psychologist, anxiety therapy, relationship counseling, trauma recovery, Dr. Serena Blake',
  openGraph: {
    title: 'Dr. Serena Blake - Clinical Psychologist',
    description: 'Compassionate, evidence-based therapy in Los Angeles. Specializing in anxiety, relationships, and trauma recovery.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}