# Phase 2 Implementation: Clean Typography Theming

This document shows the clean implementation of the typography theming system after removing legacy data attributes. This is intended for implementation in Fall 2025 after confirming there are no dependencies on the legacy attributes.

```scss
// ==============================================
// TYPOGRAPHY THEMING SYSTEM (FINAL VERSION)
// ==============================================
// Standardized typography theming based on semantic data attributes

// Create a heading color system that can be applied at the section level
[data-heading-theme="default"] {
  --heading-color: var(--color-black);
  --heading-accent-color: var(--color-black-light);
}

[data-heading-theme="light"] {
  --heading-color: var(--color-white);
  --heading-accent-color: rgba(255, 255, 255, 0.85);
}

[data-heading-theme="muted"] {
  --heading-color: var(--color-text-muted);
  --heading-accent-color: var(--color-text-muted-light);
}

// Text theme for paragraph and body text
[data-text-theme="default"] {
  --text-color: var(--color-black);
  --text-muted-color: var(--color-text-muted);
  --text-accent-color: var(--color-black-light);
}

[data-text-theme="light"] {
  --text-color: var(--color-white);
  --text-muted-color: rgba(255, 255, 255, 0.7);
  --text-accent-color: var(--color-white);
}

// Size variants - Clean, semantic naming
[data-text-size="small"] {
  --component-text-size: var(--font-size-small);
}

[data-text-size="body"] {
  --component-text-size: var(--font-size-body);
}

[data-text-size="body-serif"] {
  --component-text-size: var(--font-size-body-serif);
}

[data-text-size="lead"] {
  --component-text-size: var(--font-size-lead);
}

// Heading sizes
[data-text-size="h1"] {
  --component-text-size: var(--font-size-h1);
}

[data-text-size="h2"] {
  --component-text-size: var(--font-size-h2);
}

[data-text-size="h3"] {
  --component-text-size: var(--font-size-h3);
}

[data-text-size="h4"] {
  --component-text-size: var(--font-size-h4);
}

[data-text-size="h5"] {
  --component-text-size: var(--font-size-h5);
}

// Set default values to match current styling
:root {
  --heading-color: var(--color-black);
  --heading-accent-color: var(--color-black-light);
  --text-color: var(--color-black);
  --text-muted-color: var(--color-text-muted);
  --text-accent-color: var(--color-black-light);
  --component-text-size: var(--font-size-body);
}

// Utility classes that consume these variables
.themed-heading {
  color: var(--heading-color);
  
  &:hover {
    color: var(--heading-accent-color);
  }
}

.themed-text {
  color: var(--text-color);
  font-size: var(--component-text-size);
}

.themed-text-muted {
  color: var(--text-muted-color);
  font-size: var(--component-text-size);
}
```

## Removed Legacy Attributes

The following legacy attributes have been removed in this clean implementation:

- `[data-text-size="base"]` - Replaced with `[data-text-size="body"]`
- `[data-text-size="medium"]` - Replaced with `[data-text-size="body-serif"]`
- `[data-text-size="large"]` - Replaced with `[data-text-size="h3"]`
- `[data-text-size="xlarge"]` - Replaced with `[data-text-size="h2"]`

## New Semantic Attributes

The following new semantic attributes were added to complete the typography system:

- `[data-text-size="h1"]` - For primary headings
- `[data-text-size="h4"]` - For quaternary headings
- `[data-text-size="h5"]` - For quinary headings
- `[data-text-size="lead"]` - For lead paragraphs

This final implementation provides a complete, semantically-named set of typography controls that align perfectly with our font size token system.