import { newsItems } from '@/lib/news-data';
import { Newspaper, LinkIcon } from 'lucide-react';
import Link from 'next/link';

export function NewsTicker() {
  const extendedNewsItems = [...newsItems, ...newsItems];

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="relative flex h-12 items-center overflow-hidden">
          <div className="flex-grow overflow-hidden">
            <div className="whitespace-nowrap ticker-animation flex gap-12 items-center">
              {extendedNewsItems.map((item, index) => (
                <Link href="/news" key={index} className="flex items-center gap-2 text-sm hover:underline">
                  <span>{item.text}</span>
                  <LinkIcon className="w-4 h-4 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
