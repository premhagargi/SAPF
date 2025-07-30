'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
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

const NavItems = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '#', label: 'Research' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/news', label: 'News' },
    { href: '#', label: 'Community' },
    { 
      href: '/colleges', 
      label: 'Colleges',
      dropdown: colleges.map(c => ({ href: `/colleges/${c.slug}`, label: c.name })),
    },
    { href: '/faculty', label: 'Departments' },
  ];

  return (
    <>
      {navLinks.map(({ href, label, dropdown }) =>
        dropdown ? (
          <DropdownMenu key={href}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname.startsWith(href) ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/colleges" onClick={onLinkClick}>All Colleges</Link>
              </DropdownMenuItem>
              {dropdown.map(item => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} onClick={onLinkClick}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={href}
            href={href}
            onClick={onLinkClick}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === href ? 'text-primary' : 'text-foreground/80'
            )}
          >
            {label}
          </Link>
        )
      )}
    </>
  );
};


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
             <span className="font-bold sm:inline-block font-headline text-lg">
                Trillium
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <NavItems />
        </nav>
        
        <div className="hidden md:flex items-center justify-end space-x-4">
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <Button>Login</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
             <div className="p-4 border-b">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Trillium Collegiate</span>
                </Link>
             </div>
            <div className="p-4 flex flex-col space-y-4">
                <NavItems onLinkClick={() => setIsOpen(false)} />
            </div>
            <div className="p-4 absolute bottom-0 w-full">
                 <Button asChild className="w-full">
                  <Link href="#" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
