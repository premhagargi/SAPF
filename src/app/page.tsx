import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Building, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x800.png"
          alt="University Campus"
          data-ai-hint="university campus"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 p-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Trillium Collegiate Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Fostering academic excellence and innovation across our distinguished family of colleges.
          </p>
          <Button asChild size="lg">
            <Link href="/admissions">Apply Now <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Welcome to Trillium</h2>
            <p className="text-muted-foreground text-lg">
              The Trillium Collegiate Foundation is dedicated to providing world-class education and nurturing the next generation of leaders. Explore our colleges, programs, and the vibrant campus life that awaits you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Building className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Our Colleges</CardTitle>
                </div>
                <CardDescription>
                  Discover the unique identity and offerings of each institution within our foundation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/colleges">Explore Colleges <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Admissions</CardTitle>
                </div>
                <CardDescription>
                  Your journey towards a bright future starts here. Find all you need to know to apply.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/admissions">Start Your Application <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Our Faculty</CardTitle>
                </div>
                <CardDescription>
                  Meet the brilliant minds and dedicated mentors who form the backbone of our foundation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/faculty">Meet Our Faculty <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
