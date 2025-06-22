'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/icons/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/news', label: 'News Summarizer' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={() => isMobile && setIsOpen(false)}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === href ? 'text-primary' : 'text-muted-foreground',
            isMobile && 'block p-4 text-lg'
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Trillium Collegiate Foundation
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6">
          <NavItems />
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex">
            <Link href="/admissions">Apply Now</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Trillium</span>
                </Link>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col mt-4">
                <NavItems isMobile />
                <div className="p-4 mt-4 border-t">
                  <Button asChild className="w-full">
                    <Link href="/admissions" onClick={() => setIsOpen(false)}>Apply Now</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
