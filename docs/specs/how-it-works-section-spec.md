# How It Works Section - Component Specification

**Created:** 2024-11-21
**Figma Design:** https://www.figma.com/design/7fubWQBKarwyAswd8319wC/Sem-t%C3%ADtulo?node-id=21-623
**Status:** In Development

---

## Overview

Implement a "How It Works" section showing Brilance's 4-step transformation process. The section features a vertical timeline with alternating image-text cards connected by dotted lines.

## Design Analysis

### Visual Structure

**Header:**
- Settings icon in white rounded box (40x40px, 20.5px border-radius)
- Label: "COMO FUNCIONA" (20px, Nunito Sans Semibold, white/80%)
- Main heading: "Liberte-se das Amarras do Medo e dos Traumas" (40px, Nunito Sans Medium, white)
- Description text: Methodology explanation (16px, Nunito Sans Semibold, white)

**4-Step Timeline:**
Each step includes:
1. **Image** (540x424px for steps 1-2-4, 545x426px for step 3)
2. **Step Number** (01-04 in golden/yellow: rgba(255,187,0,0.72), 64px, Nunito Sans Black)
3. **Divider Line** (vertical, 64px height)
4. **Description** (24px, Nunito Sans Semibold, white/80%)

**Layout Pattern:**
- Step 01: Image left, text right
- Step 02: Image right, text left
- Step 03: Image left, text right
- Step 04: Image right, text left

**Connecting Elements:**
- Dotted curved lines connecting steps
- Yellow circular dots at connection points (41x41px)

### Colors
- Background: Dark blue (#00041b or similar)
- Step numbers: Golden yellow rgba(255,187,0,0.72)
- Text: White and white/80%
- Icon background: White with 3px border (rgba(255,255,255,0.31))

### Typography
- **Font Family:** Nunito Sans
- **Weights:** Black (900), SemiBold (600), Medium (500)
- **Sizes:** 64px (numbers), 40px (h2), 24px (steps), 20px (label), 16px (body)

## Technical Requirements

### Component Structure
```typescript
HowItWorksSection.tsx
├── Header
│   ├── Icon (Settings/Cog)
│   ├── Label ("COMO FUNCIONA")
│   ├── Heading
│   └── Description
└── Steps Timeline
    ├── Step 01 (left)
    ├── Connector Line
    ├── Step 02 (right)
    ├── Connector Line
    ├── Step 03 (left)
    ├── Connector Line
    └── Step 04 (right)
```

### Assets Required
- Icon: cog.png (24x24px)
- Step images: 4 images (Rectangle40289-40292)
- Connector lines: Vector SVGs (Vector13-16)
- Dots: Frame assets (Frame4154, Frame1000003735)
- Main connector: Union.png (background pattern)

### Animations (Framer Motion)
- **Scroll-triggered:** Fade in + slide up for each step
- **Staggered:** 0.2s delay between steps
- **Hover:** Slight scale on images (1.05)
- **Path drawing:** Animate dotted lines appearing

### Responsive Breakpoints
- **Mobile (< 768px):**
  - Single column layout
  - Stack images and text vertically
  - Simplified connector lines
  - Reduce spacing

- **Tablet (768px - 1023px):**
  - Maintain alternating layout
  - Adjust image sizes

- **Desktop (>= 1024px):**
  - Full alternating layout
  - Original image dimensions

## Implementation Steps

1. **Asset Download** (15 min)
   - Download all 14 images from Figma API URLs
   - Save to `public/assets/images/how-it-works/`
   - Update image constants in `src/assets/images.ts`

2. **Component Creation** (30 min)
   - Create `HowItWorksSection.tsx`
   - Define TypeScript interfaces for step data
   - Build header component
   - Build step component

3. **Layout Implementation** (45 min)
   - Implement alternating left/right layout
   - Add connector lines and dots
   - Ensure proper spacing

4. **Responsive Design** (30 min)
   - Mobile: vertical stack
   - Tablet: adjusted alternating
   - Desktop: full layout

5. **Animations** (20 min)
   - Scroll-triggered fade-in
   - Staggered step reveals
   - Image hover effects
   - Path drawing

6. **Testing** (15 min)
   - Test all breakpoints
   - Verify animations
   - Check image loading
   - Validate accessibility

**Total Estimated Time:** 2.5 hours

## Success Criteria

- ✅ Matches Figma design pixel-perfect
- ✅ All 4 steps display correctly
- ✅ Responsive on mobile, tablet, desktop
- ✅ Smooth scroll animations
- ✅ Fast loading (<500ms for images)
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ TypeScript strict mode passing

## Integration

**Add to BrilanceLanding.tsx:**
```tsx
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';

// In main component:
<HowItWorksSection />
```

**Update constants:**
- Add step data to `src/constants/index.ts`
- Add images to `src/assets/images.ts`

---

*This specification follows the workflow rules outlined in `.specify/workflow-rules.md`*
