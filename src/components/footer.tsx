import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './icons/logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/colleges', label: 'Colleges' },
    { href: '/courses', label: 'Courses' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/contact', label: 'Contact' },
    { href: '/news', label: 'News & Events' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <p className="text-lg font-bold font-headline">Trillium Collegiate Foundation</p>
            </Link>
             <p className="text-sm text-muted-foreground">Nurturing three leading institutions for a brighter future.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
                <p>123 University Ave, Toronto, ON, Canada</p>
                <p>Email: info@trillium.edu</p>
                <p>Phone: (123) 456-7890</p>
            </div>
             <div className="flex gap-4 mt-4">
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <Link key={social.label} href={social.href} aria-label={social.label}>
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter Signup</h3>
            <p className="text-sm text-muted-foreground mb-2">Stay updated with our latest news and events.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-background"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Trillium Collegiate Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
