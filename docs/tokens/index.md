# Design Tokens Documentation

This folder contains comprehensive documentation for the tivadarorosz.com design system tokens.

## Available Documentation

### [Token Reference](./tokens-reference.md)
Complete reference for all design tokens used in the project, including:
- Color system (raw, functional, and theme colors)
- Typography (fonts, weights, sizes, line heights)
- Spacing
- Borders and radiuses
- Transitions
- Breakpoints
- Z-index layers
- Responsive variations
- Fluid typography utilities

## Design System Architecture

The tivadarorosz.com design system follows a token-based approach organized in layers:

1. **Raw tokens**: Base values that serve as the foundation (e.g., raw colors)
2. **Semantic tokens**: Purpose-based tokens that reference raw tokens (e.g., text colors, background colors)
3. **Component tokens**: Component-specific tokens that reference semantic tokens (e.g., button radius, card radius)

## Token Organization

Tokens are organized by function and prefix:

- **Color system**:
  - Raw colors (`--raw-*`): Base color values
  - Functional colors (`--color-*`): UI elements
  - Theme colors (`--theme-*`): Decorative elements

- **Typography**:
  - Font families (`--font-*`)
  - Font weights (`--font-weight-*`)
  - Font sizes (`--font-size-*`)
  - Line heights (`--line-height-*`)

- **Spacing**: Consistent spacing scale (`--spacing-*`)

- **Borders**: Border properties and component-specific radiuses

## Responsive Design

The system implements responsive design through:
- Mobile-first breakpoints
- Responsive token values (different values at different breakpoints)
- Fluid scaling for typography and spacing

## Usage Guidelines

1. **Prioritize token usage**: Always use tokens instead of hardcoded values
2. **Respect semantics**: Use tokens based on their semantic meaning, not their visual value
3. **Component consistency**: Use component tokens for specific elements
4. **Fluid typography**: Apply fluid typography classes intentionally, not globally

## Updating Tokens

When updating tokens:
1. Update the raw token value first
2. Test all components that use derived tokens
3. Update this documentation accordingly