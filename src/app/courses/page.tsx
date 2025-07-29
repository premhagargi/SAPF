import { CoursesOffered } from '@/components/courses-offered';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Courses</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore a wide range of programs designed to equip you with the skills and knowledge for a successful career.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <CoursesOffered />
      </div>
    </div>
  );
}
