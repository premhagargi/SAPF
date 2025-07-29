'use client';

import { CoursesOffered } from '@/components/courses-offered';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function CoursesPage() {
  const { language } = useLanguage();
  const t = translations[language].courses;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{t.pageTitle}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t.pageSubtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <CoursesOffered />
      </div>
    </div>
  );
}
