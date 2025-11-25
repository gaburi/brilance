# Brilance Landing Page

A modern, responsive landing page for Brilance - a personal development school focused on unlocking inner strength and transforming obstacles into confidence, freedom, and authenticity.

## 🌟 Features

- **Modern React + TypeScript** - Type-safe component architecture
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Custom CSS animations and transitions
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Performance Focused** - Optimized images and lazy loading
- **Accessibility** - WCAG compliant with keyboard navigation
- **Custom Hooks** - Reusable React hooks for common functionality
- **Utility Functions** - Helper functions for common operations

## 📁 Project Structure

```
brilance-landing/
├── BrilanceLanding.tsx    # Main landing page component
├── types.ts               # TypeScript type definitions
├── hooks.ts               # Custom React hooks
├── utils.ts               # Utility functions
├── constants.ts           # Configuration and data
├── styles.css             # Global styles and animations
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- React 18+
- TypeScript 4.9+

### Installation

1. Install dependencies:

```bash
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
npm install tailwindcss postcss autoprefixer
```

2. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

3. Configure `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c3e94',
        secondary: '#8561c9',
        accent: '#ffbb00',
        'dark-bg': '#00041b',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

4. Add Tailwind directives to your CSS:

```css
@import './styles.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Usage

Import and use the landing page component:

```tsx
import BrilanceLanding from './BrilanceLanding';
import './styles.css';

function App() {
  return <BrilanceLanding />;
}

export default App;
```

## 🧩 Components

### Main Components

- **Navigation** - Fixed navigation bar with smooth scroll links
- **HeroSection** - Hero section with background image and CTA
- **MissionSection** - Mission statement with image and description
- **ProcessSteps** - Four-step process visualization
- **TargetAudienceSection** - Target audience information with icons
- **TestimonialsSection** - Scrolling testimonials carousel
- **DifferentialsSection** - Differentials in circular layout
- **CTASection** - Call-to-action with image
- **Footer** - Footer with newsletter signup and links

### Component Props

Each component accepts props for customization. See `types.ts` for detailed prop definitions.

## 🎨 Styling

### Tailwind CSS Classes

The project uses Tailwind CSS utility classes for styling. Custom classes are defined in `styles.css`.

### Custom Animations

Available animation classes:
- `animate-fade-in`
- `animate-slide-up`
- `animate-slide-down`
- `animate-slide-left`
- `animate-slide-right`
- `animate-zoom-in`
- `animate-pulse`
- `animate-glow`
- `animate-float`
- `animate-scroll`

### CSS Variables

Custom CSS variables in `:root`:
```css
--color-primary: #5c3e94
--color-secondary: #8561c9
--color-accent: #ffbb00
--color-dark-bg: #00041b
--transition-fast: 0.2s ease
--transition-normal: 0.3s ease
--transition-slow: 0.5s ease
```

## 🪝 Custom Hooks

### useSmoothScroll
Smooth scroll to sections:
```tsx
const { scrollToSection } = useSmoothScroll();
scrollToSection('mission');
```

### useIntersectionObserver
Detect element visibility:
```tsx
const ref = useRef(null);
const { isVisible } = useIntersectionObserver(ref);
```

### useForm
Form state management:
```tsx
const { values, errors, handleChange } = useForm({ email: '' });
```

### useWindowSize
Track window dimensions:
```tsx
const { width, height } = useWindowSize();
```

## 🛠️ Utility Functions

### Validation
- `validateEmail(email)` - Validate email format
- `validatePhone(phone)` - Validate phone number

### Formatting
- `formatPhone(phone)` - Format phone number for display
- `truncateText(text, maxLength)` - Truncate text with ellipsis
- `formatDate(date)` - Format date for display
- `formatCurrency(amount)` - Format currency

### Performance
- `debounce(func, wait)` - Debounce function calls
- `throttle(func, limit)` - Throttle function calls

### DOM Utilities
- `scrollToElement(element)` - Smooth scroll to element
- `isInViewport(element)` - Check if element is visible
- `copyToClipboard(text)` - Copy text to clipboard

## 📱 Responsive Design

Breakpoints:
- Mobile: 640px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1280px
- Wide: 1536px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support

## 🔧 Configuration

### Constants

All content and configuration is centralized in `constants.ts`:
- Navigation items
- Section content
- Contact information
- Social links
- API endpoints
- Feature flags

### Customization

1. Update content in `constants.ts`
2. Modify colors in Tailwind config
3. Add custom animations in `styles.css`
4. Create new hooks in `hooks.ts`
5. Add utilities in `utils.ts`

## 🌐 Internationalization

To add i18n support:

1. Install i18next:
```bash
npm install react-i18next i18next
```

2. Create translation files
3. Wrap content with translation hooks
4. Update constants to use translation keys

## 📊 Analytics

To add analytics:

1. Install analytics library (Google Analytics, Mixpanel, etc.)
2. Add tracking code to components
3. Track events on button clicks and form submissions
4. Enable analytics in feature flags

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format for images
- Implement lazy loading
- Add proper alt text
- Use responsive images

### Code Splitting
```tsx
import { lazy, Suspense } from 'react';

const TestimonialsSection = lazy(() => import('./TestimonialsSection'));

<Suspense fallback={<div>Loading...</div>}>
  <TestimonialsSection />
</Suspense>
```

### Memoization
```tsx
const MemoizedComponent = React.memo(Component);
```

## 🧪 Testing

Recommended testing libraries:
- Jest - Unit testing
- React Testing Library - Component testing
- Cypress - E2E testing

Example test:
```tsx
import { render, screen } from '@testing-library/react';
import BrilanceLanding from './BrilanceLanding';

test('renders hero section', () => {
  render(<BrilanceLanding />);
  const heading = screen.getByText(/Sua Força. Sua Essência. Sua Liberdade./i);
  expect(heading).toBeInTheDocument();
});
```

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **AWS S3 + CloudFront** - Static hosting
- **GitHub Pages** - Free hosting

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check image URLs are accessible
   - Verify CORS settings
   - Use proper image formats

2. **Animations not working**
   - Ensure styles.css is imported
   - Check for CSS conflicts
   - Verify browser compatibility

3. **TypeScript errors**
   - Update type definitions
   - Check tsconfig.json settings
   - Install missing @types packages

## 📝 License

This project is private and proprietary to Brilance.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📧 Contact

For questions or support:
- Email: Brilance@gmail.com
- Phone: 920 000 000
- Address: Porto, Boa Vista

---

Built with ❤️ by the Brilance Team
