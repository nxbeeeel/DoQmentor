import { 
  CreditCard, 
  Globe, 
  Briefcase, 
  Award, 
  Building, 
  FileText, 
  Shield, 
  Users,
  Clock,
  Home,
  LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  Globe,
  Briefcase,
  Award,
  Building,
  FileText,
  Shield,
  Users,
  Clock,
  Home
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || FileText;
};
