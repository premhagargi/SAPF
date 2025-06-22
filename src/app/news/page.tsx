import { NewsSummarizerClient } from '@/components/news-summarizer-client';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">News & Events Summarizer</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay informed efficiently. Our AI-powered tool gives you a quick overview of the latest happenings.
        </p>
      </div>
      <NewsSummarizerClient />
    </div>
  );
}
