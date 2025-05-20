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

## Recent Updates

- **May 2025**: Standardized border radius system
- **May 2025**: Standardized component styling system
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

## Related Documentation

- [Typography System](../typography/typography-system.md)
- [Color System](../colors/color-system.md)