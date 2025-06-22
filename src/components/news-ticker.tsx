import { newsItems } from '@/lib/news-data';
import { Megaphone } from 'lucide-react';
import Link from 'next/link';

const NewsTicker = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-10">
          <Megaphone className="h-5 w-5 flex-shrink-0" />
          <div className="ticker-wrap flex-grow">
            <div className="ticker-move">
              {newsItems.map(item => (
                <Link key={item.id} href="/news" className="mx-4 text-sm hover:underline">
                  {item.text}
                </Link>
              ))}
              {newsItems.map(item => (
                <Link key={`${item.id}-clone`} href="/news" className="mx-4 text-sm hover:underline">
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
