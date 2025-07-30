'use client';

import { usePathname } from 'next/navigation';
import { Header } from './header';
import { Footer } from './footer';
import { NewsTicker } from './news-ticker';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="relative flex min-h-screen flex-col bg-secondary">
      {isHomePage && <NewsTicker />}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
