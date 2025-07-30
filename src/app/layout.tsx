import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AppLayout } from '@/components/app-layout';

export const metadata: Metadata = {
  title: 'Trillium Collegiate Foundation',
  description: 'Nurturing three leading educational institutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          'min-h-screen bg-secondary font-body antialiased'
        )}>
        <AppLayout>
          <main className="flex-1">{children}</main>
        </AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
