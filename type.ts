import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface ExperienceItem {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
}
