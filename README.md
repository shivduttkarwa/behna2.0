# MAISON ÉLITE - React + Vite + TypeScript

A sophisticated, international-grade React application built with Vite and TypeScript, featuring a modern e-commerce fashion website.

🌐 **Live Site**: [View on GitHub Pages](https://shivduttkarwa.github.io/behna2.0/)

## 🚀 Features

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Component-based architecture** with separated concerns
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **Responsive design** with mobile-first approach
- **Smooth animations** and transitions
- **Custom cursor** implementation
- **Intersection Observer** for scroll animations

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── CustomCursor/
│   │   ├── Loader/
│   │   └── Navigation/
│   └── sections/         # Page sections
│       ├── Categories/
│       ├── Editorial/
│       ├── Footer/
│       ├── Hero/
│       ├── Instagram/
│       ├── Marquee/
│       ├── Newsletter/
│       ├── Products/
│       ├── Story/
│       └── Testimonials/
├── styles/
│   └── globals.css       # Global styles and CSS variables
├── types/
│   └── index.ts          # TypeScript type definitions
├── utils/
│   └── animations.ts     # Animation utilities
├── App.tsx               # Main App component
├── App.css
├── main.tsx              # Entry point
└── index.css             # Root styles
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Design System

The project uses CSS custom properties (variables) for consistent theming:

- `--noir`: #0A0A0A (Black)
- `--blanc`: #FFFFFF (White)
- `--cream`: #FAF8F5 (Cream)
- `--stone`: #E8E4DD (Stone)
- `--sand`: #D4CFC6 (Sand)
- `--charcoal`: #1A1A1A (Charcoal)
- `--taupe`: #9A9490 (Taupe)
- `--gold`: #C9A962 (Gold)

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 768px - 992px
- Desktop: > 1200px

## 🔧 Technologies

- **React 18.2.0**
- **TypeScript 5.2.2**
- **Vite 5.0.8**
- **ESLint** for code quality

## 📝 Best Practices

1. **Component Organization**: Each component has its own folder with TSX and CSS files
2. **Type Safety**: All components use TypeScript interfaces
3. **CSS Scoping**: Each component has its own CSS file to prevent style conflicts
4. **Reusability**: Common components are separated from section-specific ones
5. **Performance**: Optimized animations and lazy loading where appropriate

## 🚀 Deployment

### GitHub Pages (Automated)

The project is configured with GitHub Actions for automatic deployment:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment**:
   - Every push to `main` branch triggers automatic build and deployment
   - The workflow is located at `.github/workflows/deploy.yml`

3. **Manual Deployment**:
   - You can also trigger deployment manually from the "Actions" tab

### Other Platforms

The project is also ready for deployment on:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

This project is private and proprietary.
