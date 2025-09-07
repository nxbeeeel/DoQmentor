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
  Clock
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || FileText;
};
