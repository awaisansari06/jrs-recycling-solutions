import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: string;
}