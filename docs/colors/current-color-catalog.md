# Current Color Catalog

This document provides a visual reference of all colors currently used in the design system. Each color is shown with its CSS variable name, hexadecimal value, and a visual swatch.

> **Note:** For a comprehensive reference of all tokens including colors, see the [Token Reference](../tokens/tokens-reference.md).

## Color System Architecture

The color system is organized into three categories:
- **Raw colors**: Base color values (`--raw-*` prefix)
- **Functional colors**: Colors used for UI elements (`--color-*` prefix)
- **Theme colors**: Colors used for decorative elements (`--theme-*` prefix)

## Raw Colors

These are the foundational color values that serve as the base for both functional and theme colors.

### Neutral Colors

| Preview | Variable | Hex Value | Description |
|:-------:|----------|-----------|-------------|
| ![#141413](https://via.placeholder.com/20/141413/000000?text=+) | `--raw-black` | #141413 | Primary black |
| ![#3d3d3a](https://via.placeholder.com/20/3d3d3a/000000?text=+) | `--raw-black-light` | #3d3d3a | Secondary black |
| ![#6c6b68](https://via.placeholder.com/20/6c6b68/000000?text=+) | `--raw-gray-dark` | #6c6b68 | Dark gray for muted text |
| ![#878680](https://via.placeholder.com/20/878680/000000?text=+) | `--raw-gray-medium` | #878680 | Medium gray for muted light text |
| ![#b0aea6](https://via.placeholder.com/20/b0aea6/000000?text=+) | `--raw-gray-light` | #b0aea6 | Light gray for footer text |
| ![#cccbc8](https://via.placeholder.com/20/cccbc8/000000?text=+) | `--raw-border-alt` | #cccbc8 | Border alternative color |
| ![#c4c2bd](https://via.placeholder.com/20/c4c2bd/000000?text=+) | `--raw-beige-dark` | #c4c2bd | Dark beige for borders |
| ![#e1dacd](https://via.placeholder.com/20/e1dacd/000000?text=+) | `--raw-beige-medium` | #e1dacd | Medium beige |
| ![#E8E6DD](https://via.placeholder.com/20/E8E6DD/000000?text=+) | `--raw-beige-light` | #E8E6DD | Light beige |
| ![#f0eee7](https://via.placeholder.com/20/f0eee7/000000?text=+) | `--raw-cream-dark` | #f0eee7 | Dark cream for backgrounds |
| ![#faf9f5](https://via.placeholder.com/20/faf9f5/000000?text=+) | `--raw-cream-light` | #faf9f5 | Light cream for backgrounds |
| ![#ffffff](https://via.placeholder.com/20/ffffff/000000?text=+) | `--raw-white` | #ffffff | White |

### Brand Colors - Warm Palette

| Preview | Variable | Hex Value | Description |
|:-------:|----------|-----------|-------------|
| ![#cc7c5e](https://via.placeholder.com/20/cc7c5e/000000?text=+) | `--raw-terracotta-primary` | #cc7c5e | Primary terracotta color |
| ![#D9A28E](https://via.placeholder.com/20/D9A28E/000000?text=+) | `--raw-terracotta-secondary` | #D9A28E | Secondary terracotta color |
| ![#D87756](https://via.placeholder.com/20/D87756/000000?text=+) | `--raw-terracotta-bright` | #D87756 | Bright terracotta color |
| ![#CCA584](https://via.placeholder.com/20/CCA584/000000?text=+) | `--raw-bronze` | #CCA584 | Bronze/warm metallic color |
| ![#EEE6D3](https://via.placeholder.com/20/EEE6D3/000000?text=+) | `--raw-warm-beige` | #EEE6D3 | Warm beige color |

### Brand Colors - Cool Palette

| Preview | Variable | Hex Value | Description |
|:-------:|----------|-----------|-------------|
| ![#7C8D62](https://via.placeholder.com/20/7C8D62/000000?text=+) | `--raw-sage-dark` | #7C8D62 | Dark sage green |
| ![#C0D0CA](https://via.placeholder.com/20/C0D0CA/000000?text=+) | `--raw-sage-light` | #C0D0CA | Light sage/pale sage |
| ![#BFC0BB](https://via.placeholder.com/20/BFC0BB/000000?text=+) | `--raw-soft-stone` | #BFC0BB | Soft stone gray |
| ![#759AC8](https://via.placeholder.com/20/759AC8/000000?text=+) | `--raw-soft-blue` | #759AC8 | Soft blue |
| ![#8989D7](https://via.placeholder.com/20/8989D7/000000?text=+) | `--raw-violet-dark` | #8989D7 | Dark violet |
| ![#CBCADA](https://via.placeholder.com/20/CBCADA/000000?text=+) | `--raw-violet-light` | #CBCADA | Light violet/purple |

## Functional Colors (UI Elements)

Colors used for UI elements and functional components, referencing the raw colors.

### Text Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![#141413](https://via.placeholder.com/20/141413/000000?text=+) | `--color-text-primary` | `var(--raw-black)` | Primary text color |
| ![#3d3d3a](https://via.placeholder.com/20/3d3d3a/000000?text=+) | `--color-text-secondary` | `var(--raw-black-light)` | Secondary text color |
| ![#6c6b68](https://via.placeholder.com/20/6c6b68/000000?text=+) | `--color-text-muted` | `var(--raw-gray-dark)` | Muted text color |
| ![#878680](https://via.placeholder.com/20/878680/000000?text=+) | `--color-text-muted-light` | `var(--raw-gray-medium)` | Light muted text |
| ![#b0aea6](https://via.placeholder.com/20/b0aea6/000000?text=+) | `--color-footer-text` | `var(--raw-gray-light)` | Footer text color |

### Background Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![#f0eee7](https://via.placeholder.com/20/f0eee7/000000?text=+) | `--color-background` | `var(--raw-cream-dark)` | Primary background |
| ![#faf9f5](https://via.placeholder.com/20/faf9f5/000000?text=+) | `--color-background-light` | `var(--raw-cream-light)` | Light background |
| ![#f0eee7](https://via.placeholder.com/20/f0eee7/000000?text=+) | `--color-default-bg` | `var(--color-background)` | Default background |
| ![#faf9f5](https://via.placeholder.com/20/faf9f5/000000?text=+) | `--color-light-bg` | `var(--color-background-light)` | Light background |

### Interactive Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![#dc3545](https://via.placeholder.com/20/dc3545/000000?text=+) | `--color-error` | #dc3545 | Error state color |
| ![#cc7c5e](https://via.placeholder.com/20/cc7c5e/000000?text=+) | `--color-link` | `var(--raw-terracotta-primary)` | Link color |
| ![#D9A28E](https://via.placeholder.com/20/D9A28E/000000?text=+) | `--color-link-hover` | `var(--raw-terracotta-secondary)` | Link hover color |
| ![#cd9883](https://via.placeholder.com/20/cd9883/000000?text=+) | `--color-highlight` | rgba(205, 152, 131, 0.7) | Text highlight color |
| ![#f0eee7](https://via.placeholder.com/20/f0eee7/000000?text=+) | `--color-code-bg` | `var(--color-background)` | Code background |

### Border Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![rgba(20, 20, 19, 0.1)](https://via.placeholder.com/20/141413/000000?text=+) | `--color-border-light` | rgba(20, 20, 19, 0.1) | Light border (10% opacity) |
| ![#cccbc8](https://via.placeholder.com/20/cccbc8/000000?text=+) | `--color-border-medium` | `var(--raw-border-alt)` | Medium border |
| ![#c4c2bd](https://via.placeholder.com/20/c4c2bd/000000?text=+) | `--color-border-featured` | `var(--raw-beige-dark)` | Featured border |

### Overlay & Special Effects

| Variable | Value | Description |
|----------|-------|-------------|
| `--color-overlay-dark` | rgba(0, 0, 0, 0.7) | Dark overlay |
| `--color-overlay-light` | rgba(255, 255, 255, 0.1) | Light overlay |
| `--color-overlay-lighter` | rgba(255, 255, 255, 0.2) | Lighter overlay |
| `--color-overlay-background-light` | rgba(250, 249, 245, 0.9) | Light background overlay |
| `--color-backdrop-dark` | rgba(0, 0, 0, 0.95) | Dark backdrop |
| `--color-shadow` | rgba(0, 0, 0, 0.5) | Standard shadow |
| `--color-shadow-light` | rgba(0, 0, 0, 0.12) | Light shadow |

## Theme Colors (Decorative Elements)

Colors used for decorative purposes and theming.

### Brand Theme Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![#cc7c5e](https://via.placeholder.com/20/cc7c5e/000000?text=+) | `--theme-primary` | `var(--raw-terracotta-primary)` | Primary theme color |
| ![#D9A28E](https://via.placeholder.com/20/D9A28E/000000?text=+) | `--theme-secondary` | `var(--raw-terracotta-secondary)` | Secondary theme color |
| ![#D87756](https://via.placeholder.com/20/D87756/000000?text=+) | `--theme-accent` | `var(--raw-terracotta-bright)` | Accent theme color |

### Decorative Stroke Colors

| Preview | Variable | Value | Description |
|:-------:|----------|-------|-------------|
| ![#D9A28E](https://via.placeholder.com/20/D9A28E/000000?text=+) | `--theme-stroke-hero-outer` | `var(--raw-terracotta-secondary)` | Hero outer stroke |
| ![#cc7c5e](https://via.placeholder.com/20/cc7c5e/000000?text=+) | `--theme-stroke-hero-inner` | `var(--raw-terracotta-primary)` | Hero inner stroke |
| ![#e1dacd](https://via.placeholder.com/20/e1dacd/000000?text=+) | `--theme-stroke-beige` | `var(--raw-beige-medium)` | Beige stroke |
| ![#c0d0ca](https://via.placeholder.com/20/c0d0ca/000000?text=+) | `--theme-stroke-green` | `var(--raw-sage-light)` | Green stroke |
| ![#cbcada](https://via.placeholder.com/20/cbcada/000000?text=+) | `--theme-stroke-purple` | `var(--raw-violet-light)` | Purple stroke |

### Article Palette Colors

These colors are used for blog post backgrounds and decorative elements.

| Preview | Variable | Hex Value | Description |
|:-------:|----------|-----------|-------------|
| ![#D87756](https://via.placeholder.com/20/D87756/000000?text=+) | `--theme-terracotta` | #D87756 | Terracotta accent |
| ![#C0D0CA](https://via.placeholder.com/20/C0D0CA/000000?text=+) | `--theme-pale-sage` | #C0D0CA | Pale sage accent |
| ![#BFC0BB](https://via.placeholder.com/20/BFC0BB/000000?text=+) | `--theme-soft-stone` | #BFC0BB | Soft stone accent |
| ![#EEE6D3](https://via.placeholder.com/20/EEE6D3/000000?text=+) | `--theme-warm-beige` | #EEE6D3 | Warm beige accent |
| ![#E1DACD](https://via.placeholder.com/20/e1dacd/000000?text=+) | `--theme-neutral-cream` | #e1dacd | Neutral cream accent |
| ![#CCA584](https://via.placeholder.com/20/CCA584/000000?text=+) | `--theme-warm-bronze` | #CCA584 | Warm bronze accent |
| ![#7C8D62](https://via.placeholder.com/20/7C8D62/000000?text=+) | `--theme-sage-green` | #7C8D62 | Sage green accent |
| ![#759AC8](https://via.placeholder.com/20/759AC8/000000?text=+) | `--theme-soft-blue` | #759AC8 | Soft blue accent |
| ![#8989D7](https://via.placeholder.com/20/8989D7/000000?text=+) | `--theme-dusty-violet` | #8989D7 | Dusty violet accent |
| ![#CBCADA](https://via.placeholder.com/20/CBCADA/000000?text=+) | `--theme-light-purple` | #CBCADA | Light purple accent |

## Color Relationships

### Text Hierarchy
- Primary Text: `--color-text-primary` (via `--raw-black`)
- Secondary Text: `--color-text-secondary` (via `--raw-black-light`)
- Tertiary/Muted Text: `--color-text-muted` (via `--raw-gray-dark`)
- Footer Text: `--color-footer-text` (via `--raw-gray-light`)

### Background Levels
- Primary Background: `--color-background` (via `--raw-cream-dark`)
- Secondary Background: `--color-background-light` (via `--raw-cream-light`)
- Contrast Background: `--color-white` (via `--raw-white`)

### Brand Color Usage
The site's signature terracotta colors appear in:
- Links: `--color-link` (via `--raw-terracotta-primary`)
- Hero strokes: `--theme-stroke-hero-inner` and `--theme-stroke-hero-outer`
- Theme colors: `--theme-primary`, `--theme-secondary`, `--theme-accent`
- Article palette: `--theme-terracotta`

## Legacy Support

For backward compatibility, the following legacy variables are maintained:

- `--color-black-light` → Now use `--color-text-secondary`
- `--color-stroke-hero-outer` → Now use `--theme-stroke-hero-outer` 
- `--color-stroke-hero-inner` → Now use `--theme-stroke-hero-inner`
- `--color-stroke-beige` → Now use `--theme-stroke-beige`
- `--color-stroke-green` → Now use `--theme-stroke-green`
- `--color-stroke-purple` → Now use `--theme-stroke-purple`
- `--color-beige-light` → Now use `--raw-beige-light`
- `--color-border-light-alt` → Now use `--color-border-medium`

The article palette variables (`--color-terracotta`, etc.) have been completely migrated to the `--theme-` prefix system.