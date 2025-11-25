# Brilliance Landing Page - Current Issues & Tasks

**Repository:** https://github.com/gaburi/brilance.git
**Last Updated:** 2025-11-17
**Project Status:** 80% Complete - Production Ready Infrastructure
**Build Status:** ✅ Passing

---

## 🎯 Project Completion Status

### ✅ Completed (80%)
- [x] **Project Infrastructure** - 100% Complete
- [x] **Component Architecture** - 100% Complete (14 components)
- [x] **TypeScript Setup** - 100% Complete (strict mode, 0 errors)
- [x] **Error Tracking** - 100% Complete (Sentry integration)
- [x] **Build System** - 100% Complete (Vite + code splitting)
- [x] **Animations** - 95% Complete (Framer Motion throughout)
- [x] **Responsive Design** - 85% Complete

### 🔄 In Progress (20%)
- [ ] **Image Optimization** - 0% (HIGH PRIORITY)
- [ ] **Final Polish** - 40%
- [ ] **Testing** - 0%
- [ ] **Deployment** - 0%

---

## 🔴 HIGH PRIORITY ISSUES

### 1. Image Assets Not Optimized (CRITICAL)
**Status:** ❌ Blocking Production
**Priority:** P0 - Must Fix Before Launch
**Estimated Time:** 4-6 hours

**Problem:**
- Currently using 65+ Figma API URLs for images
- Images are NOT optimized for web performance
- No local asset management
- Slow page load times due to external image requests
- Figma URLs may expire or become unavailable

**Impact:**
- Poor page load performance
- Potential broken images if Figma links change
- Not production-ready

**Solution Required:**
1. Download all 65+ images from Figma design files
2. Convert to WebP format (80-90% smaller than PNG/JPG)
3. Create multiple sizes for responsive images (mobile, tablet, desktop)
4. Place in `public/assets/images/` directory
5. Create `src/assets/images.ts` constants file with typed image paths
6. Update all component references from Figma URLs to local paths
7. Implement lazy loading for images
8. Add fallback images for error states

**Files to Update:**
- [src/constants/index.ts](src/constants/index.ts) - Update all image URLs
- [src/components/sections/HeroSection.tsx](src/components/sections/HeroSection.tsx)
- [src/components/sections/MissionSection.tsx](src/components/sections/MissionSection.tsx)
- [src/components/sections/ForWhomSection.tsx](src/components/sections/ForWhomSection.tsx)
- [src/components/sections/DifferentialsSection.tsx](src/components/sections/DifferentialsSection.tsx)
- [src/components/sections/CTASection.tsx](src/components/sections/CTASection.tsx)
- [src/components/layout/Navigation.tsx](src/components/layout/Navigation.tsx) - Logo
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) - Logo

**Tools Recommended:**
- `sharp` or `squoosh` for image optimization
- `imagemin` for batch processing
- Responsive image generation script

**Example Implementation:**
```typescript
// src/assets/images.ts
export const IMAGES = {
  logo: {
    default: '/assets/images/logo.webp',
    mobile: '/assets/images/logo-mobile.webp',
    alt: 'Escola Brilance Logo',
  },
  hero: {
    background: '/assets/images/hero-bg.webp',
    alt: 'Cosmic space background',
  },
  // ... more images
} as const;
```

---

### 2. Environment Variables Not Configured
**Status:** ⚠️ Partially Complete
**Priority:** P1 - Required for Deployment
**Estimated Time:** 30 minutes

**Problem:**
- `.env.example` exists but `.env.local` may not be configured
- Sentry DSN and auth tokens need to be set
- Production environment variables not documented

**Required Environment Variables:**
```env
# Sentry Configuration (REQUIRED for error tracking)
VITE_SENTRY_DSN=https://your-dsn@sentry.io/project-id
VITE_SENTRY_ORG=your-org-slug
VITE_SENTRY_PROJECT=brilance
SENTRY_AUTH_TOKEN=sntryu_your_auth_token_here
VITE_APP_VERSION=1.0.0
VITE_SENTRY_DEBUG=false

# Environment
VITE_ENV=production
```

**Action Items:**
1. Copy `.env.example` to `.env.local`
2. Fill in Sentry credentials from Sentry dashboard
3. Create production `.env.production` file
4. Document environment setup in README
5. Add environment validation on app startup

**Security Note:**
- ✅ `.env` and `.env.local` already in `.gitignore`
- ⚠️ Never commit actual credentials to repository
- ⚠️ Use GitHub Secrets for CI/CD deployment

---

### 3. Sentry Test Button in Production Code
**Status:** ⚠️ Must Remove
**Priority:** P1 - Before Production Deploy
**Estimated Time:** 5 minutes

**Problem:**
- `SentryTestButton.tsx` is currently imported in production build
- Test component should not be exposed to end users
- Creates unnecessary bundle size

**Files to Modify:**
- Remove import from [src/App.tsx](src/App.tsx)
- Keep file for development/testing purposes
- Add conditional rendering based on environment

**Solution:**
```typescript
// src/App.tsx
{import.meta.env.DEV && <SentryTestButton />}
```

---

## 🟡 MEDIUM PRIORITY ISSUES

### 4. Newsletter Form Not Connected to Backend
**Status:** ⚠️ Frontend Only
**Priority:** P2 - Feature Incomplete
**Estimated Time:** 2-3 hours

**Problem:**
- Footer newsletter form has validation but no API integration
- Form submissions are not saved anywhere
- No email service connected (Mailchimp, SendGrid, etc.)

**Current State:**
- ✅ Form validation working (react-hook-form)
- ✅ Email format validation
- ✅ Success/error UI states
- ❌ No actual submission handling
- ❌ No email service integration

**Solution Options:**

**Option A: Email Service Integration (Recommended)**
1. Choose email service (Mailchimp, ConvertKit, SendGrid, Brevo)
2. Create API route handler (`src/api/newsletter.ts`)
3. Add environment variable for API key
4. Implement form submission handler
5. Add rate limiting and spam protection
6. Test subscription flow end-to-end

**Option B: Simple Email Notification**
1. Use EmailJS or similar free service
2. Send email notifications to admin address
3. Manually add subscribers to email list

**Option C: Database Storage**
1. Set up backend (Supabase, Firebase, etc.)
2. Store email addresses in database
3. Export for email campaigns later

**Files to Update:**
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)
- Create `src/api/newsletter.ts` or similar
- Update environment variables

---

### 5. No Form Validation for Contact/CTA Sections
**Status:** ⚠️ Missing Functionality
**Priority:** P2 - User Experience
**Estimated Time:** 1-2 hours

**Problem:**
- CTA buttons don't have associated forms
- No contact form implemented
- User cannot actually "começar agora" (start now)

**Missing Features:**
- Contact form modal or page
- Lead capture form
- Form submission handling
- Thank you page/modal after submission

**Recommended Implementation:**
1. Create modal component for contact form
2. Add form fields (name, email, phone, message)
3. Integrate with form backend (same as newsletter)
4. Add success confirmation modal
5. Track form submissions in Sentry

**Files to Create:**
- `src/components/common/Modal.tsx`
- `src/components/forms/ContactForm.tsx`
- `src/hooks/useModal.ts`

---

### 6. Missing Accessibility Features
**Status:** ⚠️ Partial Compliance
**Priority:** P2 - Accessibility
**Estimated Time:** 3-4 hours

**Current Accessibility Issues:**
- ❌ No skip-to-content link
- ❌ Focus management not implemented for modals
- ❌ Keyboard navigation needs improvement
- ❌ ARIA labels missing on some interactive elements
- ❌ Color contrast not verified (WCAG AA/AAA)
- ⚠️ Mobile menu focus trap not implemented

**Required Improvements:**
1. Add skip navigation link
2. Implement focus trap in mobile menu
3. Add ARIA labels to all interactive elements
4. Test keyboard navigation (Tab, Enter, Esc)
5. Run accessibility audit (axe DevTools, Lighthouse)
6. Verify color contrast ratios
7. Add screen reader testing
8. Implement focus indicators for all interactive elements

**Files to Update:**
- [src/components/layout/Navigation.tsx](src/components/layout/Navigation.tsx) - Focus trap
- All interactive components - ARIA labels
- [src/styles/globals.css](src/styles/globals.css) - Focus styles

---

### 7. No Loading States for Lazy-Loaded Components
**Status:** ⚠️ Poor UX
**Priority:** P2 - User Experience
**Estimated Time:** 2 hours

**Problem:**
- Lazy-loaded sections show generic spinner
- No skeleton screens for better perceived performance
- Sudden content appearance can be jarring

**Current Implementation:**
```typescript
<Suspense fallback={<div className="spinner">Loading...</div>}>
  <LazyComponent />
</Suspense>
```

**Recommended Improvement:**
Create skeleton screens that match each section's layout:
- `SectionSkeleton.tsx` - Generic section skeleton
- `HeroSkeleton.tsx` - Hero-specific skeleton
- `CardSkeleton.tsx` - Card grid skeleton
- etc.

**Files to Create:**
- `src/components/common/skeletons/`
- Update [src/components/BrilanceLanding.tsx](src/components/BrilanceLanding.tsx)

---

### 8. Performance Optimization Opportunities
**Status:** ⚠️ Can Be Improved
**Priority:** P2 - Performance
**Estimated Time:** 2-3 hours

**Current Performance:**
- Bundle size: 199 KB gzipped (acceptable but can improve)
- Initial load includes all Sentry code (260 KB uncompressed)
- No image optimization (see Issue #1)
- No CDN configuration

**Optimization Opportunities:**

1. **Lazy Load Sentry in Production**
   ```typescript
   // Load Sentry only when needed
   if (import.meta.env.PROD) {
     import('./utils/sentry').then(({ initSentry }) => initSentry());
   }
   ```

2. **Reduce Sentry Bundle Size**
   - Use `@sentry/browser` instead of `@sentry/react` if not using all features
   - Disable session replay in production (or reduce sample rate)
   - Tree-shake unused Sentry integrations

3. **Font Optimization**
   - Self-host Google Fonts instead of CDN
   - Use font-display: swap
   - Subset fonts to Portuguese characters only

4. **Code Splitting Improvements**
   - Split animation vendor chunk further
   - Lazy load Framer Motion for below-fold animations
   - Defer non-critical CSS

5. **Add Performance Monitoring**
   - Use Lighthouse CI in GitHub Actions
   - Set performance budgets
   - Monitor Core Web Vitals

**Target Metrics:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Total Bundle: < 150 KB gzipped

---

## 🟢 LOW PRIORITY ISSUES

### 9. No Unit or Integration Tests
**Status:** ⚠️ Zero Test Coverage
**Priority:** P3 - Quality Assurance
**Estimated Time:** 8-10 hours

**Current State:**
- No test framework configured
- No component tests
- No integration tests
- No E2E tests

**Recommended Testing Stack:**
- **Unit Tests:** Vitest + Testing Library
- **E2E Tests:** Playwright or Cypress
- **Visual Regression:** Percy or Chromatic

**Test Coverage Goals:**
- Critical paths: 80%+
- Component library: 90%+
- Utilities/hooks: 100%

**Action Items:**
1. Install Vitest and @testing-library/react
2. Configure test setup files
3. Write tests for common components (Button, Card, etc.)
4. Write tests for hooks (useSmoothScroll, useForm, etc.)
5. Write integration tests for form submissions
6. Set up CI/CD test pipeline
7. Add E2E tests for critical user journeys

---

### 10. Missing SEO Optimization
**Status:** ⚠️ Basic SEO Only
**Priority:** P3 - Marketing
**Estimated Time:** 2-3 hours

**Current SEO:**
- ✅ Meta tags in index.html
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ❌ No structured data (JSON-LD)
- ❌ No sitemap.xml
- ❌ No robots.txt
- ❌ No canonical URLs
- ❌ No meta descriptions per section

**SEO Improvements Needed:**

1. **Structured Data (Schema.org)**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "EducationalOrganization",
     "name": "Escola Brilance",
     "description": "...",
     "url": "https://brilance.com"
   }
   ```

2. **Create sitemap.xml**
3. **Create robots.txt**
4. **Add meta descriptions** for each section
5. **Implement dynamic meta tags** with React Helmet
6. **Add alt text** to all images (blocked by Issue #1)
7. **Optimize heading hierarchy** (H1, H2, H3)

**Files to Create:**
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/common/SEOHead.tsx`

---

### 11. No Analytics Integration
**Status:** ❌ Not Implemented
**Priority:** P3 - Marketing
**Estimated Time:** 1-2 hours

**Problem:**
- No visitor tracking
- No conversion tracking
- No user behavior insights
- Cannot measure marketing effectiveness

**Recommended Analytics:**
1. **Google Analytics 4** - Free, comprehensive
2. **Meta Pixel** - For Facebook/Instagram ads
3. **Hotjar** - Heatmaps and session recordings
4. **Plausible** - Privacy-friendly alternative

**Implementation:**
```typescript
// src/utils/analytics.ts
export const trackEvent = (eventName: string, data?: object) => {
  if (window.gtag) {
    window.gtag('event', eventName, data);
  }
  // Also send to Sentry for correlation
  Sentry.addBreadcrumb({ message: eventName, data });
};
```

**Events to Track:**
- Page views
- Button clicks (CTA, Learn More)
- Form submissions (Newsletter, Contact)
- Scroll depth
- Time on page
- External link clicks

---

### 12. No 404 Error Page
**Status:** ❌ Not Implemented
**Priority:** P3 - UX
**Estimated Time:** 1 hour

**Problem:**
- No custom 404 page
- Users see generic browser error

**Solution:**
Create `src/pages/NotFound.tsx` with:
- Friendly error message in Portuguese
- Navigation back to home
- Search functionality (optional)
- Helpful links

---

### 13. Browser Compatibility Not Tested
**Status:** ⚠️ Unknown
**Priority:** P3 - QA
**Estimated Time:** 2-3 hours

**Browsers to Test:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Potential Issues:**
- Framer Motion animations on older browsers
- CSS backdrop-filter support (glassmorphism)
- ES2020 features compatibility
- Touch interactions on mobile

**Action Items:**
1. Test on BrowserStack or similar
2. Add polyfills if needed
3. Add graceful degradation for unsupported features
4. Update browserslist in package.json

---

### 14. No Deployment Configuration
**Status:** ❌ Not Configured
**Priority:** P3 - DevOps
**Estimated Time:** 1-2 hours

**Missing Configurations:**
- No Vercel/Netlify config
- No CI/CD pipeline
- No deployment scripts
- No environment-specific builds

**Recommended Platform:** Vercel (optimal for Vite/React)

**Deployment Checklist:**
1. Create `vercel.json` configuration
2. Set up environment variables in Vercel dashboard
3. Configure production build settings
4. Set up custom domain
5. Enable automatic deployments from GitHub
6. Configure preview deployments for PRs
7. Set up deployment notifications

**Files to Create:**
- `vercel.json` or `netlify.toml`
- `.github/workflows/deploy.yml` (optional CI/CD)

---

## 📊 Issue Summary

| Priority | Count | Status |
|----------|-------|--------|
| P0 (Critical) | 1 | 🔴 Blocking |
| P1 (High) | 2 | 🟡 Important |
| P2 (Medium) | 6 | 🟡 Should Fix |
| P3 (Low) | 6 | 🟢 Nice to Have |
| **Total** | **15** | **20% Remaining** |

---

## 🎯 Recommended Action Plan

### Phase 1: Pre-Launch (Required) - Est. 8-10 hours
1. ✅ Fix image optimization (Issue #1) - 6 hours
2. ✅ Configure environment variables (Issue #2) - 30 min
3. ✅ Remove Sentry test button (Issue #3) - 5 min
4. ✅ Implement newsletter backend (Issue #4) - 2 hours
5. ✅ Add contact form (Issue #5) - 2 hours

### Phase 2: Production Ready - Est. 6-8 hours
6. ✅ Improve accessibility (Issue #6) - 4 hours
7. ✅ Add skeleton screens (Issue #7) - 2 hours
8. ✅ Optimize performance (Issue #8) - 3 hours
9. ✅ Deploy to Vercel (Issue #14) - 1 hour

### Phase 3: Post-Launch - Est. 8-10 hours
10. Add SEO optimization (Issue #10) - 3 hours
11. Integrate analytics (Issue #11) - 2 hours
12. Create 404 page (Issue #12) - 1 hour
13. Browser testing (Issue #13) - 3 hours
14. Write tests (Issue #9) - Can be ongoing

---

## 🔧 Quick Wins (< 1 hour each)

These can be tackled immediately:

1. ✅ Remove Sentry test button (5 min)
2. ✅ Add robots.txt (10 min)
3. ✅ Create 404 page (30 min)
4. ✅ Add skip-to-content link (15 min)
5. ✅ Configure .env.local (15 min)
6. ✅ Add structured data JSON-LD (30 min)
7. ✅ Create sitemap.xml (20 min)

---

## 📞 Support & Resources

### Documentation
- [CLAUDE.md](CLAUDE.md) - Complete project context
- [SENTRY-SETUP.md](SENTRY-SETUP.md) - Error tracking setup
- [QUICK-START.md](QUICK-START.md) - Development guide
- [brilliance-landing-page-plan.md](brilliance-landing-page-plan.md) - Original plan

### External Resources
- Figma Design File - Contact project owner for access
- Sentry Dashboard - https://sentry.io
- GitHub Repository - https://github.com/gaburi/brilance.git

### Key Commands
```bash
# Development
npm run dev              # Start dev server

# Testing
npm run type-check       # TypeScript validation
npm run lint             # ESLint check
npm run build            # Production build

# Deployment
npm run preview          # Preview production build
git push origin main     # Deploy to GitHub
```

---

## 🎨 Design System Reference

### Colors
- Primary Dark: `#00041b`
- Primary Purple: `#5c3e94`
- Primary Violet: `#8561c9`
- Accent Gold: `#ffbb00`

### Typography
- Headings: Nunito Sans
- Body: Nunito Sans
- Accent: Inter, Roboto, Outfit

### Spacing
- Container: max-width with px-[336px] on desktop
- Sections: py-20 vertical padding

---

**Last Updated:** 2025-11-17
**Next Review:** After completing Phase 1 (Pre-Launch)
**Questions?** Check [CLAUDE.md](CLAUDE.md) or create a GitHub Issue
