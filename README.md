# DoQmentor - Premium Consulting Website

A modern, premium Next.js website for DoQmentor international consultancy services, built with SOLID principles and clean architecture.

## 🏗️ Project Structure

```
DoQmentor-Main/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── common/             # Shared components
│   │   │   ├── CustomCursor.tsx
│   │   │   └── Logo.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── OtherServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── constants/              # Application constants
│   │   └── index.ts
│   ├── hooks/                  # Custom React hooks
│   │   └── useCursor.ts
│   ├── services/               # Business logic services
│   │   └── emailService.ts
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts
│   └── utils/                  # Utility functions
│       └── iconMapper.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 SOLID Principles Implementation

### Single Responsibility Principle (SRP)
- Each component has a single, well-defined purpose
- Services handle specific business logic (email functionality)
- Utilities handle specific transformations (icon mapping)

### Open/Closed Principle (OCP)
- Components are open for extension through props
- Service interfaces allow for different implementations
- Icon mapper allows easy addition of new icons

### Liskov Substitution Principle (LSP)
- EmailService interface allows different email implementations
- UI components can be substituted with enhanced versions

### Interface Segregation Principle (ISP)
- Focused interfaces for specific needs (EmailService, CursorState)
- Components receive only the props they need

### Dependency Inversion Principle (DIP)
- Components depend on abstractions (interfaces) not concrete implementations
- Services are injected rather than directly instantiated

## 🚀 Features

- **Premium Design**: Royal blue theme with elegant typography
- **Custom Cursor**: Smooth, animated cursor with hover effects
- **Responsive Layout**: Mobile-first design approach
- **Email Integration**: Contact form with mailto functionality
- **Interactive Elements**: Smooth animations and micro-interactions
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: RequestAnimationFrame for smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)

## 📦 Installation

```bash
npm install
```

## 🏃‍♂️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: Royal Blue (#4169E1)
- **Secondary**: Royal Blue Light (#6B8AFF)
- **Dark**: Royal Blue Dark (#2E4BC6)
- **Text**: Charcoal (#1a1a1a)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Consistent spacing and sizing
- Hover effects and animations
- Accessible color contrasts

## 📧 Contact Integration

The contact form integrates with the default email client using mailto links, sending requests to: `nizarinspire@gmail.com`

## 🔧 Customization

The project is built with modularity in mind:
- Update constants in `src/constants/index.ts`
- Modify services in `src/services/`
- Add new UI components in `src/components/ui/`
- Extend types in `src/types/index.ts`
