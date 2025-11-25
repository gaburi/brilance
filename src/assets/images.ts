/**
 * Centralized Image Assets Configuration
 *
 * This file contains all image references for the Brilliance Landing Page.
 * Update the paths once images are downloaded from Figma and placed in public/assets/images/
 */

// Image asset type
export interface ImageAsset {
  src: string;
  alt: string;
  figmaUrl?: string; // Original Figma URL for reference
}

/**
 * All image assets used in the landing page
 *
 * TODO: Replace Figma API URLs with local paths after downloading assets
 * Format: /assets/images/[filename].webp
 */
export const IMAGES = {
  // Hero Section
  heroBackground: {
    src: '/assets/images/hero-background.png',
    alt: 'Space background with cosmic elements',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/0cf32700-b3ef-43b7-8d93-61deca4f45e2',
  },

  // Navigation / Logo
  logo: {
    src: '/assets/images/logo.png',
    alt: 'Brilance Logo',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/37392397-a39c-4f29-98e3-d612ff6d5920',
  },

  // Mission Section
  missionImage: {
    src: '/assets/images/mission/mission-image.png',
    alt: 'Mission - Discover your inner strength',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/7d23df00-694c-4e4c-8459-553f113cfc3c',
  },

  missionGridVector: {
    src: '/assets/images/mission/mission-grid-vector.svg',
    alt: 'Decorative grid pattern',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/61f1c5fb-ff07-4ae1-9dc4-cf33296f07dc',
  },

  missionGridVector2: {
    src: '/assets/images/mission/mission-grid-vector2.svg',
    alt: 'Decorative grid pattern 2',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/138d55da-855f-437c-9511-ee8de086a0ab',
  },

  missionSchoolIcon: {
    src: '/assets/images/mission/mission-school-icon.svg',
    alt: 'School icon',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/c1cb8cb0-3c19-4f30-9921-18c43b0cc05b',
  },

  missionMaskGroup: {
    src: '/assets/images/mission/mission-mask-group.svg',
    alt: 'Button mask group',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/528f42f1-a971-406e-8ed3-7155d0c51c06',
  },

  missionArrowFrame: {
    src: '/assets/images/mission/mission-arrow-frame.svg',
    alt: 'Arrow icon',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/affcc957-7f1d-4261-8abb-ef0d23729166',
  },

  // For Whom Section
  forWhomImage: {
    src: '/assets/images/forwhom/forwhom-image.png',
    alt: 'Target audience - People seeking transformation',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/68652c60-9e51-4b4e-b6fc-e4bdf2ef5db3',
  },

  forWhomCompassIcon: {
    src: '/assets/images/forwhom/compass-outline.svg',
    alt: 'Compass icon - Lost direction',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/a6175cf9-684a-48aa-a5c1-4fe9f8c91616',
  },

  forWhomLightbulbIcon: {
    src: '/assets/images/forwhom/lightbulb-on.svg',
    alt: 'Lightbulb icon - Finding purpose',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/35b2eabd-1c3e-4053-bfd1-faffdd88256c',
  },

  forWhomAccountPlusIcon: {
    src: '/assets/images/forwhom/account-plus-outline.svg',
    alt: 'Account plus icon - Overcoming fear',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/9ab02847-3834-4623-b288-4d974eb64375',
  },

  forWhomCodeIcon: {
    src: '/assets/images/forwhom/code-block-tags.svg',
    alt: 'Code icon - Technology innovation',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/fdaf9674-bcb3-4839-98e4-d89f9309aa83',
  },

  forWhomLineDivider: {
    src: '/assets/images/forwhom/line-divider.svg',
    alt: 'Divider line',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/30cc38a2-e529-46af-b598-9b27aa269b98',
  },

  forWhomMaskGroup: {
    src: '/assets/images/forwhom/forwhom-mask-group.svg',
    alt: 'Button mask group',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/e3f0c0c7-274e-4987-90a9-2e49f17e1d7e',
  },

  forWhomGridVector: {
    src: '/assets/images/forwhom/forwhom-grid-vector.svg',
    alt: 'Decorative grid pattern',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/f2aaea09-247b-4599-ad58-8536bcbb19da',
  },

  forWhomGridVector2: {
    src: '/assets/images/forwhom/forwhom-grid-vector2.svg',
    alt: 'Decorative grid pattern 2',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/56ff4ca9-c724-40c7-802e-6bbf3002f7a6',
  },

  // For Whom Section (fallback to frame21)
  targetAudienceImage: {
    src: '/assets/images/frame21.png',
    alt: 'Target audience - People seeking transformation',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/37d0fa80-fa05-48e0-901b-e7f28de6a4c2',
  },

  // Differentials Section
  differentialsLogo: {
    src: '/assets/images/differentials/differentials-logo.png',
    alt: 'Brilance Logo - Center',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/10122d28-e1b7-4192-8d25-6ca33e017989',
  },

  differentialsWisdomIcon: {
    src: '/assets/images/differentials/wisdom-icon.svg',
    alt: 'Wisdom icon - Pioneer program',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/b1f7e9fa-40be-453a-9519-b86cbf851954',
  },

  differentialsRocketIcon: {
    src: '/assets/images/differentials/rocket-icon.svg',
    alt: 'Rocket icon - Future careers',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/4b21810d-2079-4312-8a17-0e6db190fdaf',
  },

  differentialsLightbulbIcon: {
    src: '/assets/images/differentials/lightbulb-icon.svg',
    alt: 'Lightbulb icon - Innovation',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/872dea8e-8bac-4f9d-b03e-f3f80ec9dad2',
  },

  differentialsBullseyeIcon: {
    src: '/assets/images/differentials/bullseye-icon.svg',
    alt: 'Bullseye icon - Personalized training',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/682f50af-5de9-4fb5-86f4-7f44beabb5ee',
  },

  differentialsHandshakeIcon: {
    src: '/assets/images/differentials/handshake-icon.svg',
    alt: 'Handshake icon - Collaborative community',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/6f7b8e6e-f1d9-40f1-b30a-eb51f444ccf6',
  },

  // Differentials Section (Center Image - fallback to brilance)
  differentialsCenterImage: {
    src: '/assets/images/brilance.png',
    alt: 'Differentials - Our unique approach',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/8e96c0b5-d0e5-4d1d-9e9a-3c2f5d8b7a6e',
  },

  // CTA Section
  ctaImage: {
    src: '/assets/images/cta/cta-woman.png',
    alt: 'Woman with laptop - Transform your life',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/63397b5a-e4c3-4a25-9b6d-2888befca1eb',
  },

  ctaCardFrame: {
    src: '/assets/images/cta/cta-card-frame.png',
    alt: 'CTA card background frame',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/3ab0cf08-08d2-42d7-9210-b44fceaaffe2',
  },

  ctaButtonMask: {
    src: '/assets/images/cta/cta-button-mask.svg',
    alt: 'Button mask overlay',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/0af63f99-32dd-4dc6-a4ee-0769d418bf59',
  },

  // Additional images from original Figma design (may be used for testimonials, etc.)
  image20: {
    src: '/assets/images/mission-image.png',
    alt: 'Additional image 20',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/bc8b43c1-35af-4f1d-ba19-7328cab57e51',
  },

  // Testimonial/Profile images
  rectangle40289: {
    src: '/assets/images/testimonial-1.png',
    alt: 'Testimonial profile 1',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/3dfc58a0-8aa5-4b2c-976f-0e92f579ad9c',
  },

  rectangle40290: {
    src: '/assets/images/testimonial-2.png',
    alt: 'Testimonial profile 2',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/d3b6f587-a6ed-4a19-80f2-d2047c9b658a',
  },

  rectangle40291: {
    src: '/assets/images/testimonial-3.png',
    alt: 'Testimonial profile 3',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/3cb174e5-b419-4676-a4f0-ec1ecea2924a',
  },

  rectangle40292: {
    src: '/assets/images/testimonial-4.png',
    alt: 'Testimonial profile 4',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/f0ef638a-4ca4-4e48-9973-ae8bdcb895f2',
  },

  // Decorative/Icon images
  union3: {
    src: '/assets/images/union3.png',
    alt: 'Decorative union shape',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/b23f451c-c023-4ee4-a76d-0ca9c772fa1f',
  },

  frame21: {
    src: '/assets/images/frame21.png',
    alt: 'Frame decoration 21',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/56d31aef-18c0-4d3c-8360-4addd0ebbebb',
  },

  noBg1: {
    src: '/assets/images/no-bg-1.png',
    alt: 'Transparent background image',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/5f21d0f4-f572-4bd7-ab61-b615d918ce86',
  },

  image27: {
    src: '/assets/images/image27.png',
    alt: 'Additional image 27',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/f1461e45-9aa8-40cf-9215-514dafaf0415',
  },

  rectangle53: {
    src: '/assets/images/rectangle53.png',
    alt: 'Rectangle decoration 53',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/3660ad24-ac60-481d-8ae4-a8c7096d0691',
  },

  maskGroup: {
    src: '/assets/images/mask-group.png',
    alt: 'Masked group image',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/761eeff1-e628-4f19-a6fc-7f88c6297d57',
  },

  frame4167: {
    src: '/assets/images/logo.png',
    alt: 'Frame 4167 (Logo alternative)',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/37392397-a39c-4f29-98e3-d612ff6d5920',
  },

  school: {
    src: '/assets/images/school.png',
    alt: 'School icon/illustration',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/062250f4-f5e5-4de1-b555-829d001a5933',
  },

  maskGroup1: {
    src: '/assets/images/mask-group-1.png',
    alt: 'Masked group 1',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/3b0be6c3-68e8-4618-ad26-f88a6fcdde66',
  },

  frame: {
    src: '/assets/images/frame.png',
    alt: 'Frame decoration',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/5adbf997-0dd8-4ddc-b529-50a3f8df6499',
  },

  // Icons (could be replaced with Lucide icons or kept as images)
  cog: {
    src: '/assets/images/icon-cog.png',
    alt: 'Settings/Cog icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/1e078d0c-fb63-44b5-a5cd-8a488eca93e3',
  },

  wisdom21: {
    src: '/assets/images/icon-wisdom.png',
    alt: 'Wisdom/Brain icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/c0f00631-ecb8-44d4-915a-90af14ca7b48',
  },

  rocketLunch21: {
    src: '/assets/images/icon-rocket.png',
    alt: 'Rocket launch icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/e2fad520-0346-4384-b77f-6cab3ead48db',
  },

  bullseyeArrow1: {
    src: '/assets/images/icon-bullseye.png',
    alt: 'Bullseye/Target icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/8892827a-47cf-4d59-b0b5-e3fbc66d48d0',
  },

  compassOutline: {
    src: '/assets/images/icon-compass.png',
    alt: 'Compass outline icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/093b44b2-8b64-4eda-86ea-4bd037825b75',
  },

  lightbulbOn10: {
    src: '/assets/images/icon-lightbulb.png',
    alt: 'Lightbulb icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/1cfbc295-d34c-441f-8ccd-57dce5d9d257',
  },

  accountPlusOutline: {
    src: '/assets/images/icon-account-plus.png',
    alt: 'Account plus icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/58ac8dfc-a510-45ae-960f-a74400c575b4',
  },

  codeBlockTags: {
    src: '/assets/images/icon-code.png',
    alt: 'Code block tags icon',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/62e6ddd4-6ccc-48a1-bd07-99a3360e6f42',
  },

  maskGroup2: {
    src: '/assets/images/mask-group-2.png',
    alt: 'Masked group 2',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/f003190c-4b3e-45ed-b9cc-3e26b171912c',
  },

  frame110: {
    src: '/assets/images/frame110.png',
    alt: 'Frame 110',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/ecc40c35-a713-45b1-8197-270b80cd65cf',
  },

  maskGroup3: {
    src: '/assets/images/mask-group-3.png',
    alt: 'Masked group 3',
    figmaUrl:
      'https://www.figma.com/api/mcp/asset/da1fe019-d4e5-4be8-9e41-33cf546c3708',
  },

  // How It Works Section
  howItWorksUnion: {
    src: '/assets/images/how-it-works/union.png',
    alt: 'Decorative connection pattern',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/30534b69-4e44-43e6-9184-a3792f3ef245',
  },

  howItWorksVector13: {
    src: '/assets/images/how-it-works/vector13.png',
    alt: 'Connection line 1',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/ca92ad6d-5e5f-4c91-a03e-21c1655fdde2',
  },

  howItWorksVector14: {
    src: '/assets/images/how-it-works/vector14.png',
    alt: 'Connection line 2',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/98006149-ae73-41ab-a20c-885ace38b9d2',
  },

  howItWorksVector15: {
    src: '/assets/images/how-it-works/vector15.png',
    alt: 'Connection line 3',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/2f7f9e50-2520-42d3-b797-eee0867c3b7d',
  },

  howItWorksVector16: {
    src: '/assets/images/how-it-works/vector16.png',
    alt: 'Connection line 4',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/9aeeddb8-9621-44a4-8f69-f403de5ba61a',
  },

  howItWorksStep1: {
    src: '/assets/images/how-it-works/rectangle40289.png',
    alt: 'Step 1: Recognize and understand your blockages',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/ff80a750-2edb-4b42-ab30-508450e24d70',
  },

  howItWorksStep2: {
    src: '/assets/images/how-it-works/rectangle40290.png',
    alt: 'Step 2: Transform vulnerabilities into strength',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/2e095d2c-1cac-4422-90bd-7ea289054e36',
  },

  howItWorksStep3: {
    src: '/assets/images/how-it-works/rectangle40291.png',
    alt: 'Step 3: Access your superior intelligence',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/d3986bd0-19b2-4e14-a706-f15c763bd2e5',
  },

  howItWorksStep4: {
    src: '/assets/images/how-it-works/rectangle40292.png',
    alt: 'Step 4: Live with confidence and freedom',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/9110931e-97ef-4fd4-aea3-0e86470fb5bf',
  },

  howItWorksCog: {
    src: '/assets/images/how-it-works/cog.svg',
    alt: 'Settings icon',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/5ca391e7-6d45-4b6f-9403-07c769265b0a',
  },

  howItWorksDot1: {
    src: '/assets/images/how-it-works/frame4154.svg',
    alt: 'Connection dot 1',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/f651884e-d945-4488-98b4-d91a172dcfb6',
  },

  howItWorksDot2: {
    src: '/assets/images/how-it-works/frame1000003735.svg',
    alt: 'Connection dot 2',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/0f7ecd96-8c6b-4c23-8203-3b4c599a2c1d',
  },

  howItWorksDot3: {
    src: '/assets/images/how-it-works/frame4155.svg',
    alt: 'Connection dot 3',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/a4fa1235-fb03-487f-8534-13b6999960d6',
  },

  howItWorksLine: {
    src: '/assets/images/how-it-works/line6.png',
    alt: 'Divider line',
    figmaUrl: 'https://www.figma.com/api/mcp/asset/c344d926-b910-4094-99f0-010bc8be79da',
  },
} as const;

/**
 * Helper function to get image source
 * @param key - Image key from IMAGES object
 * @returns Image source URL
 */
export const getImage = (key: keyof typeof IMAGES): string => {
  return IMAGES[key].src;
};

/**
 * Helper function to get image alt text
 * @param key - Image key from IMAGES object
 * @returns Image alt text
 */
export const getImageAlt = (key: keyof typeof IMAGES): string => {
  return IMAGES[key].alt;
};

export default IMAGES;
