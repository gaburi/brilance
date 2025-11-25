# Sentry Error Tracking Setup Guide

This guide will help you complete the Sentry integration for the Brilliance Landing Page.

## ✅ What's Already Done

1. ✅ Sentry React SDK installed (`@sentry/react` + `@sentry/vite-plugin`)
2. ✅ Sentry configuration file created ([src/utils/sentry.ts](src/utils/sentry.ts))
3. ✅ Sentry initialized in [src/main.tsx](src/main.tsx)
4. ✅ Error Boundary added to [src/App.tsx](src/App.tsx)
5. ✅ Vite build integration configured for source maps
6. ✅ Environment variable templates created
7. ✅ Custom tracking hooks created ([src/hooks/useSentryTracking.ts](src/hooks/useSentryTracking.ts))
8. ✅ Test component created ([src/components/SentryTestButton.tsx](src/components/SentryTestButton.tsx))

---

## 🚀 Quick Start (5 Steps)

### Step 1: Create a Sentry Project

1. Go to [sentry.io](https://sentry.io) and sign up or log in
2. Click **"Create Project"**
3. Select **"React"** as the platform
4. Name your project: `brilance-landing-page` (or your preferred name)
5. Click **"Create Project"**

### Step 2: Get Your DSN (Data Source Name)

After creating the project, Sentry will show you a DSN that looks like:
```
https://abc123def456@o123456.ingest.sentry.io/7890123
```

**Copy this DSN** - you'll need it in the next step.

### Step 3: Configure Environment Variables

Open the file [`.env.local`](.env.local) and add your Sentry DSN:

```env
# Replace with your actual DSN from Sentry
VITE_SENTRY_DSN=https://your-actual-dsn@sentry.io/your-project-id

# Your Sentry organization slug (found in Sentry settings)
VITE_SENTRY_ORG=your-org-slug

# Your project slug
VITE_SENTRY_PROJECT=brilance-landing-page

# Your auth token is already set (for source map uploads)
SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN_HERE

# App version
VITE_APP_VERSION=1.0.0

# Set to true to enable Sentry in development mode (for testing)
VITE_SENTRY_DEBUG=true
```

### Step 4: Test the Integration

Add the test component to your app temporarily:

**Option A: Add to BrilanceLanding.tsx**

```typescript
// At the top of the file
import SentryTestButton from './SentryTestButton';

// Inside the component return, add:
{import.meta.env.DEV && <SentryTestButton />}
```

**Option B: Test via console**

Open your browser console and run:
```javascript
throw new Error('Test error for Sentry');
```

### Step 5: Verify in Sentry Dashboard

1. Run your app: `npm run dev`
2. Click the test buttons or trigger an error
3. Go to your Sentry dashboard: [sentry.io/issues](https://sentry.io/issues)
4. You should see the errors appear within seconds!

---

## 🔧 Configuration Details

### Current Sentry Features Enabled

1. **Error Tracking** ✅
   - Automatic error capture
   - Stack traces with source maps
   - Error grouping and deduplication

2. **Performance Monitoring** ✅
   - Page load timing
   - Component render performance
   - Network request tracking
   - 100% transaction sampling (reduce in production)

3. **Session Replay** ✅
   - Video-like replays of user sessions
   - 10% of normal sessions
   - 100% of sessions with errors

4. **Error Boundary** ✅
   - Catches React component errors
   - Shows user-friendly error page
   - Automatically reports to Sentry

5. **Custom Tracking Hooks** ✅
   - `usePageTracking()` - Track page views
   - `useFormTracking()` - Track form submissions
   - `useClickTracking()` - Track button clicks
   - `useScrollTracking()` - Track scroll depth
   - `usePerformanceTracking()` - Track slow components
   - `useApiTracking()` - Track API calls

---

## 📊 Usage Examples

### Track Page Views

```typescript
import { usePageTracking } from '@/hooks/useSentryTracking';

const MyComponent = () => {
  usePageTracking('Home Page');
  // ...
};
```

### Track Form Submissions

```typescript
import { useFormTracking } from '@/hooks/useSentryTracking';

const NewsletterForm = () => {
  const { trackFormStart, trackFormSuccess, trackFormError } = useFormTracking();

  const handleSubmit = async (data) => {
    trackFormStart('Newsletter');

    try {
      await submitToAPI(data);
      trackFormSuccess('Newsletter', { email: data.email });
    } catch (error) {
      trackFormError('Newsletter', error);
    }
  };
};
```

### Track Button Clicks

```typescript
import { useClickTracking } from '@/hooks/useSentryTracking';

const CTAButton = () => {
  const { trackClick } = useClickTracking();

  return (
    <button onClick={() => {
      trackClick('CTA Button', { section: 'hero' });
      // ... rest of handler
    }}>
      Get Started
    </button>
  );
};
```

### Manually Capture Errors

```typescript
import { captureException, captureMessage } from '@/utils/sentry';

try {
  // risky operation
} catch (error) {
  captureException(error, {
    context: { userId: '123', action: 'submit-form' }
  });
}

// Or capture a message
captureMessage('User completed onboarding', 'info');
```

---

## 🏗️ Production Deployment

### Environment Variables for Production

Create a `.env.production` file:

```env
VITE_SENTRY_DSN=https://your-actual-dsn@sentry.io/your-project-id
VITE_SENTRY_ORG=your-org-slug
VITE_SENTRY_PROJECT=brilance-landing-page
SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN_HERE
VITE_APP_VERSION=1.0.0
NODE_ENV=production
```

### Build for Production

```bash
npm run build
```

This will:
- Generate source maps
- Upload source maps to Sentry (if `SENTRY_AUTH_TOKEN` is set)
- Create optimized bundles
- Tag the release with `VITE_APP_VERSION`

### Performance Optimization for Production

Update [src/utils/sentry.ts](src/utils/sentry.ts) line 35:

```typescript
// Reduce sampling rate in production
tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
```

This will:
- Development: Capture 100% of transactions
- Production: Capture only 10% (reduces quota usage)

---

## 🧪 Testing Checklist

- [ ] DSN configured in `.env.local`
- [ ] App runs without errors: `npm run dev`
- [ ] Test error capture works (use `<SentryTestButton />`)
- [ ] Errors appear in Sentry dashboard within 10 seconds
- [ ] Stack traces are readable (not minified)
- [ ] Session replays are visible
- [ ] Performance data is being captured
- [ ] Error boundary catches component errors
- [ ] TypeScript builds without errors: `npm run type-check`
- [ ] Production build succeeds: `npm run build`

---

## 🔍 Troubleshooting

### Errors Not Appearing in Sentry?

1. **Check DSN is set correctly**
   ```bash
   # In your terminal
   echo $VITE_SENTRY_DSN
   ```

2. **Enable debug mode**
   Add to `.env.local`:
   ```env
   VITE_SENTRY_DEBUG=true
   ```

3. **Check console for Sentry logs**
   Look for Sentry initialization messages in browser console

4. **Verify Sentry is enabled**
   In dev mode, Sentry is disabled by default. Set `VITE_SENTRY_DEBUG=true` to enable.

### Source Maps Not Uploading?

1. Verify `SENTRY_AUTH_TOKEN` is set
2. Check organization and project slugs match your Sentry settings
3. Run build with verbose output:
   ```bash
   NODE_ENV=production npm run build -- --debug
   ```

### TypeScript Errors?

Run type check:
```bash
npm run type-check
```

All Sentry-related TypeScript should be error-free.

---

## 📚 Additional Resources

- [Sentry React Documentation](https://docs.sentry.io/platforms/javascript/guides/react/)
- [Sentry Performance Monitoring](https://docs.sentry.io/platforms/javascript/performance/)
- [Sentry Session Replay](https://docs.sentry.io/platforms/javascript/session-replay/)
- [Sentry Vite Plugin](https://docs.sentry.io/platforms/javascript/guides/react/sourcemaps/uploading/vite/)

---

## 🎯 Next Steps

1. **Complete Step 2 above** - Get your DSN from Sentry
2. **Update `.env.local`** with your DSN
3. **Test the integration** using the test button
4. **Add tracking to components** using the custom hooks
5. **Remove `<SentryTestButton />`** before deploying to production

---

## 📝 Files Modified/Created

**New Files:**
- `src/utils/sentry.ts` - Main Sentry configuration
- `src/hooks/useSentryTracking.ts` - Custom tracking hooks
- `src/components/SentryTestButton.tsx` - Test component
- `.env.example` - Environment variable template
- `.env.local` - Local environment configuration
- `.gitignore` - Git ignore rules
- `SENTRY-SETUP.md` - This guide

**Modified Files:**
- `src/main.tsx` - Added Sentry initialization
- `src/App.tsx` - Added Error Boundary
- `vite.config.ts` - Added Sentry Vite plugin
- `package.json` - Added Sentry dependencies

---

**Questions or Issues?**
Check the troubleshooting section above or refer to the [Sentry documentation](https://docs.sentry.io).
