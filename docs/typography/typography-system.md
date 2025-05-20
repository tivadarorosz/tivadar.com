# Typography System Overview

## New Typography Scale

### Mobile-First (Default) Values

| Variable Name | Value | Pixel Equivalent | Description |
|---------------|-------|------------------|-------------|
| `--font-size-h1` | 2.25rem | 36px | Primary headings |
| `--font-size-h2` | 1.875rem | 30px | Secondary headings |
| `--font-size-h3` | 1.5rem | 24px | Tertiary headings |
| `--font-size-h4` | 1.25rem | 20px | Quaternary headings |
| `--font-size-h5` | 1rem | 16px | Quinary headings |
| `--font-size-body` | 1rem | 16px | Primary body text (Styrene) |
| `--font-size-body-serif` | 1.25rem | 20px | Secondary body text (Tiempos) |
| `--font-size-lead` | 1.25rem | 20px | Lead paragraphs |
| `--font-size-small` | 0.875rem | 14px | Small text, labels |

### Desktop Override (min-width: 768px)

| Variable Name | Value | Pixel Equivalent | Description |
|---------------|-------|------------------|-------------|
| `--font-size-h1` | 3.5rem | 56px | Primary headings |
| `--font-size-h2` | 2.5rem | 40px | Secondary headings |
| `--font-size-h3` | 2rem | 32px | Tertiary headings |
| `--font-size-h4` | 1.5rem | 24px | Quaternary headings |
| `--font-size-h5` | 1.125rem | 18px | Quinary headings |
| `--font-size-body` | 1rem | 16px | Primary body text (Styrene) - unchanged |
| `--font-size-body-serif` | 1.25rem | 20px | Secondary body text (Tiempos) - unchanged |
| `--font-size-lead` | 1.5rem | 24px | Lead paragraphs |
| `--font-size-small` | 0.875rem | 14px | Small text, labels - unchanged |

## Fluid Typography

Fluid typography allows text to scale smoothly between minimum and maximum sizes based on the viewport width, rather than jumping between fixed sizes at breakpoints. This creates a more harmonious visual experience across different device sizes.

### Implementation Using CSS Clamp

The `clamp()` function is used to create fluid typography. The syntax is:

```scss
clamp(minimum-value, preferred-value, maximum-value)
```

Where:
- **minimum-value**: The smallest the font will ever be (typically mobile size)
- **preferred-value**: A viewport-relative calculation (with vw units)
- **maximum-value**: The largest the font will ever be (typically desktop size)

### Example: Hero Text

The hero text uses fluid typography to scale smoothly from 32px on mobile to 62px on desktop:

```scss
.hero-text {
  font-size: clamp(2rem, 1.3333rem + 3.3333vw, 3.875rem); // Fluid font size (32px to 62px)
  // Other properties...
}
```

This approach:
- Sets minimum font size of 2rem (32px)
- Scales fluidly using viewport width
- Caps at maximum of 3.875rem (62px)

### When to Use Fluid Typography

Use fluid typography for:

1. **Hero elements** and main headings
2. **Key UI components** that need to maintain proportions across different viewports
3. **Section headers** that should scale naturally with the layout
4. **Featured elements** where precise size control enhances the design

For standard text and UI components, the mobile/desktop breakpoint approach is typically sufficient.

### Fluid Spacing Example

The fluid approach is also applied to spacing, such as the side padding:

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

This creates a responsive padding that smoothly scales between 40px and 120px based on the viewport width.

## Legacy Font Variables (Maintained for Backward Compatibility)

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--font-size-base` | 16px | Base font size |
| `--font-size-small` | 14px | Small text |
| `--font-size-medium` | 20px | Medium text (often used for body text in Tiempos) |
| `--font-size-xmedium` | 22px | Extra medium text |
| `--font-size-large` | 24px | Large text |
| `--font-size-xlarge` | 32px | Extra large text |

## Font Families and Weights

### Font Families

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--font-primary` | 'Styrene A', sans-serif | Primary font for headings and UI |
| `--font-secondary` | 'Tiempos Text', "Georgia", serif | Secondary font for body copy |

### Font Weights

The system includes a comprehensive set of font weights to cover all design needs:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--font-weight-light` | 300 | Light weight - for less emphasis |
| `--font-weight-normal` | 400 | Normal weight - default body text |
| `--font-weight-medium` | 500 | Medium weight - slight emphasis |
| `--font-weight-semibold` | 600 | Semi-bold weight - used in logo and UI elements |
| `--font-weight-bold` | 700 | Bold weight - headings and strong emphasis |
| `--font-weight-black` | 900 | Black weight - extreme emphasis, used in logo slash |

### Usage Guidelines

- `--font-weight-light`: Use sparingly for de-emphasized text or stylistic variation
- `--font-weight-normal`: Default for body text and general content
- `--font-weight-medium`: Primary weight for headings and emphasized UI elements
- `--font-weight-semibold`: Logo elements and important UI components
- `--font-weight-bold`: Primary call-to-action elements and major headings
- `--font-weight-black`: Special typographic treatments and maximum emphasis

### Line Heights

The typography system includes line height variables optimized for different types of content:

```scss
--line-height-heading: 1.1;    // For H1-H3 where tight leading enhances visual impact
--line-height-subheading: 1.2;  // For H4-H5 or hero subtitles with slightly more open spacing
--line-height-body: 1.6;        // For long-form content (paragraphs, post bodies)
--line-height-tight: 1.4;       // For shorter paragraphs or intro blurbs
--line-height-loose: 1.75;      // For footer, labels, or small body text needing more openness
--line-height-tag: 1.2;         // For tags, metadata, dates and other small text elements
```

## Implementation

The new typography scale is implemented in the `_tokens.scss` file with mobile-first variables and desktop overrides using media queries. The complete implementation looks like this:

```scss
// Mobile-first (default)
--font-size-h1: 2.25rem;   // 36px
--font-size-h2: 1.875rem;  // 30px
--font-size-h3: 1.5rem;    // 24px
--font-size-h4: 1.25rem;   // 20px
--font-size-h5: 1rem;      // 16px

--font-size-body: 1rem;    // 16px - Primary body text (Styrene)
--font-size-body-serif: 1.25rem; // 20px - Secondary body text (Tiempos)
--font-size-lead: 1.25rem; // 20px - Lead paragraphs
--font-size-small: 0.875rem; // 14px

// Desktop typography scale
@media (min-width: 768px) {
  :root {
    // Desktop typography scale override
    --font-size-h1: 3.5rem;    // 56px
    --font-size-h2: 2.5rem;    // 40px
    --font-size-h3: 2rem;      // 32px
    --font-size-h4: 1.5rem;    // 24px
    --font-size-h5: 1.125rem;  // 18px
    
    --font-size-body-serif: 1.25rem; // 20px - Maintaining consistent size for Tiempos body text
    --font-size-lead: 1.5rem;  // 24px
  }
}
```

## Best Practices

1. **Use semantic variables**: Choose typography variables based on their semantic purpose (e.g., `--font-size-h1` for main headings)
2. **Maintain hierarchy**: Ensure proper visual hierarchy by following the established type scale
3. **Consider fluid typography** for hero elements and key components
4. **Test across devices**: Verify readability and visual harmony across all viewport sizes
5. **Use appropriate line heights**: Match line height to content type and reading context
6. **Apply consistent font weights**: Follow weight guidelines to maintain consistent emphasis across the site