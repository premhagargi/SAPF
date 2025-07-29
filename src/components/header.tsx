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


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/colleges', 
    label: 'Colleges',
    dropdown: colleges.map(c => ({ href: `/colleges/${c.slug}`, label: c.name }))
  },
  { href: '/courses', label: 'Courses' },
  { href: '/news', label: 'News & Events' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavItems = ({ isMobile = false, className }: { isMobile?: boolean, className?: string }) => (
    <div className={cn(className)}>
      {navLinks.map(({ href, label, dropdown }) => (
        <div key={href}>
          {dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  'text-sm font-medium transition-colors hover:text-primary focus:bg-transparent focus:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2',
                  pathname.startsWith(href) ? 'text-primary' : 'text-foreground',
                   isMobile && 'w-full justify-start p-4 text-lg'
                )}>
                  {label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/colleges">All Colleges</Link>
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
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline text-lg">
            Shree Allamaprabhu Foundation
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center">
          <NavItems className="flex items-center space-x-2" />
        </nav>

        <div className="flex items-center justify-end space-x-4 md:flex-1">
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
            <SheetContent side="left" className="w-[300px]">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">The Foundation</span>
                </Link>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col mt-4">
                <NavItems isMobile className="flex flex-col space-y-2"/>
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
