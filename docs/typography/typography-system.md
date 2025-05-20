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
| `--font-size-body-secondary` | 1.25rem | 20px | Secondary body text (Tiempos) |
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
| `--font-size-body-secondary` | 1.25rem | 20px | Secondary body text (Tiempos) - unchanged |
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

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `--font-primary` | 'Styrene A', sans-serif | Primary font for headings and UI |
| `--font-secondary` | 'Tiempos Text', "Georgia", serif | Secondary font for body copy |
| `--font-weight-normal` | 400 | Normal font weight |
| `--font-weight-medium` | 500 | Medium font weight |
| `--font-weight-bold` | 700 | Bold font weight |

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
--font-size-body-secondary: 1.25rem; // 20px - Secondary body text (Tiempos)
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
    
    --font-size-body-secondary: 1.25rem; // 20px - Maintaining consistent size for Tiempos body text
    --font-size-lead: 1.5rem;  // 24px
  }
}
```