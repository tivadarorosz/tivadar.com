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

## Implementation

The new typography scale is implement in the `_tokens.scss` file with mobile-first variables and desktop overrides using media queries. The complete implementation looks like this:

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