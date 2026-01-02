export interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  date: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface TimelineEvent {
  year: string;
  grade: string;
  title: string;
  desc: string;
  bullets: string[];
  current?: boolean;
}

export interface Activity {
  id: number;
  title: string;
  desc: string;
  image: string;
  size: string;
}

export interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}
