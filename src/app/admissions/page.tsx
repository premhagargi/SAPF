import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, FileText, Calendar, Target, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is the application deadline?',
    answer: 'The application deadline for the Fall 2025 semester is January 15, 2025. We recommend applying early.',
  },
  {
    question: 'Are scholarships available?',
    answer: 'Yes, we offer a variety of merit-based and need-based scholarships. All applicants are automatically considered for merit scholarships. For need-based aid, please complete the FAFSA form.',
  },
  {
    question: 'Can I apply to more than one college within the foundation?',
    answer: 'You can indicate your primary college of interest on the application and may also select a second-choice institution.',
  },
  {
    question: 'What are the international student requirements?',
    answer: 'International students must submit TOEFL or IELTS scores, a financial statement, and a translated copy of their academic transcripts. Please visit the international admissions section for more details.',
  },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Admissions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Begin your journey with the Trillium Collegiate Foundation. Here's everything you need to know to join us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card>
                <CardHeader className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">High school diploma or equivalent, SAT/ACT scores, and a personal essay.</CardContent>
            </Card>
            <Card>
                <CardHeader className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Early Action: Nov 1. Regular Decision: Jan 15.
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Documents</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Transcripts, recommendation letters, and test scores.
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex items-center gap-4">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">FAQs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Find answers to common questions about our process below.</CardContent>
            </Card>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold font-headline mb-6">Application Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">1</div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Submit Your Application</h3>
                  <p className="text-muted-foreground">Complete the Common Application online. Ensure all required fields are filled out and your personal essay is attached.</p>
                </div>
              </div>
              <div className="flex gap-6">
                 <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">2</div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Provide Supporting Documents</h3>
                  <p className="text-muted-foreground">Request official transcripts from your high school and have your teachers or counselors submit letters of recommendation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                 <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Receive Admission Decision</h3>
                  <p className="text-muted-foreground">Decisions are released in mid-December for Early Action and late March for Regular Decision. You will be notified via email and our applicant portal.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="#">Start Your Application <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
