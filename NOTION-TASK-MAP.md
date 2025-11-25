# Landing Page Enhancement Tasks - Notion Task Map

## 📋 Overview
Total Tasks: **23**
Sections to Update: **6**
Priority: **Polish & Visual Enhancement**
Estimated Time: **8-12 hours**

---

## 🎯 Section 1: MissionSection (3 tasks)

### Task 1.1: Add Stars Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 1 hour
**Dependencies:** None

**Description:**
Add floating stars animation to the MissionSection background similar to HeroSection.

**Technical Details:**
- Create reusable stars component or hook
- Position stars using absolute positioning
- Animate using Framer Motion
- Ensure stars don't interfere with content readability

**Acceptance Criteria:**
- [ ] Stars animate smoothly (float/twinkle effect)
- [ ] Stars blend well with existing background
- [ ] Performance: 60fps on desktop, 30fps+ on mobile
- [ ] No z-index conflicts with foreground content

---

### Task 1.2: Add Gold Wave Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 1.5 hours
**Dependencies:** None

**Description:**
Add animated gold wave pattern to MissionSection background matching the cosmic theme.

**Technical Details:**
- SVG wave pattern with gold (#ffbb00) gradient
- Use Framer Motion for wave animation
- Consider using CSS `mask-image` or SVG `clipPath`
- Optimize for performance (GPU acceleration)

**Acceptance Criteria:**
- [ ] Gold wave animates smoothly (flowing/undulating motion)
- [ ] Wave complements stars animation
- [ ] Opacity/blur adjusted to not overpower content
- [ ] Responsive (adjusts to screen size)

---

### Task 1.3: Connect Button to "Quem Somos" Page
**Priority:** Medium
**Type:** Navigation/Routing
**Estimated Time:** 30 minutes
**Dependencies:** None

**Description:**
Link the "Saiba Mais" (Learn More) button in MissionSection to the "Quem Somos" (About Us) page.

**Technical Details:**
- Update button `onClick` or `href` prop
- Use React Router if multi-page, or smooth scroll if single-page
- Ensure button remains accessible (keyboard navigation)

**Acceptance Criteria:**
- [ ] Button navigates to correct page/section
- [ ] Smooth transition (no jarring jumps)
- [ ] Browser back button works correctly
- [ ] Mobile touch interaction works

---

## 🧩 Section 2: HowItWorksSection (6 tasks)

### Task 2.1: Add Stars Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 45 minutes
**Dependencies:** Task 1.1 (reuse stars component)

**Description:**
Add floating stars animation to HowItWorksSection background.

**Technical Details:**
- Reuse stars component from MissionSection
- Adjust star count/density for section
- Ensure stars work with puzzle piece layout

**Acceptance Criteria:**
- [ ] Stars animate consistently with other sections
- [ ] No visual conflicts with puzzle pieces
- [ ] Performance maintained

---

### Task 2.2: Add Gold Wave Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 45 minutes
**Dependencies:** Task 1.2 (reuse wave component)

**Description:**
Add animated gold wave pattern to HowItWorksSection background.

**Technical Details:**
- Reuse wave component from MissionSection
- Adjust wave positioning for puzzle layout
- Consider wave direction (horizontal vs vertical)

**Acceptance Criteria:**
- [ ] Gold wave animates smoothly
- [ ] Wave doesn't interfere with puzzle connection lines
- [ ] Consistent styling with other sections

---

### Task 2.3: Replace First Puzzle Piece Image
**Priority:** Medium
**Type:** Asset Update
**Estimated Time:** 30 minutes
**Dependencies:** None (requires new image from Figma)

**Description:**
Replace the first puzzle piece image with an updated version from Figma.

**Technical Details:**
- Download new image from Figma API or manually
- Update `src/assets/images.ts` constant
- Replace image file in `public/assets/images/`
- Update alt text if needed

**Acceptance Criteria:**
- [ ] New image matches Figma design
- [ ] Image dimensions optimized (compressed)
- [ ] Alt text descriptive and accessible
- [ ] No broken image references

---

### Task 2.4: Adjust Puzzle Piece Size
**Priority:** Medium
**Type:** CSS/Layout
**Estimated Time:** 1 hour
**Dependencies:** Task 2.3

**Description:**
Adjust the size of puzzle pieces for better visual balance and hierarchy.

**Technical Details:**
- Update puzzle image dimensions in component
- Adjust responsive breakpoints (mobile, tablet, desktop)
- Ensure pieces don't overlap or create spacing issues
- Test on 1440px, 1024px, 768px, 375px viewports

**Acceptance Criteria:**
- [ ] Puzzle pieces proportional on all screen sizes
- [ ] No layout shifts or overflow
- [ ] Visual hierarchy clear (step 1 → step 4)
- [ ] Maintains aspect ratio

---

### Task 2.5: Create Connection Effect Between Puzzle Pieces
**Priority:** High
**Type:** Animation/Effect
**Estimated Time:** 2 hours
**Dependencies:** Task 2.4

**Description:**
Add visual connection effects between puzzle pieces to show progression (e.g., connecting lines, dots, or animated paths).

**Technical Details:**
- Use SVG paths or CSS borders
- Animate using Framer Motion (draw animation)
- Consider dotted/dashed lines with gold color
- Trigger animation on scroll (IntersectionObserver)

**Acceptance Criteria:**
- [ ] Connections appear sequentially (step 1 → 2 → 3 → 4)
- [ ] Animation smooth (easing function)
- [ ] Works on mobile (simplified if needed)
- [ ] Connections visually distinct but not overwhelming

---

### Task 2.6: Add Special Effects to Final Puzzle
**Priority:** Medium
**Type:** Animation/Effect
**Estimated Time:** 1.5 hours
**Dependencies:** Task 2.5

**Description:**
Add celebratory or highlight effects to the final completed puzzle (step 4) to emphasize completion.

**Technical Details:**
- Options: glow effect, particles, scale animation, gold shine
- Use Framer Motion for animations
- Trigger on scroll into view
- Consider performance (avoid heavy effects on mobile)

**Acceptance Criteria:**
- [ ] Effect draws attention to final puzzle
- [ ] Animation plays once (not repetitive)
- [ ] Effect complements existing design language
- [ ] Performance: no lag or jank

---

## 👥 Section 3: ForWhomSection (2 tasks)

### Task 3.1: Add Gold Wave Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 30 minutes
**Dependencies:** Task 1.2 (reuse wave component)

**Description:**
Add animated gold wave pattern to ForWhomSection background.

**Technical Details:**
- Reuse wave component from previous sections
- Adjust wave for two-column layout (image + list)
- Ensure wave doesn't obscure text

**Acceptance Criteria:**
- [ ] Gold wave animates consistently
- [ ] Wave visible but subtle
- [ ] No readability issues with text

---

### Task 3.2: Change Border to Transparent Style
**Priority:** Medium
**Type:** CSS/Styling
**Estimated Time:** 30 minutes
**Dependencies:** None

**Description:**
Update the section border to use a transparent/glassmorphism style for a more modern look.

**Technical Details:**
- Use `border: 1px solid rgba(255, 255, 255, 0.1)` or similar
- Apply backdrop-filter for glassmorphism effect
- Update border-radius if needed (currently rounded-3xl)
- Test on different backgrounds

**Acceptance Criteria:**
- [ ] Border transparent with subtle visibility
- [ ] Glassmorphism effect enhances design
- [ ] Border consistent with design system
- [ ] Works on light and dark backgrounds

---

## 💬 Section 4: TestimonialsSection (4 tasks)

### Task 4.1: Redesign Carousel to Match ReactBits Style
**Priority:** High
**Type:** Design/Component Refactor
**Estimated Time:** 2 hours
**Dependencies:** None (research ReactBits first)

**Description:**
Redesign the testimonials carousel to match the style of the ReactBits website (clean, modern card layout).

**Technical Details:**
- Research ReactBits testimonials section
- Update card styling (shadows, borders, spacing)
- Adjust typography (font sizes, weights, line height)
- Consider using Embla Carousel or Swiper if current implementation limiting

**Acceptance Criteria:**
- [ ] Carousel matches ReactBits aesthetic
- [ ] Testimonial cards visually appealing
- [ ] Smooth transitions between slides
- [ ] Mobile-responsive

---

### Task 4.2: Add Hover Effect on Testimonial Cards
**Priority:** Medium
**Type:** Interaction/Animation
**Estimated Time:** 1 hour
**Dependencies:** Task 4.1

**Description:**
Add interactive hover effects to testimonial cards (e.g., lift, scale, border glow).

**Technical Details:**
- Use Framer Motion `whileHover` prop
- Options: scale(1.05), translateY(-8px), shadow increase
- Add smooth transition (0.3s ease)
- Ensure hover doesn't break carousel navigation

**Acceptance Criteria:**
- [ ] Hover effect smooth and subtle
- [ ] Effect enhances interactivity
- [ ] No layout shifts on hover
- [ ] Works on desktop only (no mobile hover issues)

---

### Task 4.3: Improve Fade-Out Transition Effect
**Priority:** Medium
**Type:** Animation/Carousel
**Estimated Time:** 1 hour
**Dependencies:** Task 4.1

**Description:**
Improve the fade-out transition when testimonials scroll out of view (smoother, more polished).

**Technical Details:**
- Adjust Framer Motion exit animation
- Use opacity + transform (fade + slide)
- Increase transition duration if too fast
- Consider using `AnimatePresence` for better control

**Acceptance Criteria:**
- [ ] Fade-out smooth and natural
- [ ] No jarring cuts or jumps
- [ ] Consistent timing with fade-in
- [ ] Works in infinite loop mode

---

### Task 4.4: Remove Subtitle from Testimonial Cards
**Priority:** Low
**Type:** Content/Layout
**Estimated Time:** 15 minutes
**Dependencies:** None

**Description:**
Remove the subtitle field from testimonial cards to simplify layout and focus on testimonial text.

**Technical Details:**
- Update `TestimonialsSection.tsx` component
- Remove subtitle from TESTIMONIALS constant (if present)
- Adjust card spacing after removal
- Update TypeScript types if needed

**Acceptance Criteria:**
- [ ] Subtitle removed from all testimonial cards
- [ ] Card layout balanced without subtitle
- [ ] No broken references in code
- [ ] Build passes TypeScript checks

---

## ✨ Section 5: DifferentialsSection (4 tasks)

### Task 5.1: Add Gold Wave Animation to Background
**Priority:** High
**Type:** Animation
**Estimated Time:** 30 minutes
**Dependencies:** Task 1.2 (reuse wave component)

**Description:**
Add animated gold wave pattern to DifferentialsSection background.

**Technical Details:**
- Reuse wave component
- Adjust for circular layout (center image + corner cards)
- Consider radial wave pattern instead of linear

**Acceptance Criteria:**
- [ ] Gold wave animates smoothly
- [ ] Wave complements circular layout
- [ ] No conflicts with center image rotation

---

### Task 5.2: Optimize Layout for 1440px Viewport
**Priority:** Medium
**Type:** CSS/Responsive Design
**Estimated Time:** 1.5 hours
**Dependencies:** None

**Description:**
Optimize the DifferentialsSection layout specifically for 1440px viewport (common desktop resolution).

**Technical Details:**
- Test current layout at 1440px width
- Adjust card positioning, spacing, font sizes
- Ensure circular layout scales properly
- Consider adding `@media (min-width: 1440px)` breakpoint

**Acceptance Criteria:**
- [ ] Layout visually balanced at 1440px
- [ ] No awkward spacing or overflow
- [ ] Text readable and well-sized
- [ ] Circular layout maintains proportions

---

### Task 5.3: Implement Card Expansion on Hover
**Priority:** Medium
**Type:** Interaction/Animation
**Estimated Time:** 1.5 hours
**Dependencies:** Task 5.2

**Description:**
Make differential cards expand or grow when hovered to reveal more information or enhance visual interest.

**Technical Details:**
- Use Framer Motion `whileHover` with scale or height increase
- Options: scale(1.1), expand height to show hidden text
- Add smooth transition (spring animation)
- Ensure expanded card doesn't overlap others

**Acceptance Criteria:**
- [ ] Cards expand smoothly on hover
- [ ] Expansion draws attention to card
- [ ] No layout breaks or overlaps
- [ ] Animation feels responsive (not sluggish)

---

### Task 5.4: Add Subtle Pulsation Effect to Gold Blur Background
**Priority:** Low
**Type:** Animation/Effect
**Estimated Time:** 45 minutes
**Dependencies:** None

**Description:**
Add a subtle pulsating animation to the gold blur background behind the center image.

**Technical Details:**
- Use Framer Motion `animate` with scale or opacity loop
- Very subtle: scale(0.95 to 1.05) or opacity(0.5 to 0.8)
- Slow duration: 3-5 seconds
- Use `repeat: Infinity` and `ease: "easeInOut"`

**Acceptance Criteria:**
- [ ] Pulsation subtle and not distracting
- [ ] Animation loops smoothly
- [ ] Enhances visual interest
- [ ] Performance: no dropped frames

---

## 📄 Section 6: Footer (3 tasks)

### Task 6.1: Optimize Spacing and Layout
**Priority:** Medium
**Type:** CSS/Layout
**Estimated Time:** 1 hour
**Dependencies:** None

**Description:**
Optimize the spacing and overall layout of the footer for better visual balance and hierarchy.

**Technical Details:**
- Review current gap, padding, margin values
- Ensure consistent spacing (8px grid system)
- Adjust column widths for better proportion
- Test on multiple screen sizes

**Acceptance Criteria:**
- [ ] Footer spacing visually balanced
- [ ] Consistent with design system (gap-6, mb-6)
- [ ] No cramped or sparse areas
- [ ] Works on mobile, tablet, desktop

---

### Task 6.2: Improve Overall Responsive Design
**Priority:** High
**Type:** Responsive Design
**Estimated Time:** 1.5 hours
**Dependencies:** Task 6.1

**Description:**
Enhance the responsive design of the footer to work better across all device sizes.

**Technical Details:**
- Test on 375px, 768px, 1024px, 1440px viewports
- Adjust breakpoints for column stacking
- Ensure all links/buttons remain tappable on mobile (44px min)
- Fix any text overflow or wrapping issues

**Acceptance Criteria:**
- [ ] Footer readable on all screen sizes
- [ ] Columns stack gracefully on mobile
- [ ] No horizontal scrolling
- [ ] Touch targets meet accessibility standards

---

### Task 6.3: Enhance Newsletter Subscription Section Design
**Priority:** Medium
**Type:** Design/UX
**Estimated Time:** 1.5 hours
**Dependencies:** Task 6.2

**Description:**
Improve the design and user experience of the newsletter subscription section in the footer.

**Technical Details:**
- Update input field styling (glassmorphism, focus states)
- Improve button design (more prominent CTA)
- Add loading state during submission
- Enhance success/error message styling
- Consider adding privacy text ("We respect your privacy")

**Acceptance Criteria:**
- [ ] Newsletter section visually appealing
- [ ] Input and button have clear visual hierarchy
- [ ] Form states (default, focus, loading, success, error) well-designed
- [ ] UX smooth and intuitive

---

## 📊 Task Summary by Priority

### High Priority (11 tasks)
1. MissionSection: Stars animation (1.1)
2. MissionSection: Gold wave animation (1.2)
3. HowItWorksSection: Stars animation (2.1)
4. HowItWorksSection: Gold wave animation (2.2)
5. HowItWorksSection: Connection effect (2.5)
6. ForWhomSection: Gold wave animation (3.1)
7. TestimonialsSection: ReactBits redesign (4.1)
8. DifferentialsSection: Gold wave animation (5.1)
9. Footer: Responsive design (6.2)

### Medium Priority (10 tasks)
1. MissionSection: Button link (1.3)
2. HowItWorksSection: Replace image (2.3)
3. HowItWorksSection: Adjust size (2.4)
4. HowItWorksSection: Final puzzle effects (2.6)
5. ForWhomSection: Transparent border (3.2)
6. TestimonialsSection: Hover effect (4.2)
7. TestimonialsSection: Fade-out transition (4.3)
8. DifferentialsSection: 1440px optimization (5.2)
9. DifferentialsSection: Card expansion (5.3)
10. Footer: Spacing optimization (6.1)
11. Footer: Newsletter design (6.3)

### Low Priority (2 tasks)
1. TestimonialsSection: Remove subtitle (4.4)
2. DifferentialsSection: Pulsation effect (5.4)

---

## 🎯 Suggested Execution Order

### Phase 1: Background Animations (4-5 hours)
Create reusable components, then apply across sections.
- Task 1.1 → 1.2 (MissionSection)
- Task 2.1 → 2.2 (HowItWorksSection)
- Task 3.1 (ForWhomSection)
- Task 5.1 (DifferentialsSection)

### Phase 2: HowItWorks Puzzle (4-5 hours)
Focus on puzzle piece improvements and effects.
- Task 2.3 → 2.4 → 2.5 → 2.6

### Phase 3: Testimonials Redesign (2-3 hours)
- Task 4.1 → 4.2 → 4.3 → 4.4

### Phase 4: Differentials Enhancements (2-3 hours)
- Task 5.2 → 5.3 → 5.4

### Phase 5: Footer & Misc (2-3 hours)
- Task 6.1 → 6.2 → 6.3
- Task 1.3 (button link)
- Task 3.2 (transparent border)

---

## 📝 Notes for Notion Import

**Database Properties:**
- Task ID (Text)
- Section (Select: MissionSection, HowItWorksSection, ForWhomSection, TestimonialsSection, DifferentialsSection, Footer)
- Priority (Select: High, Medium, Low)
- Type (Select: Animation, CSS/Layout, Design/Component, Interaction, Asset Update, Navigation/Routing, Responsive Design)
- Status (Select: Not Started, In Progress, Blocked, Testing, Done)
- Estimated Time (Number in hours)
- Dependencies (Relation to other tasks)
- Assignee (Person)
- Due Date (Date)

**Views to Create:**
1. **All Tasks** - Table view with all properties
2. **By Section** - Board view grouped by Section
3. **By Priority** - Board view grouped by Priority
4. **Timeline** - Timeline view by Due Date
5. **My Tasks** - Filtered by Assignee

---

**Document Generated:** 2025-11-25
**Total Estimated Time:** 21-28 hours
**Sections:** 6
**Tasks:** 23
