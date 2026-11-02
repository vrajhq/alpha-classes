---
name: Alpha Classes
description: A warm, editorial prospectus for students and parents in Anand.
colors:
  paper: "#f3efe5"
  paper-light: "#fbf8f0"
  ink: "#17243b"
  ink-soft: "#465166"
  navy: "#1b2a46"
  rust: "#a74432"
  rust-dark: "#843625"
  rule: "#cec7b8"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "72px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.33
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
  button:
    fontFamily: "Poppins, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  square: "0px"
  circle: "50%"
spacing:
  hairline: "2px"
  xxs: "4px"
  xs: "8px"
  compact: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "40px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
  5xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
    height: "48px"
    typography: "{typography.button}"
  button-secondary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
    height: "48px"
    typography: "{typography.button}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
    height: "48px"
    typography: "{typography.button}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.rust-dark}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
    height: "48px"
    typography: "{typography.button}"
  input-text:
    backgroundColor: "#fffdf8"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
    height: "48px"
  course-row:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ink}"
    padding: "32px 0"
  faq-disclosure:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "24px 0"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    padding: "12px 0"
---

# Design System: Alpha Classes

## Overview

**Creative North Star: "The Anand Academic Prospectus"**

Warm, scholarly, and assured: the site presents Alpha Classes as a clear local prospectus rather than a generic coaching template. Poppins carries the voice; warm paper, ink navy, restrained rust, editorial columns, and measured rules give the existing content a consistent printed character.

The composition leaves generous unprinted space and uses flat surfaces instead of gradients or repeated raised cards. Photography acts as a printed plate, while the callback remains the primary action and phone and WhatsApp stay available.

**Key Characteristics:**
- Warm paper and ink navy establish the reading field.
- Rust is reserved for calls to action, small marks, and scroll progress.
- Information is organized by columns, typography, and rules rather than card elevation.

## Colors

The palette pairs warm paper and dark ink with a small, deliberate rust accent.

### Primary
- **Restrained Rust**: Calls to action, small indexing marks, and emphasis.

### Secondary
- **Ink Navy**: Structural fields such as the statistics band and contact section.

### Neutral
- **Warm Paper**: The main reading surface.
- **Light Paper**: Lighter sections and high-contrast text on dark fields.
- **Ink**: Primary headings and body text.
- **Soft Ink**: Supporting copy and navigation.
- **Paper Rule**: Dividers and quiet boundaries between editorial rows.
- **Deep Rust**: Hover state for primary actions.

**The Paper-First Rule.** Paper carries the long read; navy defines structure, and rust is reserved for action and indexing.

## Typography

**Display Font:** Poppins (with sans-serif fallback)  
**Body Font:** Poppins (with sans-serif fallback)  
**Label/Mono Font:** Poppins (no separate mono face)

**Character:** Geometric and approachable, with compact display headlines and open, readable body copy. Poppins is self-hosted at weights 400, 500, 600, and 700; its SIL Open Font License is included at `public/fonts/OFL.txt`.

### Hierarchy
- **Display** (600, 72px desktop / 48px mobile, line-height 1): The main hero headline.
- **Headline** (600, 60px desktop / 36px mobile, line-height 1–1.12): Section headings.
- **Title** (600, 24px, line-height 1.33): Course and supporting section titles.
- **Body** (400, 16px, line-height 1.5): Descriptions and long-form reading.
- **Label** (600, 12px, line-height 1.33): Form labels and compact metadata.
- **Button** (600, 16px, line-height 1.5): Primary and secondary actions.

**The Quiet Hierarchy Rule.** Use weight, scale, and line breaks to establish emphasis; avoid adding decorative type treatments.

## Layout

The page uses a centered 1200px maximum-width container with 24px desktop gutters. A two-column hero and paired editorial sections open to single-column reading on smaller screens. At 720px, page gutters narrow to 20px and section grids stack; at 420px, gutters narrow to 16px and form/course details simplify to one column. The spacing rhythm is built from 2px through 96px steps, with 64–96px reserved for major section breathing room.

Course information and testimonials use ruled rows instead of equal-height cards. The sticky masthead stays compact, while a thin rust page register tracks scroll progress.

**The No-Card Rule.** Keep repeated information in editorial rows and rules instead of equal raised tiles.

## Elevation & Depth

The system is flat by default: paper contrast, navy fields, and fine rules create separation. A restrained shadow is limited to floating contact controls; form focus uses a translucent rust ring rather than elevation.

**The Flat-By-Default Rule.** Do not add shadows to ordinary sections, course entries, or form surfaces.

## Shapes

Rectangular controls and square-cornered surfaces are the default. Fine horizontal rules, small rust marks, and round list bullets provide the recurring geometry; circular silhouettes are reserved for floating contact controls.

**The Square-Edge Rule.** Keep buttons, fields, and content surfaces square-cornered; use circles only where the contact-control shape requires them.

## Components

### Buttons
- **Shape:** Square corners (0px radius); minimum height 48px.
- **Primary:** Rust field with light-paper text; 12px by 24px padding.
- **Secondary:** Navy field with light-paper text.
- **Outline:** Transparent field with ink border and text; navy fill on hover.
- **Ghost:** Transparent at rest with deep-rust text; quiet paper tint on hover.
- **Hover / Focus:** Raise 2px on hover, settle on press, and retain the global 3px visible focus outline.

### Inputs / Fields
- **Style:** Square, 48px minimum height, light warm fill, and a quiet 1px border.
- **Focus:** Rust border with a translucent 2px rust ring.
- **Error / Disabled:** Use native validation and disabled states; preserve clear labels and visible focus.

### Navigation
- **Style:** Sticky paper masthead with a navy contact strip, compact links, and a ruled active/hover state. On narrow screens, replace inline links with an accessible menu and keep phone and WhatsApp contact paths available.

### Course Rows
- **Style:** Two-column editorial list with generous vertical padding, a rust index mark, and fine separators; stack at mobile widths.
- **Features:** Two-column supporting lists on wider screens, returning to one column on narrow screens.

### FAQ Disclosure
- **Style:** Full-width text buttons between fine rules; the plus mark rotates into an open state. Keep the question as the control's accessible name.

### Photography and Asset Provenance
- **Hero photography:** Remote Unsplash images; desktop photo ID `photo-1523240795612-9a054b0db644` and mobile photo ID `photo-1529390079861-591de354faf5`. The exact image URLs are retained in `src/components/sections/Hero.jsx`.
- **WhatsApp mark:** The pre-existing `/whatsapp-logo.png` is preserved. Repository history describes it as the official WhatsApp PNG; its original download URL is not recorded.

## Do's and Don'ts

### Do:
- **Do** use paper, ink navy, and restrained rust as the recurring palette.
- **Do** use rules, columns, and whitespace to organize repeated content.
- **Do** keep primary actions rectangular and visibly keyboard-focusable.
- **Do** preserve the existing course, proof, FAQ, location, and callback content.

### Don't:
- **Don't** introduce gradients or repeated raised-card grids.
- **Don't** use shadows as the default way to separate sections.
- **Don't** add new performance claims or rewrite existing testimonials.
