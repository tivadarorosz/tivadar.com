# Typography Documentation

This section documents the typography system used throughout the Tivadar Orosz website.

## Contents

1. [Typography System Overview](./typography-system.md)
   - New typography scale
   - Mobile-first values
   - Desktop override values
   - Font families and weights
   - Implementation details

2. [Current Typography Catalog](./current-typography-catalog.md)
   - Visual examples of all type styles
   - Usage guidelines
   - Complete reference
   
3. [Typography System Updates](./typography-updates.md)
   - Recent changes and improvements
   - Rationale for updates
   - Naming convention changes
   
4. [Legacy Token Deprecation](./typography-deprecation.md)
   - Deprecated tokens
   - Migration guide
   - Replacement mappings
   - Timeline
   
5. [Data Attribute Migration](./data-attribute-migration.md)
   - Attribute naming alignment
   - Backwards compatibility strategy
   - Implementation phases
   - Testing plan
   
6. [Font Weight System](./font-weight-system.md)
   - Comprehensive font weight tokens
   - Weight usage guidelines
   - Component examples
   - Implementation details

## Key Features

The typography system is built around two primary typefaces:

- **Styrene A**: A contemporary sans-serif used for headings and UI elements
- **Tiempos Text**: A refined serif used for body copy and some featured content

The system implements:

- A responsive, mobile-first approach with different scales for mobile and desktop
- Consistent type hierarchy with defined heading levels
- Standardized line heights for different content contexts
- Strategic use of font weights to create visual hierarchy

## Recent Updates

- **May 2025**: Standardized typography system
- **May 2025**: Updated component styling to use typography variables consistently

## Implementation

The typography system is implemented in the `_tokens.scss` file with CSS custom properties (variables). It follows a mobile-first approach with desktop overrides using media queries.

```scss
// Mobile-first defaults
:root {
  --font-size-h1: 2.25rem;   // 36px
  --font-size-h2: 1.875rem;  // 30px
  // ...more variables
}

// Desktop overrides
@media (min-width: 768px) {
  :root {
    --font-size-h1: 3.5rem;    // 56px
    --font-size-h2: 2.5rem;    // 40px
    // ...more overrides
  }
}
```

## Related Documentation

- [Color System](../colors/color-system.md)
- [Spacing & Layout](../spacing/index.md)