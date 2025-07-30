
'use client';

import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NewsTicker } from '@/components/news-ticker';

// Note: Metadata is not dynamically updated with this client component approach.
// export const metadata: Metadata = {
//   title: 'Trillium Collegiate Foundation',
//   description: 'Nurturing three leading educational institutions.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Trillium Collegiate Foundation</title>
        <meta name="description" content="Nurturing three leading educational institutions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}>
        <div className="relative flex min-h-screen flex-col">
          {isHomePage && <NewsTicker />}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
