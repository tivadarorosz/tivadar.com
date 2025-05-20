# Typography System Updates

This document tracks significant changes to the typography system.

## May 2025 Updates

### 1. Renamed `--font-size-body-secondary` to `--font-size-body-serif`

**Rationale:**
- More clearly indicates the purpose of the variable (serif font text)
- Provides better semantic clarity that this variable is specifically for the Tiempos Text font usage
- Eliminates potential confusion with `--font-size-lead` which had identical values on mobile
- Better describes the conceptual role of this size in the type system

**Implementation:**
- Updated all references in SCSS files throughout the codebase
- Updated documentation to reflect the new variable name
- No visual changes as the value remained the same (1.25rem / 20px)

**Files affected:**
- `src/styles/_tokens.scss`
- `src/styles/_typography.scss`
- `src/styles/components/_column-grid.scss`
- `src/styles/components/_column-grid-image.scss`
- `src/styles/pages/_pricing.scss`
- `src/styles/pages/_post.scss`
- `docs/typography/typography-system.md`

### 2. Typography System Structure

The typography system is now organized as follows:

1. **Primary Typography (Styrene A):**
   - `--font-size-h1` through `--font-size-h5` for headings
   - `--font-size-body` for primary body text (16px)
   - `--font-size-small` for smaller UI text (14px)

2. **Secondary Typography (Tiempos Text):**
   - `--font-size-body-serif` for serif body text (20px)
   - Used for longer-form content and secondary text blocks

3. **Lead Typography:**
   - `--font-size-lead` for lead/intro paragraphs
   - Mobile: 20px (same as body-serif)
   - Desktop: 24px (larger than body-serif)

This organization provides more clarity about the intended usage of each text size in the system and emphasizes the distinct roles of the sans-serif and serif typefaces.