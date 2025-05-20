# Typography Data Attribute Migration Plan

## Overview

This document outlines the plan for migrating the data attributes used in the typography theming system to match our new semantic typography scale. The goal is to ensure consistent naming across both the CSS variables and the data attributes that use them.

## Current State Assessment

The typography theming system defines several data attributes that set CSS custom properties for text styling:

```scss
[data-text-size="small"] {
  --component-text-size: var(--font-size-small);
}

[data-text-size="base"] {
  --component-text-size: var(--font-size-body);
}

[data-text-size="medium"] {
  --component-text-size: var(--font-size-body-serif);
}

[data-text-size="large"] {
  --component-text-size: var(--font-size-h3);
}

[data-text-size="xlarge"] {
  --component-text-size: var(--font-size-h2);
}
```

Our audit has found:
- These data attributes are defined in the CSS but not currently used in HTML templates
- No JavaScript is setting these attributes dynamically
- No utility classes reference these attributes

## Migration Mapping

| Current Data Attribute | Current Variable | New Data Attribute | New Variable |
|------------------------|------------------|-------------------|--------------|
| `[data-text-size="small"]` | `--font-size-small` | `[data-text-size="small"]` | `--font-size-small` (unchanged) |
| `[data-text-size="base"]` | `--font-size-body` | `[data-text-size="body"]` | `--font-size-body` |
| `[data-text-size="medium"]` | `--font-size-body-serif` | `[data-text-size="body-serif"]` | `--font-size-body-serif` |
| `[data-text-size="large"]` | `--font-size-h3` | `[data-text-size="h3"]` | `--font-size-h3` |
| `[data-text-size="xlarge"]` | `--font-size-h2` | `[data-text-size="h2"]` | `--font-size-h2` |

## Implementation Strategy

Since the existing data attributes don't appear to be in active use, we'll take a two-phase approach:

### Phase 1: Safe Migration (Summer 2025)

During this phase, we'll support both old and new attribute values:

```scss
// Support legacy values with appropriate comments
[data-text-size="base"] {
  --component-text-size: var(--font-size-body);
  // DEPRECATED: Use data-text-size="body" instead
}

// Add new semantic values
[data-text-size="body"] {
  --component-text-size: var(--font-size-body);
}

// etc. for other attributes
```

This ensures backward compatibility if any undetected usage of the attributes exists.

### Phase 2: Clean-up (Fall 2025)

After a sufficient testing period (minimum 8 weeks) and confirming no usage of old attributes:

```scss
// Remove legacy values
// [data-text-size="base"] - REMOVED

// Keep new semantic values only
[data-text-size="body"] {
  --component-text-size: var(--font-size-body);
}

// etc. for other attributes
```

## Documentation Updates

We'll update three key documents:

1. **Typography System Overview**: Add a section on the data attribute system
2. **Typography Deprecation Guide**: Include the data attribute mapping
3. **This Migration Plan**: Maintain as a record of the process

## Testing Plan

Before each phase:
1. Run a full site audit to confirm no new uses of deprecated attributes
2. Test all pages in dev environment with the updated CSS
3. Verify no visual regressions occur

## Timeline

| Milestone | Date | Description |
|-----------|------|-------------|
| Planning & Audit | May 2025 | Complete initial audit and plan (✓) |
| Documentation | June 2025 | Update all relevant documentation |
| Phase 1 Implementation | July 2025 | Implement dual-support CSS |
| Phase 1 Testing | July-Aug 2025 | Test for 8 weeks in production |
| Phase 2 Implementation | Sept 2025 | Remove legacy attributes |
| Final Verification | Sept 2025 | Ensure no issues in production |

## Risk Mitigation

1. **Backup Strategy**: Before each phase, create a backup of current CSS
2. **Rollback Plan**: Prepare a script to quickly revert changes if issues arise
3. **Monitoring**: Set up alerts for any console errors during transition period

## Conclusion

By following this migration plan, we will:
1. Align the data attributes with our semantic typography system
2. Improve consistency and maintainability of the CSS
3. Protect against any potential usage of the attributes not found in our audit

This cautious approach ensures we can safely and effectively update the typography theming system without disrupting the site's functionality.