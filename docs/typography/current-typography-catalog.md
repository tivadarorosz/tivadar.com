# Typography Catalog for tivadarorosz.com

This document catalogs all font styles used in the website, organized by components and pages. It serves as a reference for understanding the current typography system and identifying any inconsistencies.

## Table of Contents

- [Core Typography Variables](#core-typography-variables)
- [Typography Base Styles](#typography-base-styles)
- [Core Typography Components](#core-typography-components)
- [Header and Navigation](#header-and-navigation)
- [Footer](#footer)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [About Page](#about-page)
  - [Post Page](#post-page)
- [Components](#components)
  - [Hero Components](#hero-components)
  - [Feature Components](#feature-components)
  - [Page Hero Component](#page-hero-component)
  - [Bottom CTA Component](#bottom-cta-component)
  - [Forms](#forms)

---

## Core Typography Variables

These are the foundational typography variables defined in `_tokens.scss`:

### Font Families

```scss
--font-primary: 'Styrene A', sans-serif;
--font-secondary: 'Tiempos Text', "Georgia", serif;
```

### Font Weights

```scss
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
```

### Font Sizes - Legacy (maintained for backward compatibility)

```scss
--font-size-base: 16px;
--font-size-small: 14px;
--font-size-medium: 20px;
--font-size-xmedium: 22px;
--font-size-large: 24px;
--font-size-xlarge: 32px;
```

### Typography Scale (Mobile-first defaults)

```scss
--font-size-h1: 2.25rem;   // 36px
--font-size-h2: 1.875rem;  // 30px
--font-size-h3: 1.5rem;    // 24px
--font-size-h4: 1.25rem;   // 20px
--font-size-h5: 1rem;      // 16px

--font-size-body: 1rem;    // 16px - Primary body text (Styrene)
--font-size-body-secondary: 1.25rem; // 20px - Secondary body text (Tiempos)
--font-size-lead: 1.25rem; // 20px - Lead paragraphs
--font-size-small: 0.875rem; // 14px
```

### Typography Scale (Desktop override)

```scss
@media (min-width: 768px) {
  :root {
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

### Typography Theming System

The website implements a theming system for typography with data attributes:

```scss
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
```

Text size variants:
```scss
[data-text-size="small"] {
  --component-text-size: var(--font-size-small);
}

[data-text-size="base"] {
  --component-text-size: var(--font-size-base);
}

[data-text-size="medium"] {
  --component-text-size: var(--font-size-medium);
}

[data-text-size="large"] {
  --component-text-size: var(--font-size-large);
}

[data-text-size="xlarge"] {
  --component-text-size: var(--font-size-xlarge);
}
```

## Typography Base Styles

Base typography styles from `_base.scss`:

| Element | Font Family | Font Size | Font Weight | Color | Additional Properties |
|---------|-------------|-----------|-------------|-------|----------------------|
| `body` | `var(--font-primary)` | (inherited) | (inherited) | `var(--color-black)` | `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, `text-rendering: optimizeLegibility` |

## Core Typography Components

Core typography styles from `_typography.scss`:

### Hero Text

| Element | Font Family | Font Size | Font Weight | Line Height | Letter Spacing | Additional |
|---------|-------------|-----------|-------------|-------------|----------------|-----------|
| `.hero-text` | (inherited) | `clamp(2rem, 1.3333rem + 3.3333vw, 3.875rem)` | `var(--font-weight-medium)` | `1` | `-0.02em` | `max-width: 18ch` |
| `.title-word` | (inherited from parent) | (inherited) | (inherited) | (inherited) | (inherited) | `margin-right: 0.15em` |

### Hero Link

| Element | Font Family | Font Size | Font Weight | Color | Additional |
|---------|-------------|-----------|-------------|-------|------------|
| `.hero-link` | (inherited) | (inherited) | (inherited) | `inherit` | `text-decoration: none`, underline with `height: 6px` (Desktop), `height: 4px` (Mobile) |

### Feature Box Typography

| Element | Font Family | Font Size | Font Weight | Color | Letter Spacing | Line Height |
|---------|-------------|-----------|-------------|-------|----------------|------------|
| `.feature-tag` | (inherited) | `var(--font-size-small)` | `var(--font-weight-medium)` | `var(--color-black)` | `0.05em` | (inherited) |
| `.feature-title` | (inherited) | `var(--font-size-h4)` | `var(--font-weight-medium)` | `var(--color-black)` | (inherited) | (inherited) |
| `.feature-description` | `var(--font-secondary)` | `var(--font-size-body-secondary)` | `300` | `var(--color-black)` | (inherited) | `1.4` |

### Two Column Section Typography

| Element | Font Family | Font Size | Font Weight | Color | Line Height |
|---------|-------------|-----------|-------------|-------|------------|
| `.left-column-title` | (inherited) | `var(--font-size-h2)` | `var(--font-weight-medium)` | `var(--color-black)` | `1.1` |
| `.right-column-text` | `var(--font-secondary)` | `var(--font-size-body-secondary)` | `300` | `var(--color-black)` | `1.4` |

### About and Portfolio Text

| Element | Font Family | Font Size | Font Weight | Line Height | Color |
|---------|-------------|-----------|-------------|-------------|-------|
| `.about p:not(.right-column-text)`, `.portfolio p:not(.right-column-text)` | `var(--font-secondary)` | `var(--font-size-body)` | (inherited) | `1.6` | (inherited) |

## Header and Navigation

Header typography styles from `components/_header.scss`:

### Logo Text

| Element | Font Family | Font Size | Font Weight | Color |
|---------|-------------|-----------|-------------|-------|
| `.logo` | (inherited) | `var(--font-size-xmedium)` | `600` | (inherited) |
| `.logo` (Mobile) | (inherited) | `1.8rem` | `700` | (inherited) |
| `.logo-text` | (inherited) | (inherited) | `600` | (inherited) |

### Desktop Navigation

| Element | Font Family | Font Size | Font Weight | Color |
|---------|-------------|-----------|-------------|-------|
| `.menu > a`, `.dropdown-wrapper > a` | (inherited) | `0.9375rem` (15px) | `var(--font-weight-normal)` | `var(--color-black)` |

### Mobile Navigation

| Element | Font Family | Font Size | Font Weight | Color | Line Height |
|---------|-------------|-----------|-------------|-------|------------|
| `.mobile-menu-nav a` | (inherited) | `var(--font-size-large)` | `var(--font-weight-medium)` | `var(--color-black)` | (inherited) |
| `.mobile-menu-link` | (inherited) | `var(--font-size-large)` | `var(--font-weight-medium)` | `var(--color-black)` | (inherited) |
| `.mobile-submenu-title` | `var(--font-primary)` | `0.9375rem` (15px) | `var(--font-weight-bold)` | `var(--color-black)` | (inherited) |
| `.mobile-submenu-link` | `var(--font-secondary)` | `1rem` (16px) | `var(--font-weight-normal)` | `var(--color-black)` | `1.2` |

### Dropdown Menu

| Element | Font Family | Font Size | Font Weight | Color | Line Height |
|---------|-------------|-----------|-------------|-------|------------|
| `.dropdown-column.dropdown-left h5` | `var(--font-primary)` | `0.875rem` | `var(--font-weight-bold)` | `var(--color-black)` | (inherited) |
| `.dropdown-link` | `var(--font-secondary)` | `1rem` | `var(--font-weight-normal)` | `var(--color-black)` | `1.2` |
| `.dropdown-insights-label` | `var(--font-primary)` | `var(--font-size-base)` | `var(--font-weight-medium)` | `#141413` | (inherited) |

## Footer

Footer typography styles from `components/_footer.scss`:

| Element | Font Family | Font Size | Font Weight | Color |
|---------|-------------|-----------|-------------|-------|
| `.site-footer` | `var(--font-primary)` | (inherited) | (inherited) | `var(--color-background-light)` |
| `.footer-logo` | (inherited) | `45px` | `var(--font-weight-bold)` | `var(--color-background-light)` |
| `.footer-menu-title` | (inherited) | `var(--font-size-base)` | `var(--font-weight-medium)` | `var(--color-background-light)` |
| `.footer-menu-items p`, `.footer-menu-items a`, `.footer-link` | (inherited) | (inherited) | (inherited) | `var(--color-footer-text)` |
| `.copyright` | (inherited) | `var(--font-size-base)` | (inherited) | `var(--color-footer-text)` |

## Pages

### Home Page

Home page typography from `pages/_home.scss`:

| Element | Font Family | Font Size | Font Weight | Color | Line Height |
|---------|-------------|-----------|-------------|-------|------------|
| `.featured-title` | `var(--font-primary)` | `var(--font-size-large)` | `var(--font-weight-medium)` | `var(--color-black)` | (inherited) |
| `.featured-post-title` | `var(--font-primary)` | `var(--font-size-base)` | `var(--font-weight-medium)` | `var(--color-black)` | `1.4` |
| `.featured-post-title` (tablet) | `var(--font-primary)` | `15px` | `var(--font-weight-medium)` | `var(--color-black)` | `1.4` |
| `.featured-post-category`, `.featured-post-date` | `var(--font-primary)` | `var(--font-size-small)` | `var(--font-weight-normal)` | Varies | `1.4` |
| `.featured-post-category`, `.featured-post-date` (tablet) | `var(--font-primary)` | `13px` | `var(--font-weight-normal)` | Varies | `1.4` |
| `.view-all-link` | `var(--font-primary)` | `var(--font-size-small)` | `var(--font-weight-medium)` | `var(--color-black)` | (inherited) |
| `.cta-title` | `var(--font-primary)` | `2rem` (Mobile), `3rem` (Desktop) | `var(--font-weight-medium)` | `var(--color-black)` | `1.2` |

### About Page

About page has minimal specific typography styles.

### Post Page

Blog post typography from `pages/_post.scss`:

| Element | Font Family | Font Size | Font Weight | Color | Line Height |
|---------|-------------|-----------|-------------|-------|------------|
| `.post-tag` | `var(--font-primary)` | `var(--font-size-small)` | `var(--font-weight-normal)` | (inherited) | (inherited) |
| `.post-title` | `var(--font-primary)` | `clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)` | `var(--font-weight-medium)` | (inherited) | `1.2` |
| `.post-meta`, `.post-date`, `.post-reading-time` | `var(--font-primary)` | `var(--font-size-md)` | `var(--font-weight-normal)` | `var(--color-grey-600)` | (inherited) |
| `.post-content` | `var(--font-secondary)` | `var(--font-size-body-secondary)` | `var(--font-weight-normal)` | (inherited) | `1.6` |
| `.post-content h2`, `.post-content h3`, `.post-content h4`, `.post-content h5`, `.post-content h6` | `var(--font-primary)` | (varies) | `var(--font-weight-medium)` | (inherited) | (inherited) |
| `.post-content h4` | `var(--font-primary)` | `clamp(1.25rem, 1rem + 1.25vw, 1.75rem)` | `var(--font-weight-medium)` | (inherited) | (inherited) |
| `.post-related-title` | `var(--font-primary)` | `var(--font-size-h3)` | `var(--font-weight-medium)` | (inherited) | (inherited) |

## Components

### Hero Components

The hero components have specialized typography:

| Element | Font Family | Font Size | Font Weight | Line Height | Other |
|---------|-------------|-----------|-------------|-------------|-------|
| `.hero-text` | (inherited) | `clamp(2rem, 1.3333rem + 3.3333vw, 3.875rem)` | `var(--font-weight-medium)` | `1` | `letter-spacing: -0.02em` |

### Feature Components

Feature box typography:

| Element | Font Family | Font Size | Font Weight | Line Height | Letter Spacing |
|---------|-------------|-----------|-------------|-------------|---------------|
| `.feature-tag` | (inherited) | `var(--font-size-small)` | `var(--font-weight-medium)` | (inherited) | `0.05em` |
| `.feature-title` | (inherited) | `var(--font-size-h4)` | `var(--font-weight-medium)` | (inherited) | (inherited) |
| `.feature-description` | `var(--font-secondary)` | `var(--font-size-body-secondary)` | `300` | `1.4` | (inherited) |

### Page Hero Component

Typography for the page heroes from `components/_page-hero.scss`:

| Element | Font Family | Font Size | Font Weight | Line Height | Color |
|---------|-------------|-----------|-------------|-------------|-------|
| `.page-hero-title` | `var(--font-primary)` | `clamp(3.5rem, 7vw, 5.5rem)` | `var(--font-weight-medium)` | `1.1` | `var(--color-black)` |
| `.page-hero-title` (Mobile) | `var(--font-primary)` | `clamp(3rem, 6vw, 4.5rem)` | `var(--font-weight-medium)` | `1.1` | `var(--color-black)` |
| `.page-hero-subtitle` | `var(--font-primary)` | `var(--font-size-lead)` | `var(--font-weight-normal)` | `1.2` | `var(--color-black)` |
| `.title-multiline .title-line` | (inherited) | (inherited) | (inherited) | `0.9` | (inherited) |

### Bottom CTA Component

Typography for the bottom CTA components:

| Element | Font Family | Font Size | Font Weight | Line Height | Color |
|---------|-------------|-----------|-------------|-------------|-------|
| `.bottom-cta-title`, `.pricing-cta-title` | `var(--font-primary)` | `var(--font-size-h2)` | `var(--font-weight-medium)` | `1.2` | `var(--color-black)` |
| `.bottom-cta-title--large` | `var(--font-primary)` | `var(--font-size-h1)` | `var(--font-weight-medium)` | `1.2` | `var(--color-black)` |
| `.cta-title` | `var(--font-primary)` | `var(--font-size-h1)` | `var(--font-weight-medium)` | `1.2` | `var(--color-black)` |
| `.bottom-cta-section.bottom-cta-section--inverted .bottom-cta-title` | `var(--font-primary)` | `var(--font-size-h1)` | `var(--font-weight-medium)` | `1.2` | `var(--color-background-light)` |

### Forms

Form-related typography from `_forms.scss`:

| Element | Font Family | Font Size | Font Weight | Color |
|---------|-------------|-----------|-------------|-------|
| `.form-label` | `var(--font-primary)` | `var(--font-size-small)` | `var(--font-weight-medium)` | `var(--color-black)` |
| `.form-input`, `.form-textarea`, `.form-select` | `var(--font-primary)` | `var(--font-size-base)` | (inherited) | `var(--color-black)` |
| `.form-checkbox label`, `.form-radio label` | `var(--font-primary)` | `var(--font-size-base)` | (inherited) | `var(--color-black)` |
| `.invalid-feedback` | `var(--font-primary)` | `var(--font-size-small)` | (inherited) | `var(--color-error)` |

## Summary of Typography System

### Key Observations

1. **Font Families**:
   - Primary font: 'Styrene A', sans-serif - Used for headings and UI elements
   - Secondary font: 'Tiempos Text', "Georgia", serif - Used for body text and longer-form content

2. **Font Weight System**:
   - Normal: 400
   - Medium: 500 (commonly used for headings)
   - Bold: 700 (used for emphasis)
   - Additional weights are occasionally hardcoded (300, 600, 900)

3. **Font Size System**:
   - Uses a combination of:
     - CSS variables for scaling (mobile and desktop variants)
     - Legacy hardcoded sizes (px)
     - Fluid typography with clamp() for responsive scaling
     - rem units for most measurements

4. **Line Heights**:
   - Headings: 1.1-1.2
   - Body text (primary): varies
   - Body text (secondary): 1.4-1.6
   - Some components use specific line heights

5. **Typography Theming**:
   - Color themes are implemented via CSS variables and data attributes
   - Supports default, light, and muted themes

6. **Responsive Adaptations**:
   - Mobile-first approach with desktop overrides
   - Fluid typography for key elements
   - Different spacing and sizes on mobile vs. desktop