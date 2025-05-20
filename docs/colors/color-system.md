# Color System Overview

## Core Color Palette

| Variable Name | Hex Value | Description |
|---------------|-----------|-------------|
| `--color-black` | #141413 | Primary black for text and UI elements |
| `--color-black-light` | #3d3d3a | Lighter black for secondary text and elements |
| `--color-text-muted` | #6c6b68 | Muted text color for less emphasis |
| `--color-background` | #f0eee7 | Primary background color |
| `--color-background-light` | #faf9f5 | Lighter background color |
| `--color-white` | #ffffff | Pure white |
| `--color-footer-text` | #b0aea6 | Footer text color |
| `--color-highlight` | rgba(205, 152, 131, 0.7) | Text highlight color |

## Page Background Colors

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--color-default-bg` | var(--color-background) | Default page background |
| `--color-light-bg` | var(--color-background-light) | Light page background |
| `--page-bg` | var(--color-default-bg) | Page background fallback |

## Semantic UI Colors

| Variable Name | Hex Value | Description |
|---------------|-----------|-------------|
| `--color-error` | #dc3545 | Error/danger notification color |
| `--color-link` | #cc7c5e | Link text color (matches hero inner stroke) |
| `--color-link-hover` | #D9A28E | Link hover color (matches hero outer stroke) |
| `--color-code-bg` | #f0eee7 | Code block background color |

## Overlay & Special Effects

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--color-overlay-dark` | rgba(0, 0, 0, 0.7) | Dark overlay for images/modals |
| `--color-overlay-light` | rgba(255, 255, 255, 0.1) | Light overlay effect |
| `--color-overlay-lighter` | rgba(255, 255, 255, 0.2) | Slightly more visible light overlay |
| `--color-overlay-background-light` | rgba(250, 249, 245, 0.9) | Semi-transparent light background |
| `--color-backdrop-dark` | rgba(0, 0, 0, 0.95) | Nearly opaque dark backdrop |
| `--color-shadow` | rgba(0, 0, 0, 0.5) | Standard shadow color |
| `--color-shadow-light` | rgba(0, 0, 0, 0.12) | Light shadow effect |
| `--color-border-light` | rgba(20, 20, 19, 0.1) | Light border color |
| `--color-border-light-alt` | #cccbc8 | Alternative light border color |
| `--color-text-muted-light` | #878680 | Lighter muted text color |

## Decorative Colors

| Variable Name | Hex Value | Description |
|---------------|-----------|-------------|
| `--color-stroke-hero-outer` | #D9A28E | Hero component outer stroke color |
| `--color-stroke-hero-inner` | #cc7c5e | Hero component inner stroke color |
| `--color-stroke-beige` | #e1dacd | Beige stroke accent color |
| `--color-stroke-green` | #c0d0ca | Green stroke accent color |
| `--color-stroke-purple` | #cbcada | Purple stroke accent color |
| `--color-border-featured` | #c4c2bd | Border color for featured elements |
| `--color-beige-light` | #E8E6DD | Light beige accent color |

## Article Palette Colors

| Variable Name | Hex Value | Description |
|---------------|-----------|-------------|
| `--color-terracotta` | #D87756 | Terracotta accent color |
| `--color-pale-sage` | #C0D0CA | Pale sage accent color |
| `--color-soft-stone` | #BFC0BB | Soft stone accent color |
| `--color-warm-beige` | #EEE6D3 | Warm beige accent color |
| `--color-neutral-cream` | #E1DACD | Neutral cream accent color |
| `--color-warm-bronze` | #CCA584 | Warm bronze accent color |
| `--color-sage-green` | #7C8D62 | Sage green accent color |
| `--color-soft-blue` | #759AC8 | Soft blue accent color |
| `--color-dusty-violet` | #8989D7 | Dusty violet accent color |
| `--color-light-purple` | #CBCADA | Light purple accent color |

## Usage Guidelines

### Text Colors

- Use `--color-black` for primary text content
- Use `--color-black-light` for secondary text content
- Use `--color-text-muted` for tertiary text content and metadata
- Use `--color-footer-text` exclusively for footer content

### Background Colors

- Use `--color-background` for main page backgrounds
- Use `--color-background-light` for card and form backgrounds
- Use `--color-white` for contrast elements on darker backgrounds

### UI Element Colors

- Use `--color-link` for all interactive text links
- Use `--color-error` for error messages and validation feedback
- Use decorative colors for accents, not for primary UI

### Component-Specific Usage

- Hero components: Use the dedicated stroke colors for consistent styling
- Featured elements: Use `--color-border-featured` for borders
- Article accents: Use the article palette colors for categorization and visual interest

## Implementation

The color system is implemented in the `_tokens.scss` file with CSS custom properties (variables). Example implementation:

```scss
:root {
  // Core Colors
  --color-black: #141413;
  --color-black-light: #3d3d3a;
  --color-text-muted: #6c6b68;
  --color-background: #f0eee7;
  --color-background-light: #faf9f5;
  --color-white: #ffffff;
  --color-footer-text: #b0aea6;
  --color-highlight: rgba(205, 152, 131, 0.7);
  
  // More color variables...
}
```

### In Component SCSS

```scss
.example-component {
  color: var(--color-black);
  background-color: var(--color-background-light);
  border: 1px solid var(--color-border-light);
}

.example-component__link {
  color: var(--color-link);
  
  &:hover {
    color: var(--color-link-hover);
  }
}
```

## Best Practices

1. **Never use hardcoded color values** in component files; always reference the color system variables
2. **Avoid adding new color variables** without discussion
3. **Use semantic color variables** (like `--color-link`) rather than palette colors directly when possible
4. **Maintain contrast ratios** for accessibility (minimum 4.5:1 for normal text, 3:1 for large text)
5. **Use opacity carefully** - prefer pre-defined semi-transparent colors from the system