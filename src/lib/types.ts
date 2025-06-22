export interface College {
  id: number;
  slug: string;
  name: string;
  description: string;
  history: string;
  programs: string[];
  campusFacilities: string[];
  achievements: string[];
  image: string;
}

export interface Faculty {
  id: number;
  name: string;
  designation: string;
  department: string;
  college: string;
  qualifications: string;
  bio: string;
  avatar: string;
}

export interface NewsItem {
  id: number;
  text: string;
}
