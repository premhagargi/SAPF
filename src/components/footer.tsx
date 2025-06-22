import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './icons/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <p className="text-lg font-bold font-headline">Trillium Collegiate Foundation</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Trillium Collegiate Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
