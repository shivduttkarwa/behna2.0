# Quick Start Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure Overview

```
Behna2.0/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   ├── CustomCursor/    # Custom cursor implementation
│   │   │   ├── Loader/          # Page loader
│   │   │   └── Navigation/      # Main navigation
│   │   └── sections/            # Page sections
│   │       ├── Categories/      # Category showcase
│   │       ├── Editorial/       # Editorial section
│   │       ├── Footer/          # Footer component
│   │       ├── Hero/            # Hero section
│   │       ├── Instagram/       # Instagram feed
│   │       ├── Marquee/         # Scrolling marquee
│   │       ├── Newsletter/      # Newsletter signup
│   │       ├── Products/        # Products showcase
│   │       ├── Story/           # Brand story
│   │       └── Testimonials/   # Customer testimonials
│   ├── styles/
│   │   └── globals.css          # Global styles & CSS variables
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── utils/
│   │   └── animations.ts        # Animation utilities
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Root styles
├── index.html                   # HTML template
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite configuration
└── README.md                    # Project documentation
```

## Component Architecture

Each component follows this structure:
- `ComponentName.tsx` - React component with TypeScript
- `ComponentName.css` - Scoped styles for the component

## Key Features

✅ **TypeScript** - Full type safety
✅ **Component-based** - Modular and maintainable
✅ **CSS Variables** - Centralized theming
✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Animations** - Intersection Observer for scroll animations
✅ **Custom Cursor** - Interactive cursor effects
✅ **Performance Optimized** - Vite for fast builds

## Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Notes

- All original HTML sections have been converted to React components
- Each component is self-contained with its own CSS file
- TypeScript types are defined in `src/types/index.ts`
- Global styles and CSS variables are in `src/styles/globals.css`
