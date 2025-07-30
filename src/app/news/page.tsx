import { Card, CardHeader } from '@/components/ui/card';
import { newsItems } from '@/lib/news-data';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">News & Events</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay up-to-date with the latest announcements, stories, and events from across the Trillium Collegiate Foundation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full">
                  <Newspaper className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
