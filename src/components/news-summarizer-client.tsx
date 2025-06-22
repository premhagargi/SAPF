'use client';

import { useState } from 'react';
import { summarizeNews } from '@/ai/flows/summarize-news';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Separator } from './ui/separator';

export function NewsSummarizerClient() {
  const [newsContent, setNewsContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (!newsContent.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please paste some news content to summarize.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setSummary('');

    try {
      const result = await summarizeNews({ newsContent });
      setSummary(result.summary);
    } catch (error) {
      console.error('Summarization failed:', error);
      toast({
        title: 'Error',
        description: 'Failed to summarize the news. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exampleText = `Trillium Collegiate Foundation announced today the launch of a new inter-college initiative aimed at fostering cross-disciplinary research. The "Innovate Together" program will provide funding and resources for projects that involve students and faculty from at least two of the foundation's institutions: Summit College of Arts & Sciences, Pinnacle Institute of Technology, and Apex School of Business. President Dr. Alistair Finch stated, "This program embodies our core value of community and innovation. By breaking down silos, we believe our students and faculty will create groundbreaking solutions to real-world problems." The first round of funding applications is due next month.`;

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center gap-2">
          <Wand2 className="w-8 h-8 text-primary" />
          <span>AI News Summarizer</span>
        </CardTitle>
        <CardDescription>
          Get a quick overview of any news or event. Paste the content below and let our AI provide a concise summary.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">News Content</h3>
            <Textarea
              placeholder="Paste news article or event description here..."
              value={newsContent}
              onChange={(e) => setNewsContent(e.target.value)}
              rows={15}
              className="resize-none"
              disabled={isLoading}
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={handleSummarize} disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Summarize
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={() => setNewsContent(exampleText)} disabled={isLoading}>
                Load Example
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Summary</h3>
            <Card className="h-full min-h-[300px] bg-secondary flex items-center justify-center p-6">
              {isLoading ? (
                <div className="flex flex-col items-center text-muted-foreground">
                  <Loader2 className="w-8 h-8 animate-spin mb-4" />
                  <p>Generating summary...</p>
                </div>
              ) : summary ? (
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">{summary}</p>
              ) : (
                <p className="text-center text-muted-foreground">
                  The generated summary will appear here.
                </p>
              )}
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
