import { getCollegeBySlug, colleges } from '@/lib/college-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Building2, Trophy, Check } from 'lucide-react';

type CollegePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return colleges.map(college => ({
    slug: college.slug,
  }));
}

export default function CollegePage({ params }: CollegePageProps) {
  const college = getCollegeBySlug(params.slug);

  if (!college) {
    notFound();
  }

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={college.image}
            alt={college.name}
            data-ai-hint="university building"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10 flex items-end p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-headline">{college.name}</h1>
              <p className="text-xl mt-2">{college.description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{college.history}</p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {college.programs.map(program => (
                      <li key={program} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{program}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">Campus Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {college.campusFacilities.map(facility => (
                      <li key={facility} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Trophy className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {college.achievements.map(achievement => (
                    <li key={achievement} className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
