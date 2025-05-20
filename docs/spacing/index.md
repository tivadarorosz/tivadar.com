# Spacing & Layout Documentation

This section documents the spacing system, border radius, and layout principles used throughout the Tivadar Orosz website.

## Contents

1. [Border Radius System](./border-radius-system.md)
   - Core border radius values
   - Component-specific values
   - Responsive behavior
   - Implementation guidelines
   - Component examples

2. Spacing System (Coming Soon)
   - Core spacing variables
   - Margins and padding guidelines
   - Responsive spacing
   - Grid gutters

3. Layout Principles (Coming Soon)
   - Grid system
   - Container widths
   - Responsive breakpoints
   - Side padding

## Current Spacing Variables

From the tokens.scss file, these are the current spacing variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `--side-padding` | 40px (mobile), fluid (desktop) | Horizontal padding for page containers |
| `--spacing-xs` | 8px | Extra-small spacing |
| `--spacing-sm` | 16px | Small spacing |
| `--spacing-md` | 20px | Medium spacing |
| `--spacing-lg` | 40px | Large spacing |
| `--spacing-xl` | 60px | Extra-large spacing |
| `--spacing-xxl` | 80px | Double-extra-large spacing |

## Breakpoints

| Variable | Value | Description |
|----------|-------|-------------|
| `--breakpoint-sm` | 768px | Small devices (tablets) |
| `--breakpoint-md` | 992px | Medium devices (desktops) |
| `--breakpoint-lg` | 1200px | Large devices (larger desktops) |
| `--breakpoint-xl` | 1440px | Extra-large devices (wide screens) |

## Border Radius System

The website uses a standardized border radius system with responsive values that change between mobile and desktop viewports.

### Core Border Radius Values

| Variable | Value | Pixel Equivalent | Description |
|----------|-------|------------------|-------------|
| `--radius-sm` | 0.5rem | 8px | For smaller elements |
| `--radius-md` | 0.75rem | 12px | For medium elements |
| `--radius-lg` | 1.5rem | 24px | For larger elements |
| `--radius-pill` | 9999px | - | For fully rounded pill/capsule elements |

### Component-Specific Radius

Component-specific variables provide semantic meaning and allow for responsive adjustments:

```scss
// Mobile values
--btn-radius: var(--radius-sm);    // 8px on mobile
--card-radius: var(--radius-md);   // 12px on mobile
--image-radius: var(--radius-md);  // 12px on mobile

// Desktop values (min-width: 992px)
@media (min-width: 992px) {
  :root {
    --btn-radius: var(--radius-md);    // 12px on desktop
    --card-radius: var(--radius-lg);   // 24px on desktop
    --image-radius: var(--radius-lg);  // 24px on desktop
  }
}
```

This approach allows for consistent yet responsive styling across different viewport sizes.

## Recent Updates

- **May 2025**: Added `--radius-pill` token for pill-shaped elements
- **May 2025**: Standardized border radius system
- **May 2025**: Implemented fluid side padding
- **May 2025**: Fixed layout issues for city grids in iPad view

## Implementation Highlights

### Responsive Side Padding

The site uses a fluid padding scale between 768px and 1440px viewport widths:

```scss
@media (min-width: 768px) {
  :root {
    --side-padding: clamp(
      40px, /* minimum value */
      calc(40px + (180 - 40) * ((100vw - 768px) / (1440 - 768))), /* fluid scaling formula */
      120px /* maximum value */
    );
  }
}
```

This creates a smooth scaling of horizontal padding from 40px at 768px viewport width to 120px at 1440px viewport width.

### Fluid Scaling Formula

The fluid scaling formula used in the side padding is:

```
base-value + (max-value - base-value) * ((100vw - min-viewport) / (max-viewport - min-viewport))
```

This formula creates a proportional scaling between the minimum and maximum values based on the current viewport width.

## Related Documentation

- [Typography System](../typography/typography-system.md)
- [Fluid Typography](../typography/typography-system.md#fluid-typography)
- [Color System](../colors/color-system.md)