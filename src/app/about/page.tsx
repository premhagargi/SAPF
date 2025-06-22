import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Eye, Gem } from 'lucide-react';
import Image from 'next/image';

const leadershipTeam = [
  { name: 'Dr. Alistair Finch', role: 'President & CEO', avatar: 'AF', image: 'https://placehold.co/100x100.png' },
  { name: 'Dr. Eleanor Vance', role: 'Provost', avatar: 'EV', image: 'https://placehold.co/100x100.png' },
  { name: 'Mr. David Chen', role: 'Chief Financial Officer', avatar: 'DC', image: 'https://placehold.co/100x100.png' },
  { name: 'Ms. Maria Rodriguez', role: 'Chief Operating Officer', avatar: 'MR', image: 'https://placehold.co/100x100.png' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About Trillium</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Learn about our unwavering commitment to shaping a brighter, more educated future.
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden mb-16 shadow-lg">
        <Image src="https://placehold.co/1200x500.png" data-ai-hint="library books" alt="Library" width={1200} height={500} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our History</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 1952, the Trillium Collegiate Foundation began with a single institution, Summit College, with the vision of creating a network of specialized colleges that could share resources, expertise, and a common commitment to excellence. Over the decades, we have grown to include the Pinnacle Institute of Technology and the Apex School of Business, each a leader in its respective field. Our history is a testament to our enduring values and our ability to adapt and innovate in the ever-evolving landscape of higher education.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>To provide transformative educational experiences that empower students to achieve their full potential and contribute positively to society.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Gem className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>To be a globally recognized leader in higher education, known for our innovative programs, impactful research, and diverse community of scholars.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Excellence', 'Integrity', 'Innovation', 'Community', 'Diversity', 'Impact'].map(value => (
            <div key={value} className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="font-semibold text-lg">{value}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {leadershipTeam.map(member => (
            <Card key={member.name} className="text-center p-6">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.avatar}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
