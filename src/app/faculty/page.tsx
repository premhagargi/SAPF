'use client';

import { useState, useMemo } from 'react';
import { faculty } from '@/lib/faculty-data';
import { colleges } from '@/lib/college-data';
import type { Faculty } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const allDepartments = [...new Set(faculty.map(f => f.department))];

export default function FacultyPage() {
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredFaculty = useMemo(() => {
    return faculty.filter(f => {
      const collegeMatch = selectedCollege === 'all' || f.college === selectedCollege;
      const departmentMatch = selectedDepartment === 'all' || f.department === selectedDepartment;
      return collegeMatch && departmentMatch;
    });
  }, [selectedCollege, selectedDepartment]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Faculty Directory</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the distinguished academics and researchers who are the cornerstone of our foundation.
        </p>
      </div>

      <Card className="mb-8 p-6 bg-secondary">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="college-filter" className="block text-sm font-medium mb-1">Filter by College</label>
            <Select value={selectedCollege} onValueChange={setSelectedCollege}>
              <SelectTrigger id="college-filter">
                <SelectValue placeholder="All Colleges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Colleges</SelectItem>
                {colleges.map(c => (
                  <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label htmlFor="department-filter" className="block text-sm font-medium mb-1">Filter by Department</label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger id="department-filter">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {allDepartments.map(d => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map(member => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person photo" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.designation}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{member.college}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.department}</p>
                <p className="text-sm text-muted-foreground border-t pt-2 mt-2">{member.bio}</p>
                <p className="text-xs text-muted-foreground italic mt-2">{member.qualifications}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="md:col-span-3 text-center text-muted-foreground">No faculty members match the current filters.</p>
        )}
      </div>
    </div>
  );
}
