# Typography Legacy Token Deprecation

## Overview

The typography system is transitioning from the legacy token system to a more semantic, responsive typography scale. This document provides guidance on how to migrate from legacy tokens to the new system.

## Deprecated Tokens

The following tokens are now deprecated and should not be used in new code:

| Legacy Token | Value | Replacement Token | Value | Notes |
|--------------|-------|----------------|-------|-------|
| `--font-size-base` | 16px | `--font-size-body` | 1rem (16px) | Direct replacement for body text |
| `--font-size-small` | 14px | *kept as-is* | 0.875rem (14px) | Same token in the new system |
| `--font-size-medium` | 20px | `--font-size-body-serif` or `--font-size-lead` | 1.25rem (20px) | Choose based on context (serif vs lead) |
| `--font-size-xmedium` | 22px | `--font-size-h4` | 1.25rem/1.5rem | Font sizes vary by viewport |
| `--font-size-large` | 24px | `--font-size-h3` | 1.5rem/2rem | Font sizes vary by viewport |
| `--font-size-xlarge` | 32px | `--font-size-h2` | 1.875rem/2.5rem | Font sizes vary by viewport |

## Migration Guide

### When to Use Each Replacement

1. **For standard body text in the primary font (Styrene A)**
   - Replace `--font-size-base` with `--font-size-body`

2. **For body text in the secondary font (Tiempos)**
   - Replace `--font-size-medium` with `--font-size-body-serif`

3. **For lead paragraphs and introductory text**
   - Replace `--font-size-medium` with `--font-size-lead`

4. **For headings and subheadings**
   - Replace `--font-size-xmedium` with `--font-size-h4`
   - Replace `--font-size-large` with `--font-size-h3`
   - Replace `--font-size-xlarge` with `--font-size-h2`

### Benefits of the New System

1. **Responsive Typography**
   - New tokens automatically adjust between mobile and desktop sizes
   - No need for separate media queries to change font sizes

2. **Semantic Naming**
   - Names reflect the purpose (heading level, body text) not just relative size
   - More intuitive for new developers to understand the hierarchy

3. **Consistent Type Scale**
   - More disciplined approach following typographic best practices
   - Clear relationships between different text elements

## Example Migration

### Before:

```scss
.feature-title {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-medium);
  color: var(--color-black);
}

.feature-description {
  font-size: var(--font-size-medium);
  font-family: var(--font-secondary);
  line-height: 1.4;
}
```

### After:

```scss
.feature-title {
  font-size: var(--font-size-h3); // Responsive: 24px mobile, 32px desktop
  font-weight: var(--font-weight-medium);
  color: var(--color-black);
}

.feature-description {
  font-size: var(--font-size-body-serif); // 20px consistently
  font-family: var(--font-secondary);
  line-height: var(--line-height-tight);
}
```

## Timeline

- **May 2025**: Legacy tokens flagged as deprecated
- **June 2025**: All core components migrated to new system
- **July 2025**: Documentation and guidelines fully updated
- **August 2025**: New projects should exclusively use the new tokens
- **2026**: Legacy tokens will be considered for removal

## Related Documentation

- [Typography System Overview](./typography-system.md)
- [Typography System Updates](./typography-updates.md)