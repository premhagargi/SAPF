'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

const courses = {
    undergraduate: [
        { title: 'B.Sc. in Computer Science', college: 'Pinnacle Institute' },
        { title: 'Bachelor of Fine Arts', college: 'Summit College' },
        { title: 'BBA in Finance', college: 'Apex School' },
        { title: 'B.E. in Mechanical Engineering', college: 'Pinnacle Institute' },
        { title: 'B.A. in History', college: 'Summit College' },
        { title: 'BBA in Marketing', college: 'Apex School' },
    ],
    postgraduate: [
        { title: 'M.Sc. in Data Science', college: 'Pinnacle Institute' },
        { title: 'Master of Business Administration (MBA)', college: 'Apex School' },
        { title: 'M.A. in English Literature', college: 'Summit College' },
        { title: 'M.Tech in AI', college: 'Pinnacle Institute' },
    ],
    diploma: [
        { title: 'Diploma in Digital Marketing', college: 'Apex School' },
        { title: 'Diploma in Web Development', college: 'Pinnacle Institute' },
        { title: 'Diploma in Graphic Design', college: 'Summit College' },
    ]
}

export function CoursesOffered() {
    const { language } = useLanguage();
    const t = translations[language].courses;

    return (
        <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="undergraduate">{t.undergraduate}</TabsTrigger>
                <TabsTrigger value="postgraduate">{t.postgraduate}</TabsTrigger>
                <TabsTrigger value="diploma">{t.diploma}</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {courses.undergraduate.map(course => (
                        <Card key={course.title}>
                            <CardHeader>
                                <BookMarked className="w-8 h-8 text-primary mb-2" />
                                <CardTitle>{course.title}</CardTitle>
                                <CardDescription>{course.college}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="postgraduate">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {courses.postgraduate.map(course => (
                        <Card key={course.title}>
                            <CardHeader>
                                <BookMarked className="w-8 h-8 text-primary mb-2" />
                                <CardTitle>{course.title}</CardTitle>
                                <CardDescription>{course.college}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="diploma">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {courses.diploma.map(course => (
                        <Card key={course.title}>
                            <CardHeader>
                                <BookMarked className="w-8 h-8 text-primary mb-2" />
                                <CardTitle>{course.title}</CardTitle>
                                <CardDescription>{course.college}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}
