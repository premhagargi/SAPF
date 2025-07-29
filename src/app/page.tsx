import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, GraduationCap, Star, Users, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CoursesOffered } from '@/components/courses-offered';

const achievements = [
  { icon: Users, value: '15,000+', label: 'Students Enrolled' },
  { icon: GraduationCap, value: '50,000+', label: 'Alumni Network' },
  { icon: Star, value: '30+', label: 'Years of Excellence' },
  { icon: Briefcase, value: '95%', label: 'Placement Rate' },
];

const newsItems = [
  {
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'students graduation',
    title: 'Annual Convocation Ceremony 2024',
    date: 'Oct 25, 2024',
    description: 'Celebrating the achievements of our graduating class across all three institutions.'
  },
  {
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech conference',
    title: 'Tech Fest 2024 at Pinnacle Institute',
    date: 'Nov 12, 2024',
    description: 'A showcase of innovation, featuring guest lectures from industry leaders.'
  },
  {
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'business seminar',
    title: 'Apex School Hosts Entrepreneurship Summit',
    date: 'Nov 18, 2024',
    description: 'Connecting aspiring entrepreneurs with venture capitalists and mentors.'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Alumni, Summit College',
    avatar: 'PS',
    testimonial: 'The foundation provided me with a world-class education that became the bedrock of my career. The supportive faculty and vibrant campus life were unforgettable.'
  },
  {
    name: 'Rahul Verma',
    role: 'Student, Pinnacle Institute',
    avatar: 'RV',
    testimonial: 'The hands-on experience and state-of-the-art labs at Pinnacle are unparalleled. I feel prepared to tackle real-world engineering challenges.'
  },
  {
    name: 'Aisha Khan',
    role: 'Parent',
    avatar: 'AK',
    testimonial: 'Choosing a college from the foundation for my daughter was the best decision. The focus on holistic development is truly commendable.'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x900.png"
          alt="Students walking on a university campus"
          data-ai-hint="university students"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 p-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
            Empowering Education Through Excellence
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Shree Allamaprabhu Foundation – Nurturing Three Leading Institutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/colleges">Explore Colleges</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link href="/admissions">Apply Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Foundation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About the Foundation</h2>
              <p className="text-muted-foreground">
                The Shree Allamaprabhu Foundation is committed to providing transformative educational experiences that empower students to achieve their full potential and contribute positively to society. We believe in fostering a community of learners, thinkers, and innovators who will lead the future.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="modern building" alt="Foundation building" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Colleges */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Our Colleges</h2>
            <p className="text-muted-foreground text-lg">
              Discover our family of institutions, each with a unique character and academic focus, united by a commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-shadow duration-300 group">
              <CardHeader>
                <Image src="https://placehold.co/400x250.png" data-ai-hint="college campus" alt="Summit College" width={400} height={250} className="rounded-t-lg mb-4" />
                <CardTitle className="font-headline">Summit College of Arts & Sciences</CardTitle>
                <CardDescription>A hub for creativity, critical thinking, and cultural exploration.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/colleges/summit-college">Visit Page <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 group">
              <CardHeader>
                <Image src="https://placehold.co/400x250.png" data-ai-hint="technology building" alt="Pinnacle Institute" width={400} height={250} className="rounded-t-lg mb-4" />
                <CardTitle className="font-headline">Pinnacle Institute of Technology</CardTitle>
                <CardDescription>Driving innovation and engineering excellence for the world of tomorrow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/colleges/pinnacle-institute">Visit Page <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 group">
              <CardHeader>
                <Image src="https://placehold.co/400x250.png" data-ai-hint="business school" alt="Apex School" width={400} height={250} className="rounded-t-lg mb-4" />
                <CardTitle className="font-headline">Apex School of Business</CardTitle>
                <CardDescription>Shaping the future leaders and entrepreneurs of the global economy.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/colleges/apex-school">Visit Page <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Courses Offered */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Courses Offered</h2>
            <p className="text-muted-foreground text-lg">
              Explore a wide range of programs designed to equip you with the skills and knowledge for a successful career.
            </p>
          </div>
          <CoursesOffered />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="flex flex-col items-center">
                        <Icon className="w-16 h-16 mb-4" />
                        <p className="text-4xl font-bold">{item.value}</p>
                        <p className="text-lg">{item.label}</p>
                    </div>
                );
            })}
           </div>
        </div>
      </section>
      
      {/* News & Events */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">News & Events</h2>
            <p className="text-muted-foreground text-lg">
              Stay up-to-date with the latest announcements, achievements, and upcoming events from our foundation and colleges.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {newsItems.map(item => (
              <Card key={item.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image src={item.image} alt={item.title} data-ai-hint={item.dataAiHint} width={600} height={400} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
                <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">What Our Community Says</h2>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-center text-center p-8">
                       <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.testimonial}"</p>
                        <div className="flex flex-col items-center">
                            <Avatar className="w-16 h-16 mb-4">
                                <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="person photo" />
                                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-primary">{testimonial.role}</p>
                        </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 md:py-32 bg-secondary">
          <div className="absolute inset-0 bg-primary/90 z-10" />
          <Image src="https://placehold.co/1800x400.png" data-ai-hint="library study" alt="Students studying" layout="fill" objectFit="cover" className="z-0" />
          <div className="container mx-auto px-4 text-center text-primary-foreground z-20 relative">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">Join a community dedicated to excellence and innovation. Your future starts here.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
                    <Link href="/admissions">Apply Now <ArrowRight className="ml-2" /></Link>
                 </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
          </div>
      </section>
    </div>
  );
}
