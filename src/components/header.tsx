'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/icons/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { colleges } from '@/lib/college-data';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: '/', label: t.header.home },
    { href: '/about', label: t.header.about },
    { 
      href: '/colleges', 
      label: t.header.colleges,
      dropdown: colleges.map(c => ({ href: `/colleges/${c.slug}`, label: c.name }))
    },
    { href: '/courses', label: t.header.courses },
    { href: '/news', label: t.header.news },
    { href: '/faculty', label: t.header.faculty },
    { href: '/admissions', label: t.header.admissions },
    { href: '/contact', label: t.header.contact },
  ];

  const NavItems = ({ isMobile = false, className }: { isMobile?: boolean, className?: string }) => (
    <div className={cn("flex items-center gap-x-2", isMobile ? "flex-col items-start gap-y-2" : "flex-row", className)}>
      {navLinks.map(({ href, label, dropdown }) => (
        <div key={href} className={cn(isMobile && "w-full")}>
          {dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  'w-full text-sm font-medium transition-colors hover:text-primary focus:bg-transparent focus:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2 justify-between',
                  pathname.startsWith(href) ? 'text-primary' : 'text-foreground',
                   isMobile && 'justify-start p-4 text-lg'
                )}>
                  {label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/colleges">{t.header.allColleges}</Link>
                </DropdownMenuItem>
                {dropdown.map(item => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={href}
              onClick={() => isMobile && setIsOpen(false)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md',
                pathname === href ? 'text-primary' : 'text-foreground',
                isMobile && 'block p-4 text-lg'
              )}
            >
              {label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden sm:inline-block font-bold font-headline text-lg whitespace-nowrap">
            Trillium Collegiate Foundation
          </span>
        </Link>

        {/* Center Navigation - Desktop Only */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
           <NavItems />
        </nav>

        {/* Right-side CTA & Mobile Menu */}
        <div className="flex items-center gap-2 ml-auto">
          <LanguageSwitcher />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">{t.header.foundation}</span>
                </Link>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col mt-4">
                <NavItems isMobile />
                <div className="p-4 mt-4 border-t">
                  <Button asChild className="w-full">
                    <Link href="/admissions" onClick={() => setIsOpen(false)}>{t.header.applyNow}</Link>
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
