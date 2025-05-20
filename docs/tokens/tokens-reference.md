# Design Tokens Reference

This document provides a comprehensive reference for all design tokens used in the tivadarorosz.com website. These tokens are defined as CSS custom properties (variables) and serve as the foundation for the site's design system.

## Table of Contents

1. [Color System](#color-system)
   - [Raw Colors](#raw-colors)
   - [Functional Colors](#functional-colors)
   - [Theme Colors](#theme-colors)
2. [Typography](#typography)
   - [Font Families](#font-families)
   - [Font Weights](#font-weights)
   - [Font Sizes](#font-sizes)
   - [Line Heights](#line-heights)
3. [Spacing](#spacing)
4. [Borders and Radiuses](#borders-and-radiuses)
5. [Transitions](#transitions)
6. [Breakpoints](#breakpoints)
7. [Z-Index Layers](#z-index-layers)
8. [Responsive Variations](#responsive-variations)

---

## Color System

The color system is organized into three categories:
- **Raw colors**: Base color values
- **Functional colors**: Colors used for UI elements (with `--color-` prefix)
- **Theme colors**: Colors used for decorative elements (with `--theme-` prefix)

### Raw Colors

Raw color values that serve as the foundation for both functional and theme colors.

| Token | Value | Description |
|-------|-------|-------------|
| `--raw-black` | `#141413` | Primary black |
| `--raw-black-light` | `#3d3d3a` | Secondary black |
| `--raw-gray-dark` | `#6c6b68` | Used for muted text |
| `--raw-gray-medium` | `#878680` | Used for muted light text |
| `--raw-gray-light` | `#b0aea6` | Used for footer text |
| `--raw-border-alt` | `#cccbc8` | Border color alternative |
| `--raw-beige-dark` | `#c4c2bd` | Used for featured borders |
| `--raw-beige-medium` | `#e1dacd` | Stroke beige/neutral cream |
| `--raw-beige-light` | `#E8E6DD` | Light beige color |
| `--raw-cream-dark` | `#f0eee7` | Background/code background |
| `--raw-cream-light` | `#faf9f5` | Light background |
| `--raw-white` | `#ffffff` | White |
| `--raw-terracotta-primary` | `#cc7c5e` | Primary brand color, used for links |
| `--raw-terracotta-secondary` | `#D9A28E` | Secondary brand color, used for link hover |
| `--raw-terracotta-bright` | `#D87756` | Bright terracotta accent |
| `--raw-bronze` | `#CCA584` | Bronze/warm metallic color |
| `--raw-warm-beige` | `#EEE6D3` | Warm beige |
| `--raw-sage-dark` | `#7C8D62` | Dark sage green |
| `--raw-sage-light` | `#C0D0CA` | Light sage/pale sage |
| `--raw-soft-stone` | `#BFC0BB` | Soft stone gray |
| `--raw-soft-blue` | `#759AC8` | Soft blue |
| `--raw-violet-dark` | `#8989D7` | Dark violet/dusty violet |
| `--raw-violet-light` | `#CBCADA` | Light violet/purple |

### Functional Colors

Colors used for UI elements and functional components.

| Token | Value | Description | Mobile | Desktop |
|-------|-------|-------------|--------|---------|
| `--color-black` | `var(--raw-black)` | Primary black | Same | Same |
| `--color-white` | `var(--raw-white)` | White | Same | Same |
| `--color-text-primary` | `var(--raw-black)` | Primary text color | Same | Same |
| `--color-text-secondary` | `var(--raw-black-light)` | Secondary text color | Same | Same |
| `--color-text-muted` | `var(--raw-gray-dark)` | Muted text color | Same | Same |
| `--color-text-muted-light` | `var(--raw-gray-medium)` | Light muted text | Same | Same |
| `--color-footer-text` | `var(--raw-gray-light)` | Footer text color | Same | Same |
| `--color-background` | `var(--raw-cream-dark)` | Page background | Same | Same |
| `--color-background-light` | `var(--raw-cream-light)` | Light background | Same | Same |
| `--color-default-bg` | `var(--color-background)` | Default background | Same | Same |
| `--color-light-bg` | `var(--color-background-light)` | Light background | Same | Same |
| `--page-bg` | `var(--color-default-bg)` | Page background fallback | Same | Same |
| `--color-error` | `#dc3545` | Error state color | Same | Same |
| `--color-link` | `var(--raw-terracotta-primary)` | Link color | Same | Same |
| `--color-link-hover` | `var(--raw-terracotta-secondary)` | Link hover color | Same | Same |
| `--color-highlight` | `rgba(205, 152, 131, 0.7)` | Text highlight color | Same | Same |
| `--color-code-bg` | `var(--color-background)` | Code block background | Same | Same |
| `--color-border-light` | `rgba(20, 20, 19, 0.1)` | Light border color | Same | Same |
| `--color-border-medium` | `var(--raw-border-alt)` | Medium border color | Same | Same |
| `--color-border-featured` | `var(--raw-beige-dark)` | Featured border color | Same | Same |
| `--color-overlay-dark` | `rgba(0, 0, 0, 0.7)` | Dark overlay | Same | Same |
| `--color-overlay-light` | `rgba(255, 255, 255, 0.1)` | Light overlay | Same | Same |
| `--color-overlay-lighter` | `rgba(255, 255, 255, 0.2)` | Lighter overlay | Same | Same |
| `--color-overlay-background-light` | `rgba(250, 249, 245, 0.9)` | Light background overlay | Same | Same |
| `--color-backdrop-dark` | `rgba(0, 0, 0, 0.95)` | Dark backdrop | Same | Same |
| `--color-shadow` | `rgba(0, 0, 0, 0.5)` | Shadow | Same | Same |
| `--color-shadow-light` | `rgba(0, 0, 0, 0.12)` | Light shadow | Same | Same |

### Theme Colors

Colors used for decorative purposes and theming.

| Token | Value | Description |
|-------|-------|-------------|
| `--theme-primary` | `var(--raw-terracotta-primary)` | Primary theme color |
| `--theme-secondary` | `var(--raw-terracotta-secondary)` | Secondary theme color |
| `--theme-accent` | `var(--raw-terracotta-bright)` | Accent theme color |
| `--theme-stroke-hero-outer` | `var(--raw-terracotta-secondary)` | Hero outer stroke |
| `--theme-stroke-hero-inner` | `var(--raw-terracotta-primary)` | Hero inner stroke |
| `--theme-stroke-beige` | `var(--raw-beige-medium)` | Beige stroke |
| `--theme-stroke-green` | `var(--raw-sage-light)` | Green stroke |
| `--theme-stroke-purple` | `var(--raw-violet-light)` | Purple stroke |
| `--theme-terracotta` | `#D87756` | Terracotta color |
| `--theme-pale-sage` | `#C0D0CA` | Pale sage color |
| `--theme-soft-stone` | `#BFC0BB` | Soft stone color |
| `--theme-warm-beige` | `#EEE6D3` | Warm beige color |
| `--theme-neutral-cream` | `#e1dacd` | Neutral cream color |
| `--theme-warm-bronze` | `#CCA584` | Warm bronze color |
| `--theme-sage-green` | `#7C8D62` | Sage green color |
| `--theme-soft-blue` | `#759AC8` | Soft blue color |
| `--theme-dusty-violet` | `#8989D7` | Dusty violet color |
| `--theme-light-purple` | `#CBCADA` | Light purple color |

## Typography

### Font Families

| Token | Value | Description |
|-------|-------|-------------|
| `--font-primary` | `'Styrene A', sans-serif` | Primary sans-serif font |
| `--font-secondary` | `'Tiempos Text', "Georgia", serif` | Secondary serif font |

### Font Weights

| Token | Value | Description |
|-------|-------|-------------|
| `--font-weight-light` | `300` | Light weight - for less emphasis |
| `--font-weight-normal` | `400` | Normal weight - default body text |
| `--font-weight-medium` | `500` | Medium weight - slight emphasis |
| `--font-weight-semibold` | `600` | Semi-bold weight - used in logo and UI elements |
| `--font-weight-bold` | `700` | Bold weight - headings and strong emphasis |
| `--font-weight-black` | `900` | Black weight - extreme emphasis, used in logo slash |

### Font Sizes

| Token | Value (Mobile) | Value (Desktop) | Description |
|-------|----------------|-----------------|-------------|
| `--font-size-h1` | `2.25rem (36px)` | `3.5rem (56px)` | Heading 1 |
| `--font-size-h2` | `1.875rem (30px)` | `2.5rem (40px)` | Heading 2 |
| `--font-size-h3` | `1.5rem (24px)` | `2rem (32px)` | Heading 3 |
| `--font-size-h4` | `1.25rem (20px)` | `1.5rem (24px)` | Heading 4 |
| `--font-size-h5` | `1rem (16px)` | `1.125rem (18px)` | Heading 5 |
| `--font-size-body` | `1rem (16px)` | `1rem (16px)` | Primary body text (Styrene) |
| `--font-size-body-serif` | `1.25rem (20px)` | `1.25rem (20px)` | Secondary body text (Tiempos) |
| `--font-size-lead` | `1.25rem (20px)` | `1.5rem (24px)` | Lead paragraphs |
| `--font-size-small` | `0.875rem (14px)` | `0.875rem (14px)` | Small text |

### Legacy Font Sizes (Deprecated)

These legacy font sizes are maintained for backward compatibility but should be replaced with the typography scale variables above.

| Token | Value | Replacement |
|-------|-------|-------------|
| `--font-size-base` | `16px` | Use `--font-size-body` instead (1rem) |
| `--font-size-small` | `14px` | Matches `--font-size-small` in new system (0.875rem) |
| `--font-size-medium` | `20px` | Use `--font-size-body-serif` or `--font-size-lead` instead (1.25rem) |
| `--font-size-xmedium` | `22px` | Use `--font-size-h4` instead |
| `--font-size-large` | `24px` | Use `--font-size-h3` instead |
| `--font-size-xlarge` | `32px` | Use `--font-size-h2` instead |

### Line Heights

| Token | Value | Description |
|-------|-------|-------------|
| `--line-height-heading` | `1.1` | For H1-H3 where tight leading enhances visual impact |
| `--line-height-subheading` | `1.2` | For H4-H5 or hero subtitles with slightly more open spacing |
| `--line-height-body` | `1.6` | For long-form content (paragraphs, post bodies) |
| `--line-height-tight` | `1.4` | For shorter paragraphs or intro blurbs |
| `--line-height-loose` | `1.75` | For footer, labels, or small body text needing more openness |
| `--line-height-tag` | `1.2` | For tags, metadata, dates and other small text elements |

## Spacing

| Token | Value | Description |
|-------|-------|-------------|
| `--side-padding` | `40px` (mobile) <br> Fluid: `clamp(40px, calc(40px + (180 - 40) * ((100vw - 768px) / (1440 - 768))), 120px)` (768px-1440px) | Side padding that scales with viewport |
| `--spacing-xs` | `8px` | Extra small spacing |
| `--spacing-sm` | `16px` | Small spacing |
| `--spacing-md` | `20px` | Medium spacing |
| `--spacing-lg` | `40px` | Large spacing |
| `--spacing-xl` | `60px` | Extra large spacing |
| `--spacing-xxl` | `80px` | Extra extra large spacing |

## Borders and Radiuses

### Core Border Properties

| Token | Value | Description |
|-------|-------|-------------|
| `--radius-sm` | `0.5rem (8px)` | Smaller elements |
| `--radius-md` | `0.75rem (12px)` | Medium elements |
| `--radius-lg` | `1.5rem (24px)` | Larger elements |
| `--radius-pill` | `9999px` | Pill/capsule shaped elements (fully rounded) |
| `--border-width` | `1.5px` | Standard border width |

### Component-specific Border Radiuses

| Token | Mobile Value | Desktop Value | Description |
|-------|--------------|---------------|-------------|
| `--btn-radius` | `var(--radius-sm)` (8px) | `var(--radius-md)` (12px) | Button border radius |
| `--card-radius` | `var(--radius-md)` (12px) | `var(--radius-lg)` (24px) | Card border radius |
| `--tag-radius` | `var(--radius-lg)` (24px) | `var(--radius-lg)` (24px) | Tag border radius (unchanged) |
| `--image-radius` | `var(--radius-md)` (12px) | `var(--radius-lg)` (24px) | Image border radius |
| `--form-radius` | `var(--radius-md)` (12px) | `var(--radius-md)` (12px) | Form control border radius (unchanged) |

## Transitions

| Token | Value | Description |
|-------|-------|-------------|
| `--transition-speed` | `0.3s` | Standard transition duration |
| `--transition-standard` | `all var(--transition-speed) ease` | Standard transition for most elements |

## Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `--breakpoint-sm` | `768px` | Small devices (tablets) |
| `--breakpoint-md` | `992px` | Medium devices (small laptops) |
| `--breakpoint-lg` | `1200px` | Large devices (desktops) |
| `--breakpoint-xl` | `1440px` | Extra large devices (large desktops) |

## Z-Index Layers

| Token | Value | Description |
|-------|-------|-------------|
| `--z-index-mobile-menu` | `900` | Mobile menu layer |
| `--z-index-header` | `1000` | Header layer |
| `--z-index-mobile-toggle` | `1005` | Mobile toggle button layer |

## Responsive Variations

Some tokens have different values at different breakpoints. The tables above include mobile and desktop values where applicable. Here's a summary of key responsive changes:

### Typography (768px+)
- Headings scale up significantly from mobile to desktop
- Lead paragraphs increase from 1.25rem to 1.5rem

### Border Radiuses (992px+)
- Buttons increase from 8px to 12px radius
- Cards increase from 12px to 24px radius
- Images increase from 12px to 24px radius

### Side Padding (768px-1440px)
- Fluid scaling from 40px at 768px viewport to 120px at 1440px viewport

## Fluid Typography Utilities

Fluid typography classes that smoothly scale between viewport sizes:

| Class | Value | Description |
|-------|-------|-------------|
| `.fluid-h1` | `clamp(2.25rem, calc(1.5rem + 2.5vw), 3.5rem)` | Fluid H1 |
| `.fluid-h2` | `clamp(1.875rem, calc(1.5rem + 1.25vw), 2.5rem)` | Fluid H2 |
| `.fluid-h3` | `clamp(1.5rem, calc(1.25rem + 0.9375vw), 2rem)` | Fluid H3 |
| `.fluid-hero-title` | `clamp(2.5rem, calc(1.5rem + 3.75vw), 4.5rem)` | Fluid hero title |
| `.fluid-cta-title` | `clamp(2.25rem, calc(1.5rem + 2.25vw), 3.25rem)` | Fluid CTA title |
| `.fluid-lead` | `clamp(1.25rem, calc(1.125rem + 0.5vw), 1.5rem)` | Fluid lead paragraph |