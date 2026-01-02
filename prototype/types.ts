export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  projects: Project[];
  color: string;
}

export interface TimelineEvent {
  year: string;
  grade: string;
  title: string;
  status: 'past' | 'current' | 'future';
  description: string;
  bullets: string[];
}
