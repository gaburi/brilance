# Brilliance Landing Page - Deployment Guide

**Repository:** https://github.com/gaburi/brilance.git
**Deployment Date:** 2025-11-17
**Deployment Status:** 🟡 Ready for Initial Deploy (Pre-Production)

---

## 📋 Pre-Deployment Checklist

Before deploying to production, ensure these items are completed:

### Critical (Must Complete)
- [ ] **Environment Variables Configured** - Set up Sentry DSN and auth tokens
- [ ] **Sentry Test Button Removed** - Remove from production build
- [ ] **Images Optimized** - Replace Figma URLs with local WebP assets
- [ ] **Newsletter Backend Connected** - Integrate email service API
- [ ] **Build Passing** - `npm run build` completes without errors
- [ ] **TypeScript Validation** - `npm run type-check` passes
- [ ] **Security Audit** - No sensitive data in repository

### Recommended (Should Complete)
- [ ] **Contact Form Implemented** - Add modal or page for user contact
- [ ] **Accessibility Audit** - Run axe DevTools and fix critical issues
- [ ] **SEO Optimization** - Add structured data and meta descriptions
- [ ] **Analytics Integration** - Set up Google Analytics or alternative
- [ ] **404 Page Created** - Custom error page in Portuguese

### Optional (Nice to Have)
- [ ] **Tests Written** - At least critical path coverage
- [ ] **Browser Testing** - Test on major browsers
- [ ] **Performance Audit** - Lighthouse score > 90

---

## 🚀 Deployment to GitHub

### Initial Repository Setup (Completed)

✅ Git repository initialized
✅ Remote configured: https://github.com/gaburi/brilance.git
✅ .gitignore configured to protect sensitive data

### First Push to GitHub

Run these commands to push your code:

```bash
# Configure Git user (if not already set)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Brilliance Landing Page

- Complete React + TypeScript + Vite setup
- 14 modular components (layout + sections + common)
- Framer Motion animations throughout
- Sentry error tracking integration
- Tailwind CSS with cosmic theme
- Responsive design (mobile, tablet, desktop)
- Code splitting and lazy loading
- Full TypeScript coverage (strict mode)

Project Status: 80% complete
- Infrastructure: 100%
- Components: 85%
- Monitoring: 100%
- Polish: 40%

See CLAUDE.md for complete project history
See ISSUES.md for current tasks and issues
See SENTRY-SETUP.md for error tracking setup"

# Push to GitHub
git push -u origin main
```

**Note:** If the repository already has files, you may need to force push or merge:

```bash
# If repository has existing files
git pull origin main --allow-unrelated-histories

# Or force push (⚠️ use with caution)
git push -u origin main --force
```

---

## 🌐 Deployment to Vercel (Recommended)

Vercel is the recommended platform for deploying this Vite + React application.

### Step 1: Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### Step 2: Deploy via Vercel Dashboard (Easiest)

1. **Go to:** https://vercel.com/new
2. **Import Git Repository:**
   - Connect your GitHub account
   - Select `gaburi/brilance` repository
3. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Add Environment Variables:**
   ```
   VITE_SENTRY_DSN=your_sentry_dsn_here
   VITE_SENTRY_ORG=your_org_slug
   VITE_SENTRY_PROJECT=brilance
   SENTRY_AUTH_TOKEN=your_auth_token_here
   VITE_APP_VERSION=1.0.0
   VITE_SENTRY_DEBUG=false
   VITE_ENV=production
   ```
5. **Click Deploy**

### Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain (e.g., `brilance.com`)
4. Update DNS records as instructed by Vercel
5. Enable automatic HTTPS

### Step 4: Configure Deployment Settings

**vercel.json** (already created below):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 5: Enable Automatic Deployments

Vercel automatically deploys:
- **Production:** Every push to `main` branch
- **Preview:** Every pull request

---

## 🔧 Alternative Deployment: Netlify

### Deploy via Netlify Dashboard

1. **Go to:** https://app.netlify.com/start
2. **Connect to Git:**
   - Select GitHub
   - Choose `gaburi/brilance` repository
3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Add Environment Variables** (same as Vercel)
5. **Click Deploy**

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🔐 Environment Variable Setup

### Development (.env.local)

Create `.env.local` file in project root:

```env
# Sentry Configuration
VITE_SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
VITE_SENTRY_ORG=your-org-slug
VITE_SENTRY_PROJECT=brilance
SENTRY_AUTH_TOKEN=sntryu_your_token_here
VITE_APP_VERSION=1.0.0
VITE_SENTRY_DEBUG=true

# Environment
VITE_ENV=development
```

### Production (Vercel/Netlify Dashboard)

Set these in your hosting platform's environment variables:

```env
VITE_SENTRY_DSN=https://your-production-dsn@sentry.io/project-id
VITE_SENTRY_ORG=your-org-slug
VITE_SENTRY_PROJECT=brilance
SENTRY_AUTH_TOKEN=your_production_token
VITE_APP_VERSION=1.0.0
VITE_SENTRY_DEBUG=false
VITE_ENV=production
```

**⚠️ Security Notes:**
- Never commit `.env` or `.env.local` to Git
- Use different Sentry projects for dev/staging/production
- Rotate tokens if accidentally exposed
- Use GitHub Secrets for CI/CD workflows

---

## 🧪 Testing Deployment

### Before Deploying

```bash
# 1. Run type checking
npm run type-check

# 2. Run linting
npm run lint

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

### After Deploying

1. **Test All Pages/Sections:**
   - [ ] Hero section loads
   - [ ] All images display correctly
   - [ ] Animations work smoothly
   - [ ] Mobile menu functions
   - [ ] Footer newsletter form works
   - [ ] CTA buttons are clickable

2. **Test Sentry Integration:**
   - [ ] Visit Sentry dashboard
   - [ ] Verify events are being captured
   - [ ] Check source maps are uploaded
   - [ ] Test error boundary with intentional error

3. **Performance Testing:**
   - [ ] Run Lighthouse audit (score > 80)
   - [ ] Check Core Web Vitals
   - [ ] Test on slow 3G network
   - [ ] Verify lazy loading works

4. **Cross-Browser Testing:**
   - [ ] Chrome (desktop + mobile)
   - [ ] Safari (desktop + mobile)
   - [ ] Firefox
   - [ ] Edge

5. **SEO Verification:**
   - [ ] View page source - meta tags present
   - [ ] Open Graph tags working (test with social media debuggers)
   - [ ] Structured data valid (Google Rich Results Test)

---

## 📊 Post-Deployment Monitoring

### Sentry Dashboard
- Monitor error rates
- Track performance issues
- Review session replays
- Set up alert notifications

### Analytics (When Implemented)
- Track visitor count
- Monitor conversion rates
- Analyze user behavior
- Track form submissions

### Performance Monitoring
- Use Vercel Analytics (free tier)
- Monitor Core Web Vitals
- Set up performance budgets
- Track bundle size over time

---

## 🔄 Continuous Deployment Workflow

### Standard Workflow

```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make changes and commit
git add .
git commit -m "feat: add your feature description"

# 3. Push to GitHub
git push origin feature/your-feature-name

# 4. Create Pull Request on GitHub
# Vercel will automatically create preview deployment

# 5. Review preview deployment
# Click the preview URL in PR

# 6. Merge to main when approved
# Vercel will automatically deploy to production
```

### Hotfix Workflow

```bash
# 1. Create hotfix branch from main
git checkout main
git pull
git checkout -b hotfix/critical-bug-fix

# 2. Fix the issue
# Make minimal changes

# 3. Test locally
npm run build
npm run preview

# 4. Push and merge quickly
git push origin hotfix/critical-bug-fix
# Create PR and merge immediately

# 5. Production deploys automatically
```

---

## 🚨 Rollback Procedure

If deployment causes issues:

### Vercel Rollback

1. Go to Vercel Dashboard
2. Navigate to **Deployments**
3. Find the last working deployment
4. Click **⋮ Menu** → **Promote to Production**

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit (⚠️ dangerous)
git reset --hard <commit-hash>
git push origin main --force
```

---

## 📋 Deployment Troubleshooting

### Build Fails on Vercel/Netlify

**Common Issues:**

1. **TypeScript Errors:**
   ```bash
   # Run locally to debug
   npm run type-check
   ```

2. **Missing Dependencies:**
   ```bash
   # Ensure package-lock.json is committed
   git add package-lock.json
   git commit -m "chore: add package-lock.json"
   ```

3. **Environment Variables Missing:**
   - Check all required variables are set in platform
   - Verify variable names match exactly (case-sensitive)

4. **Sentry Source Maps Not Uploading:**
   - Verify `SENTRY_AUTH_TOKEN` is set
   - Check Sentry project permissions
   - Enable debug mode: `VITE_SENTRY_DEBUG=true`

### Site Not Loading After Deployment

1. **Check Build Logs:**
   - Vercel: Dashboard → Deployments → View Function Logs
   - Netlify: Dashboard → Deploys → Deploy Log

2. **Verify Output Directory:**
   - Should be `dist` for Vite projects
   - Check `dist` folder exists after build

3. **Check Redirects:**
   - SPA needs catch-all redirect to index.html
   - Verify vercel.json or netlify.toml is configured

### Images Not Loading

1. **Check Image Paths:**
   - Ensure paths start with `/` for public folder
   - Example: `/assets/images/logo.webp`

2. **Verify Images Exist:**
   - Check `public/assets/images/` directory
   - Ensure images are committed to Git

3. **Check Cache:**
   - Clear browser cache
   - Hard refresh (Ctrl+Shift+R)

---

## 📞 Support Resources

### Platform Documentation
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Sentry:** https://docs.sentry.io

### Project Documentation
- [CLAUDE.md](CLAUDE.md) - Complete project context
- [ISSUES.md](ISSUES.md) - Current issues and tasks
- [SENTRY-SETUP.md](SENTRY-SETUP.md) - Error tracking setup
- [QUICK-START.md](QUICK-START.md) - Development guide

### Community Support
- GitHub Issues: https://github.com/gaburi/brilance/issues
- Vercel Community: https://github.com/vercel/vercel/discussions
- Sentry Community: https://forum.sentry.io

---

## ✅ Final Checklist

Before marking deployment as complete:

- [ ] Repository pushed to GitHub successfully
- [ ] Production deployment live and accessible
- [ ] All environment variables configured
- [ ] Sentry receiving error events
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS working)
- [ ] All critical issues from ISSUES.md addressed
- [ ] Lighthouse score > 80 (all categories)
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Analytics tracking working (if implemented)
- [ ] Backup/rollback procedure tested
- [ ] Team members have access to dashboards
- [ ] Documentation updated with production URLs

---

**Deployment Date:** 2025-11-17
**Next Review:** After first production deploy
**Questions?** Create an issue on GitHub or check [ISSUES.md](ISSUES.md)

🚀 Ready to launch Brilliance!
