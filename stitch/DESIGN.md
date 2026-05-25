---
name: ClinicFlow Command
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e6073'
  primary: '#162839'
  on-primary: '#ffffff'
  primary-container: '#2c3e50'
  on-primary-container: '#96a9be'
  inverse-primary: '#b5c8df'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#8bf1e6'
  on-secondary-container: '#006f67'
  tertiary: '#362308'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e381c'
  on-tertiary-container: '#c1a17d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4fb'
  primary-fixed-dim: '#b5c8df'
  on-primary-fixed: '#091d2e'
  on-primary-fixed-variant: '#36485b'
  secondary-fixed: '#8ef4e9'
  secondary-fixed-dim: '#71d7cd'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#e3c19b'
  on-tertiary-fixed: '#291802'
  on-tertiary-fixed-variant: '#5a4225'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  container-padding: 20px
  table-cell-padding: 8px 12px
---

## Brand & Style
The design system is engineered for high-stakes clinical environments where clarity, speed of data ingestion, and a sense of calm authority are paramount. The brand personality is **Professional, Stoic, and Systematic**. It avoids decorative flourishes in favor of a "Command Center" aesthetic—prioritizing information density and functional hierarchy to reduce cognitive load for clinic administrators and medical staff.

The visual style leans heavily into **Modern Minimalism** with a focus on **Structural Clarity**. It utilizes a "border-first" philosophy rather than heavy shadows to define boundaries, ensuring that even the most data-saturated screens remain legible and organized. The emotional response is one of controlled efficiency and reliability.

## Colors
The palette is rooted in **Deep Slate Blue**, chosen to project stability and authority. This is complemented by **Soft Teal**, which provides a subtle nod to healthcare and wellness without being visually fatiguing. 

- **Primary (Deep Slate Blue):** Used for navigation, primary actions, and key headers.
- **Secondary (Soft Teal):** Used for accent elements, active states, and wellness-related highlights.
- **Backgrounds:** A neutral **Off-white/Light Gray** palette is used to prevent eye strain during long shifts.
- **Surfaces:** Pure white is reserved for cards and data containers to create a "layered" effect against the neutral background.
- **Status Colors:** High-contrast, industry-standard tones for immediate recognition of critical clinical alerts and system states.

## Typography
**Inter** is the sole typeface, selected for its exceptional legibility at small sizes and high x-height, which is critical for dense data tables. 

The type scale is intentionally compact. **Label-sm** is frequently used for metadata, timestamps, and table headers to maximize screen real estate. **Headline-lg** is capped at 24px to ensure it doesn't dominate the workspace, maintaining a balanced, high-density layout. Tracking is tightened on headlines and slightly loosened on small caps labels for maximum clarity.

## Layout & Spacing
This design system utilizes a **Fixed-Fluid Hybrid Grid**. The sidebar navigation is fixed at 240px, while the main content area utilizes a fluid 12-column grid to adapt to widescreen monitors common in clinical workstations.

The spacing rhythm is based on a **4px base unit**. Unlike consumer apps that favor generous whitespace, this system uses "tight" padding (e.g., 8px to 12px) to allow for more rows in tables and more fields in forms. Elements are grouped using logical proximity, with 16px margins between major containers and 12px gutters between columns.

## Elevation & Depth
Depth is communicated through **Tonal Layering and Borders** rather than shadows. 
- **Level 0 (Background):** Neutral Off-white (#F8F9FA).
- **Level 1 (Surfaces):** White (#FFFFFF) containers with a 1px solid border (#E2E8F0).
- **Level 2 (Interactions):** Active or hovered states use a slightly darker border or a Soft Teal accent edge.

This "Flat-Command" approach ensures that even with dozens of windows or cards visible, the UI remains crisp and the z-axis is strictly controlled to avoid visual clutter.

## Shapes
The shape language is disciplined and geometric. A **Soft (4px)** radius is applied to all buttons, input fields, and containers. This small radius provides a modern touch that feels approachable without compromising the professional, "engineered" feel of the command center. Buttons and tags use the same radius to maintain a cohesive, modular appearance.

## Components

### Navigation & Shell
- **Sidebar:** Dark Slate Blue background with high-contrast white text for active states. Icons are simplified glyphs.
- **Top Bar:** Slim (56px height), containing breadcrumbs, global search, and a compact notification bell.

### Data Tables
- **High Density:** Standard row height of 40px. 
- **Visual Cues:** Uses thin horizontal dividers only. Alternating row stripes (zebra striping) are optional for extremely wide tables.
- **Inline Actions:** Small, 28px ghost buttons appear on row hover to reduce visual noise when not in use.

### Inputs & Forms
- **Field Layout:** Vertical labels using `label-md` for maximum density. 
- **Validation:** Clear 1px colored borders (Red for error, Teal for focus) with `body-sm` helper text.
- **Compact Selection:** Chips/Tags are used for patient statuses and department filters, using `label-sm` typography.

### Buttons
- **Primary:** Solid Deep Slate Blue.
- **Secondary:** Outlined with 1px `border-subtle`.
- **Tertiary/Ghost:** No border, secondary color text, used for low-priority actions in dense lists.

### Information Cards
- **Headered Cards:** Include a subtle bottom-bordered header section with `headline-sm` text.
- **Metric Cards:** Large numeric values in Deep Slate Blue with small `label-sm` descriptors for key clinical KPIs.