import type { College } from './types';

export const colleges: College[] = [
  {
    id: 1,
    slug: 'summit-college',
    name: 'Summit College of Arts & Sciences',
    description: 'A hub for creativity, critical thinking, and cultural exploration.',
    history: 'Founded in 1952, Summit College has been a pioneer in liberal arts education, fostering an environment where students can explore a wide range of disciplines.',
    programs: ['Fine Arts', 'Literature', 'History', 'Philosophy', 'Social Sciences'],
    campusFacilities: ['Art Studios', 'Modern Library', 'Theater', 'Research Labs'],
    achievements: ['National University Ranking #23', 'Pulitzer Prize-winning alumnus (2019)'],
    image: 'https://placehold.co/800x600.png',
  },
  {
    id: 2,
    slug: 'pinnacle-institute',
    name: 'Pinnacle Institute of Technology',
    description: 'Driving innovation and engineering excellence.',
    history: 'Established in 1985 during the tech boom, Pinnacle Institute has consistently been at the forefront of technological research and development, producing top-tier engineers and innovators.',
    programs: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Data Science'],
    campusFacilities: ['Advanced Robotics Lab', 'Supercomputing Center', 'Innovation Hub'],
    achievements: ['Winner of the National Robotics Competition (2021)', 'Top 10 Engineering Programs in the country'],
    image: 'https://placehold.co/800x600.png',
  },
  {
    id: 3,
    slug: 'apex-school',
    name: 'Apex School of Business',
    description: 'Shaping the future leaders of the global economy.',
    history: 'Apex School of Business was created in 1998 to meet the growing demand for ethical and skilled business professionals. Our curriculum is designed to adapt to the ever-changing business landscape.',
    programs: ['MBA', 'Finance', 'Marketing', 'Entrepreneurship'],
    campusFacilities: ['Stock Trading Simulation Room', 'Leadership Development Center', 'Case Study Halls'],
    achievements: ['Global Business School Ranking #15', 'Highest graduate employment rate in the region'],
    image: 'https://placehold.co/800x600.png',
  },
];

export const getCollegeBySlug = (slug: string): College | undefined => {
  return colleges.find((college) => college.slug === slug);
};
