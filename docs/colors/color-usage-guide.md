# Color Usage Guide

This document explains how to use the color system effectively in components and layouts.

## Primary UI Elements

### Buttons

| Button Type | Background | Text | Border | Hover State |
|-------------|------------|------|--------|-------------|
| Primary | `--color-black` | `--color-white` | none | `--color-black-light` background |
| Secondary | `--color-white` | `--color-black` | `--color-border-light-alt` | `--color-background-light` background |
| Tertiary | transparent | `--color-black` | none | `--color-background` background |
| Inverted | `--color-white` | `--color-black` | none | `--color-background-light` background |
| CTA/Accent | `--color-stroke-hero-inner` | `--color-white` | none | `--color-stroke-hero-outer` background |

### Text Links

Default styling:
- Text: `--color-link` (#cc7c5e)
- Hover: `--color-link-hover` (#D9A28E)
- No underline by default
- Underline on hover

Inverted links (for dark backgrounds):
- Text: `--color-white`
- Hover: semi-transparent white (rgba(255, 255, 255, 0.7))

## Component Backgrounds

| Component | Background Color | Border |
|-----------|------------------|--------|
| Page Sections | `--color-background` or `--color-white` | none |
| Cards | `--color-background-light` | `--color-border-light` or none |
| Forms | `--color-background` | none |
| Form Inputs | `--color-background-light` | `--color-border-light-alt` |
| Header/Footer | `--color-black` | none |
| Featured/Highlight Sections | `--color-background` | `--color-border-featured` |

## Hero Components

The hero components use a distinctive dual-stroke pattern:
- Outer stroke: `--color-stroke-hero-outer` (#D9A28E)
- Inner stroke: `--color-stroke-hero-inner` (#cc7c5e)

This creates a signature branded look that should be maintained consistently.

## Content Categories & Article Theming

The article palette colors can be used to visually categorize content:

| Content Category | Primary Color | Secondary Color |
|------------------|---------------|----------------|
| Photography | `--color-terracotta` | `--color-warm-bronze` |
| Web Design | `--color-sage-green` | `--color-pale-sage` |
| Branding | `--color-dusty-violet` | `--color-light-purple` |
| Privacy | `--color-soft-blue` | `--color-stroke-purple` |
| General | `--color-neutral-cream` | `--color-warm-beige` |

## Form Elements

### Input States

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | `--color-border-light-alt` | `--color-background-light` | `--color-black` |
| Hover | `--color-black` | `--color-white` | `--color-black` |
| Focus | `--color-black` | `--color-white` | `--color-black` |
| Disabled | `--color-border-light` | `--color-background` | `--color-text-muted` |
| Error | `--color-error` | `--color-background-light` | `--color-black` |

### Checkboxes & Radio Buttons

| State | Border | Background | Checked Color |
|-------|--------|------------|---------------|
| Default | `--color-border-light-alt` | `--color-background-light` | `--color-black` |
| Hover | `--color-black` | `--color-white` | `--color-black` |
| Checked | `--color-black` | `--color-white` | `--color-black` |
| Disabled | `--color-border-light` | `--color-background` | `--color-text-muted` |

## Accessible Color Combinations

These combinations meet WCAG AA standards for contrast ratio (4.5:1 for normal text, 3:1 for large text):

| Background | Text | Notes |
|------------|------|-------|
| `--color-white` | `--color-black` | High contrast (16:1) |
| `--color-white` | `--color-black-light` | Good contrast (8:1) |
| `--color-background-light` | `--color-black` | Good contrast (13:1) |
| `--color-background` | `--color-black` | Good contrast (12:1) |
| `--color-black` | `--color-white` | High contrast (16:1) |
| `--color-black` | `--color-footer-text` | Acceptable for large text only (3:1) |

## Notification Colors

| Type | Background | Text | Border |
|------|------------|------|--------|
| Error/Alert | Light red | `--color-error` | `--color-error` |
| Success | Light green | Dark green | Medium green |
| Info | Light blue | Dark blue | Medium blue |
| Warning | Light yellow | Dark brown | Medium brown |

## Decorative Accents

The decorative stroke colors should be used for:
- Section dividers
- Pull quotes
- Featured content highlights
- Card accents
- Category indicators

## Overlay Usage

The overlay colors are designed for specific purposes:

| Overlay | Purpose |
|---------|---------|
| `--color-overlay-dark` | Image overlays for text readability |
| `--color-overlay-light` | Subtle highlights on dark backgrounds |
| `--color-overlay-lighter` | Moderate highlights on dark backgrounds |
| `--color-overlay-background-light` | Semi-transparent content backgrounds |
| `--color-backdrop-dark` | Modal/dialog backdrops |

## Implementation Examples

### Button Component

```scss
.button {
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: var(--btn-radius);
  transition: var(--transition-standard);
  
  &:hover {
    background-color: var(--color-black-light);
  }
  
  &.button--secondary {
    background-color: var(--color-white);
    color: var(--color-black);
    border: var(--border-width) solid var(--color-border-light-alt);
    
    &:hover {
      background-color: var(--color-background-light);
    }
  }
  
  &.button--accent {
    background-color: var(--color-stroke-hero-inner);
    
    &:hover {
      background-color: var(--color-stroke-hero-outer);
    }
  }
}
```

### Card Component

```scss
.card {
  background-color: var(--color-background-light);
  border-radius: var(--card-radius);
  
  .card__title {
    color: var(--color-black);
  }
  
  .card__meta {
    color: var(--color-text-muted);
  }
  
  &.card--featured {
    border: var(--border-width) solid var(--color-border-featured);
  }
  
  &.card--category-photography {
    border-top: 3px solid var(--color-terracotta);
  }
  
  &.card--category-privacy {
    border-top: 3px solid var(--color-soft-blue);
  }
}
```