---
name: Haute Parfumerie Minimaliste
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4b4640'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7d766f'
  outline-variant: '#cec5bd'
  surface-tint: '#615e5b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1d1b19'
  on-primary-container: '#878380'
  inverse-primary: '#cbc5c2'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#201a15'
  on-tertiary-container: '#8c827a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e1de'
  primary-fixed-dim: '#cbc5c2'
  on-primary-fixed: '#1d1b19'
  on-primary-fixed-variant: '#494644'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ede0d7'
  tertiary-fixed-dim: '#d0c4bb'
  on-tertiary-fixed: '#201a15'
  on-tertiary-fixed-variant: '#4d453f'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0em
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-uppercase:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
  space-2xl: 6rem
---

## Brand & Style

The design system embodies the sensory prestige and architectural restraint of haute parfumerie. Conceived for connoisseurs of artisanal fragrance and collectible design objects, the interface operates as a quiet gallery space: unhurried, tactile, and uncompromisingly refined.

The visual direction fuses **Editorial Minimalism** with tactile haute-luxe cues:
- **Spatial Generosity:** Negative space is treated as an active architectural element rather than an empty container, giving product silhouettes and olfactory storytelling room to breathe.
- **Micro-Refinement:** Hairline dividers, whisper-soft borders, and deliberate typographic tracking establish an aura of couture craftsmanship.
- **Tactile Materiality:** Interactive states evoke physical luxury—smooth transitions reminiscent of heavy flacon stoppers, warm metallic glints, and understated contrast shifts rather than abrupt animations.

## Colors

The palette is derived from rare raw perfumery extracts, cold flacon glass, and warm alabaster stone.

- **Primary (`#1A1816` - Deep Obsidian):** A rich, warm-toned charcoal that grounds the experience. Used for core typography, primary interactive actions, high-contrast framing, and editorial brand marks.
- **Secondary (`#C5A059` - Champagne Bronze):** A calibrated warm gold accent used sparingly for focal moments: selected state indicators, olfactory tier tags, award ribbons, and discreet hover accents. It must never overwhelm the canvas.
- **Tertiary (`#8C827A` - Muted Taupe):** A mineral midtone for secondary typography, metadata (e.g., volume, notes, nose credits), and soft baseline borders.
- **Neutral (`#FBF9F5` - Alabaster / Ivory):** The foundational canvas. Avoid sterile pure whites (`#FFFFFF`); use `#F5F1E8` for secondary card fills and architectural layered panels to preserve warmth and organic luxury.

## Typography

Typography establishes an editorial rhythm: transitional serif drama balanced by modern geometric clarity.

- **Playfair Display:** Reserved exclusively for editorial statements, fragrance titles, collection headings, and narrative quotes. Rendered primarily in regular and medium weights to avoid heavy commercialism.
- **Plus Jakarta Sans:** Applied to long-form fragrance descriptions, technical specifications, navigational links, and commerce controls. Its light-to-regular weight provides effortless legibility against ivory surfaces.
- **Case & Tracking Strategy:** All category tags, badges, button text, and system metadata must use `label-uppercase` styled in full uppercase with wide letter spacing (`0.14em` to `0.18em`) to mirror luxury house packaging conventions.

## Layout & Spacing

The layout philosophy relies on a **Fixed Grid with Intentional Asymmetry**. 

- **Grid Architecture:** Desktop displays run on a 12-column grid capped at a maximum width of `1440px`, centered with substantial margins (`4rem`). Tablet transitions to an 8-column grid (`2.5rem` margins), and mobile operates on a 4-column system (`1.25rem` margins).
- **Rhythm & Whitespace:** Spacing between major content sections must adhere to `space-2xl` (`6rem`) or higher to create an unhurried, editorial pacing. Component internal padding favors vertical breathing room over horizontal compression.
- **Asymmetric Editorial Plates:** In collection listings and discovery stories, staggered column spans (e.g., 5-column photography paired with 7-column narrative blocks) are preferred over rigid, repeating grids.

## Elevation & Depth

To preserve an editorial, high-fashion aesthetic, traditional heavy drop shadows are prohibited. Depth is achieved purely through **tonal transitions, delicate borders, and ambient light**:

- **Low-Contrast Hairlines:** Spatial hierarchy is established through 1px hairline borders rendered in `#1A1816` at 8% to 12% opacity (or `#E8E2D8`).
- **Tonal Stepping:** Surfaces elevate by transitioning from the base canvas (`#FBF9F5`) to soft warm stone containers (`#F5F1E8` or `#EFEAE0`).
- **Floating Modals & Overlays:** For cart drawers, quick-scent samplers, and mega-menus, use an ambient, multi-layered diffuse shadow:
  - `0 12px 32px -4px rgba(26, 24, 22, 0.06), 0 4px 16px -2px rgba(26, 24, 22, 0.03)`
- **Backdrop Blurs:** Navigation bars and overlay backdrops utilize a high-density blur (`backdrop-filter: blur(16px)`) with a 75% translucent ivory tint (`rgba(251, 249, 245, 0.82)`), creating a frosted crystal glass effect.

## Shapes

The shape vocabulary is **Sharp (`0`)**, echoing the precision of bespoke crystal flacons, guilloché bottle caps, and archival paper stationery.

- **Zero Radius:** Buttons, input fields, cards, notification banners, and modal containers carry crisp `0px` border radii.
- **Architectural Framing:** Imagery is framed with sharp rectangular viewports. When rounded accents occur, they are strictly reserved for circular swatches or scent profile radial diagrams (`50%` radius), never for interface containers or controls.

## Components

### Buttons
- **Primary:** Obsidian background (`#1A1816`), ivory text (`#FBF9F5`), 0px radius, tracked uppercase typography (`label-uppercase`). Padding: `16px 36px`. Hover state: transition background to champagne bronze (`#C5A059`) with ease-in-out curve (`300ms`).
- **Secondary / Ghost:** Transparent background with a 1px solid obsidian border (`#1A1816` or `#C5A059`). Text matches border color. Hover: background fills with `#1A1816`, text shifts to ivory.
- **Editorial Text Link:** Inline uppercase text accompanied by a deliberate 1px bottom underline separated by `4px`. Hover state gently translates the underline or fades to bronze.

### Cards (Fragrance / Editorial)
- **Background & Border:** Base `#FBF9F5` or subtly elevated `#F5F1E8`. Bounded by a crisp 1px border (`rgba(26, 24, 22, 0.08)`).
- **Image Treatment:** Aspect ratio `3:4` or `4:5`. Clean cutouts or editorial still-life photography with warm stone reflections. On hover, image exhibits an understated scale transition (`scale(1.02)` over `600ms cubic-bezier(0.2, 0, 0.2, 1)`).
- **Content Stacking:** Category tag (`label-uppercase`, muted taupe), followed by Fragrance Title (`headline-sm`, obsidian), olfactory sub-notes (`body-sm`), and retail price.

### Olfactory Note Chips & Filters
- **Form:** Flat rectangular tags with 1px border in `#8C827A` (30% opacity). Zero border-radius.
- **Typography:** `label-uppercase`, 10px or 11px.
- **Selected State:** Border and text shift to obsidian (`#1A1816`) with an ivory interior, or subtle bronze accent dot (`#C5A059`) anchored left.

### Form Inputs & Selectors
- **Fields:** Minimalist bottom-line or full hairline border with no box shadow. Background is transparent or subtle `#F5F1E8`. Padding: `14px 16px`.
- **Focus State:** 1px solid obsidian line or border with zero outline glow; label transitions upward in micro-tracked uppercase.

### Checkboxes & Radios
- **Design:** Geometric squares (checkboxes) and circles (radios) with 1px obsidian hairline outlines. Checkmark is a razor-thin tick; radio active state is a centered geometric pip (`#1A1816`).

### Specialized Luxury Components
- **Olfactory Pyramid Display:** A structured three-tier layout (Head, Heart, Base notes) with horizontal hairline dividers, balanced tracking, and proportional volume indicators.
- **Bespoke Sample Selector:** Segmented horizontal selector allowing patrons to assemble custom sample discovery boxes with interactive bottle thumbnail slots.