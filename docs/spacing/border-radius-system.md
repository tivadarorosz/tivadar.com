# Border Radius System

This document outlines the standardized border radius system used throughout the Tivadar Orosz website.

## Core Border Radius Values

| Variable | Value | Pixel Equivalent | Description |
|----------|-------|------------------|-------------|
| `--radius-sm` | 0.5rem | 8px | For smaller elements (buttons on mobile) |
| `--radius-md` | 0.75rem | 12px | For medium elements (cards on mobile, buttons on desktop) |
| `--radius-lg` | 1.5rem | 24px | For larger elements (cards on desktop) |

## Component-Specific Values (Mobile-First)

These values reference the core values but can be overridden for specific components:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--btn-radius` | `var(--radius-sm)` | Buttons (8px on mobile) |
| `--card-radius` | `var(--radius-md)` | Cards (12px on mobile) |
| `--tag-radius` | `var(--radius-lg)` | Tags (24px on both mobile and desktop) |
| `--image-radius` | `var(--radius-md)` | Images (12px on mobile) |
| `--form-radius` | `var(--radius-md)` | Form controls (12px on mobile and desktop) |

## Responsive Behavior

The border radius system is responsive, with different values for mobile and desktop viewports:

### Default (Mobile) Values

```scss
:root {
  --btn-radius: var(--radius-sm);    // 8px on mobile
  --card-radius: var(--radius-md);   // 12px on mobile
  --tag-radius: var(--radius-lg);    // 24px on mobile and desktop
  --image-radius: var(--radius-md);  // 12px on mobile
  --form-radius: var(--radius-md);   // 12px for form controls
}
```

### Desktop Values (992px and above)

```scss
@media (min-width: 992px) {
  :root {
    --btn-radius: var(--radius-md);    // 12px on desktop
    --card-radius: var(--radius-lg);   // 24px on desktop
    --tag-radius: var(--radius-lg);    // 24px on desktop (unchanged)
    --image-radius: var(--radius-lg);  // 24px on desktop
    --form-radius: var(--radius-md);   // 12px on desktop (unchanged)
  }
}
```

## Implementation Guidelines

### Basic Usage

Always use the component-specific variables rather than the core radius values when working with UI components:

```scss
.button {
  border-radius: var(--btn-radius);
}

.card {
  border-radius: var(--card-radius);
}

.form-input {
  border-radius: var(--form-radius);
}
```

### Special Cases

For unique design elements that don't fit the standard components:

1. For small UI elements similar to buttons: `var(--btn-radius)`
2. For content containers similar to cards: `var(--card-radius)`
3. For pill-shaped elements: `var(--tag-radius)` or `9999px` for perfect pills
4. For subtle rounding: `var(--radius-sm)`

### Consistency Rules

1. All buttons should use `var(--btn-radius)`
2. All cards and content blocks should use `var(--card-radius)`
3. All form elements should use `var(--form-radius)`
4. All tags and pills should use `var(--tag-radius)`
5. All images in cards should use `var(--image-radius)`

## Component Examples

### Buttons

```scss
.button {
  border-radius: var(--btn-radius);
  // Other button styles...
  
  &.button--pill {
    border-radius: 9999px; // Special case for pill buttons
  }
}
```

### Cards

```scss
.card {
  border-radius: var(--card-radius);
  overflow: hidden; // Important to contain child elements
  
  .card__image {
    border-radius: 0; // Images inside cards should not have their own radius
  }
}
```

### Form Elements

```scss
.form-input,
.form-select,
.form-textarea {
  border-radius: var(--form-radius);
  // Other form styles...
}

.form-checkbox,
.form-radio {
  border-radius: var(--radius-sm); // Smaller radius for checkboxes/radios
}
```

## Recent Changes

The border radius system was standardized in May 2025, with notable changes:

1. Replaced all hardcoded border-radius values with variables
2. Implemented responsive scaling between mobile and desktop
3. Created component-specific variables for better semantic usage
4. Updated all components to use the new system

## Related Documentation

For more information about spacing and layout, see:
- [Typography System](../typography/typography-system.md)
- [Color System](../colors/color-system.md)