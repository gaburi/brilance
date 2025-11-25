# Brilliance Landing Page - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git
- Code editor (VS Code recommended)

### Initial Setup

#### 1. Create Project
```bash
# Create Vite + React + TypeScript project
npm create vite@latest brilliance-landing -- --template react-ts

# Navigate to project
cd brilliance-landing

# Install base dependencies
npm install
```

#### 2. Install Required Dependencies
```bash
# Core dependencies
npm install framer-motion swiper react-hook-form react-intersection-observer lucide-react

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Development tools
npm install -D @types/node eslint prettier eslint-config-prettier eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### 3. Project Structure Setup
```bash
# Create folder structure
mkdir -p src/components/{common,layout,sections}
mkdir -p src/{assets,hooks,types,styles,utils}
mkdir -p public/assets/images
```

#### 4. Configuration Files

Copy the following configuration files (see next section)

#### 5. Start Development Server
```bash
npm run dev
```

---

## 📁 Configuration Files

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#00041b',
          purple: '#5c3e94',
          violet: '#8561c9',
          light: '#948bdb',
        },
        accent: {
          gold: '#ffbb00',
        },
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'carousel-vendor': ['swiper'],
        },
      },
    },
  },
})
```

### `.eslintrc.cjs`
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
```

### `.prettierrc`
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### `src/styles/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Inter:wght@100..900&family=Roboto:wght@100;300;400;500;700;900&family=Outfit:wght@100..900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply box-border;
  }
  
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply font-nunito antialiased;
    @apply text-white bg-primary-dark;
  }
}

@layer utilities {
  .glass-effect {
    @apply backdrop-blur-md bg-white/10 border border-white/20;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-violet to-primary-light;
  }
}
```

---

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "preview": "vite preview",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🎯 Development Workflow

### Daily Workflow
1. Pull latest changes (if team)
2. Create feature branch
3. Develop component/feature
4. Test locally
5. Run linter and formatter
6. Commit changes
7. Push and create PR (if team)

### Before Committing
```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Build to check for errors
npm run build
```

---

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] All buttons clickable and functional
- [ ] Forms validate correctly
- [ ] Navigation works smoothly
- [ ] Animations play correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Images load properly
- [ ] Links work correctly
- [ ] No console errors

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] iPad
- [ ] Desktop (various resolutions)

---

## 🚢 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 2: Netlify
```bash
# Build
npm run build

# Deploy dist folder via Netlify UI
# Or use Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/brilliance-landing",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 📚 Key Resources

### Documentation
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/guide/)

### Design Resources
- Figma File: [Link to your Figma]
- Brand Colors: See tailwind.config.js
- Typography: Nunito Sans, Inter, Roboto, Outfit

---

## 🐛 Troubleshooting

### Common Issues

**Issue: "Cannot find module '@/...'"**
```bash
# Make sure vite.config.ts has path alias configured
# Restart dev server after config changes
```

**Issue: Tailwind classes not working**
```bash
# Ensure tailwind.config.js content paths are correct
# Make sure globals.css is imported in main.tsx
```

**Issue: Type errors with images**
```bash
# Create vite-env.d.ts with:
/// <reference types="vite/client" />
```

**Issue: Slow build times**
```bash
# Clear cache and node_modules
rm -rf node_modules dist .vite
npm install
```

---

## 🎨 Component Development Tips

### 1. Start with Types
```typescript
// Always define props interface first
interface ComponentProps {
  title: string;
  subtitle?: string;
  onAction?: () => void;
}
```

### 2. Use Composition
```typescript
// Break down complex components
const FeatureCard = () => (
  <Card>
    <IconBox />
    <Title />
    <Description />
  </Card>
);
```

### 3. Animation Best Practices
```typescript
// Use variants for consistent animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={fadeIn} />
```

### 4. Responsive Design
```typescript
// Use Tailwind breakpoints
className="text-sm md:text-base lg:text-lg"
```

---

## 📈 Performance Checklist

- [ ] Images optimized (WebP format)
- [ ] Lazy loading implemented
- [ ] Code splitting configured
- [ ] Bundle size < 500KB
- [ ] Lighthouse score > 90
- [ ] No unnecessary re-renders
- [ ] Memoization used where needed

---

## ✅ Pre-Launch Checklist

### Technical
- [ ] All TypeScript errors resolved
- [ ] No ESLint warnings
- [ ] Production build successful
- [ ] All images loading
- [ ] Forms working correctly
- [ ] Analytics configured

### Content
- [ ] All text reviewed for typos
- [ ] Images have alt text
- [ ] Links tested
- [ ] Meta tags configured
- [ ] Favicon added

### Performance
- [ ] Lighthouse audit passed
- [ ] Mobile performance tested
- [ ] Page load time acceptable

### SEO
- [ ] Title tags set
- [ ] Meta descriptions added
- [ ] Open Graph tags configured
- [ ] Sitemap created

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review the implementation plan
3. Check component examples in codebase
4. Consult team members

---

**Ready to build something amazing! 🚀**
