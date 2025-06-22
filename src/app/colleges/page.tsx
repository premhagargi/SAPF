import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { colleges } from '@/lib/college-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CollegesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Colleges</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our family of institutions, each with its own unique character and academic focus.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {colleges.map(college => (
          <Card key={college.id} className="flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-48 w-full">
              <Image 
                src={college.image} 
                alt={college.name} 
                layout="fill" 
                objectFit="cover" 
                data-ai-hint="college building"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{college.name}</CardTitle>
              <CardDescription>{college.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-semibold mb-2">Key Programs:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {college.programs.slice(0, 3).map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href={`/colleges/${college.slug}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
