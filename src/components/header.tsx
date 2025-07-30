'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

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
import { Input } from './ui/input';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const mainNavLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/news', label: 'News & Events' },
  ];
  
  const secondaryNavLinks = [
    { href: '/faculty', label: 'Faculty' },
    { 
      href: '/colleges', 
      label: 'Colleges',
      dropdown: colleges.map(c => ({ href: `/colleges/${c.slug}`, label: c.name }))
    },
    { href: '/courses', label: 'Courses' },
  ];

  const allLinks = [...mainNavLinks, ...secondaryNavLinks, { href: '/', label: 'Home'}, { href: '/contact', label: 'Contact'}];

  const NavMenu = ({ links, isMobile = false } : { links: typeof mainNavLinks, isMobile?: boolean }) => (
    <>
      {links.map(({ href, label, dropdown }) => (
        <div key={href}>
          {dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  'w-full text-sm font-medium transition-colors hover:text-primary focus:bg-transparent focus:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2',
                  pathname.startsWith(href) ? 'text-primary' : 'text-foreground',
                   isMobile && 'justify-start p-4 text-lg'
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
                isMobile && 'block p-4 text-lg w-full text-left'
              )}
            >
              {label}
            </Link>
          )}
        </div>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 mr-6 shrink-0">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden sm:inline-block font-bold font-headline text-lg whitespace-nowrap">
            Trillium Collegiate Foundation
          </span>
        </Link>
        
        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Trillium</span>
              </Link>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-2">
              <NavMenu links={allLinks} isMobile />
              <div className="pt-4 border-t">
                 <Button asChild className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1">
            {/* Left Nav */}
            <nav className="flex items-center gap-1">
               <NavMenu links={mainNavLinks} />
            </nav>

            {/* Right Nav & Actions */}
            <div className="flex items-center gap-2">
                <nav className="flex items-center gap-1">
                    <NavMenu links={secondaryNavLinks} />
                </nav>
                <div className="flex items-center gap-2 border-l pl-4 ml-2">
                    <div className="relative">
                       <Input placeholder="Search..." className="pr-8 h-9" />
                       <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                    </div>
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
