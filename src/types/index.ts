// Core types and interfaces
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  eyebrow: string;
  imagePosition?: string;
  accent: string;
  accentSoft: string;
  gridClass?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export interface Stat {
  id: string;
  icon: string;
  number: string;
  label: string;
}

export interface ContactForm {
  message: string;
}

export interface EmailService {
  sendEmail: (to: string, subject: string, body: string) => Promise<boolean>;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorState {
  position: CursorPosition;
  isHovering: boolean;
  isClicking: boolean;
  isVisible: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  createdAt: string;
}
