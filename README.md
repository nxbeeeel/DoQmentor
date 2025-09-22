# DoQmentor - Premium Consulting Website

A modern, premium Next.js website for DoQmentor international consultancy services, built with clean architecture and optimized performance.

## 🏗️ Clean Project Structure

```
doqmentor-new/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   └── page.tsx            # Home page with optimized imports
│   ├── components/             # React components (no React imports needed)
│   │   ├── index.ts            # Centralized component exports
│   │   ├── common/             # Shared components
│   │   │   ├── CustomCursor.tsx # Premium cursor with animations
│   │   │   └── Logo.tsx        # Enhanced DQ logo with SVG
│   │   ├── sections/           # Page sections
│   │   │   ├── HeroSection.tsx # Hero with glassmorphism effects
│   │   │   ├── ServicesSection.tsx # 9 service cards
│   │   │   ├── OtherServicesSection.tsx # Contact form
│   │   │   ├── TestimonialsSection.tsx # Testimonials carousel
│   │   │   ├── AboutSection.tsx # Company info & stats
│   │   │   └── CTASection.tsx  # Call-to-action section
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx      # Animated button component
│   │       ├── Card.tsx        # Card wrapper with hover effects
│   │       ├── Section.tsx     # Section wrapper component
│   │       └── ThemeToggle.tsx # Dark/light theme toggle
│   ├── constants/              # Application constants
│   │   └── index.ts           # Services, testimonials, company info
│   ├── contexts/              # React contexts
│   │   └── ThemeContext.tsx   # Theme management context
│   ├── hooks/                 # Custom React hooks
│   │   └── useCursor.ts       # Custom cursor hook
│   ├── services/              # Business logic services
│   │   └── emailService.ts    # Email service implementation
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts          # All interface definitions
│   └── utils/                 # Utility functions
│       └── iconMapper.ts     # Lucide icon mapping utility
├── package.json               # Dependencies & scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── netlify.toml            # Deployment configuration
```

## ✨ Code Cleanup & Optimization

### Recent Improvements
- **Removed duplicate React imports**: Leveraging Next.js 14's automatic JSX runtime
- **Centralized component exports**: Single `components/index.ts` for cleaner imports
- **Optimized import statements**: Reduced bundle size and improved tree-shaking
- **Enhanced TypeScript configuration**: Better type checking and performance
- **Cleaned file structure**: Removed duplicate directories and unused files
- **Improved Next.js configuration**: Added React Strict Mode and SWC minification

### Performance Optimizations
- **Automatic JSX runtime**: No need for explicit React imports
- **Tree-shaking optimization**: Better dead code elimination
- **Centralized exports**: Reduced import complexity
- **Clean component structure**: Improved maintainability and readability

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
