# Font Weight System

This document details the font weight system used throughout the Tivadar Orosz website.

## Overview

The font weight system has been expanded to include a comprehensive range of weights that cover all design needs. The system now includes six distinct weights, from light to black, providing finer control over typography hierarchy and emphasis.

## Font Weight Tokens

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--font-weight-light` | 300 | Light weight - for less emphasis |
| `--font-weight-normal` | 400 | Normal weight - default body text |
| `--font-weight-medium` | 500 | Medium weight - slight emphasis |
| `--font-weight-semibold` | 600 | Semi-bold weight - used in logo and UI elements |
| `--font-weight-bold` | 700 | Bold weight - headings and strong emphasis |
| `--font-weight-black` | 900 | Black weight - extreme emphasis, used in logo slash |

## Usage Guidelines

### When to Use Each Weight

- **Light (300)**: 
  - Secondary information
  - De-emphasized content
  - Subtle UI elements
  - Stylistic variation in large headlines

- **Normal (400)**:
  - Default body text
  - Regular paragraph content
  - Form labels and inputs
  - Secondary UI elements

- **Medium (500)**:
  - Subtitles and section headings
  - Navigation items
  - Interactive elements
  - Emphasized UI components

- **Semibold (600)**:
  - Logo elements
  - Important UI components
  - Primary navigation
  - Highlighted content

- **Bold (700)**:
  - Primary headings
  - Major call-to-action elements
  - Critical information
  - Strong emphasis

- **Black (900)**:
  - Special typographic treatments
  - Maximum emphasis
  - Logo elements (slash)
  - Brand elements requiring visual impact

## Implementation

The font weight system is implemented in the `_tokens.scss` file with CSS custom properties:

```scss
// Complete font weight system
--font-weight-light: 300;    // Light weight - for less emphasis
--font-weight-normal: 400;   // Normal weight - default body text
--font-weight-medium: 500;   // Medium weight - slight emphasis
--font-weight-semibold: 600; // Semi-bold weight - used in logo and UI elements
--font-weight-bold: 700;     // Bold weight - headings and strong emphasis
--font-weight-black: 900;    // Black weight - extreme emphasis, used in logo slash
```

## Component Examples

### Logo Elements

The logo elements use a combination of semibold and black weights:

```scss
.logo {
  font-weight: var(--font-weight-semibold);
  // Other styles...
}

.logo-slash {
  font-weight: var(--font-weight-black);
  // Other styles...
}
```

### Headings

Headings typically use medium or bold weights:

```scss
h1, h2 {
  font-weight: var(--font-weight-bold);
  // Other styles...
}

h3, h4, h5 {
  font-weight: var(--font-weight-medium);
  // Other styles...
}
```

### Button Hierarchy

Button weights reflect their importance:

```scss
.btn-primary {
  font-weight: var(--font-weight-bold);
  // Other styles...
}

.btn-secondary {
  font-weight: var(--font-weight-medium);
  // Other styles...
}

.btn-tertiary {
  font-weight: var(--font-weight-normal);
  // Other styles...
}
```

## Considerations

1. **Font Availability**: Ensure that all used font weights are available in the chosen font families (Styrene A and Tiempos Text).

2. **Performance**: Each additional font weight increases page load time. Only load the weights actually used in the design.

3. **Accessibility**: Maintain sufficient contrast between text and background, especially for lighter font weights.

4. **Consistency**: Use the weight system consistently across components to maintain visual hierarchy.

## Recent Updates

- **May 2025**: Expanded font weight system from three weights (normal, medium, bold) to six weights (light, normal, medium, semibold, bold, black)
- **May 2025**: Updated header components to use the new font weight tokens
- **May 2025**: Updated documentation to reflect the expanded font weight system