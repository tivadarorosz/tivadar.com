# Site.json Structure Migration Guide

## Key Changes Mapping

### Basic Properties
- `site.title` → `site.identity.title`
- `site.author` → `site.identity.name`
- `site.url` → `site.identity.url`
- `site.description` → `site.identity.description`
- `site.copyright` → `site.identity.copyright`

### SEO Properties
- `site.seo.defaults.*` → `site.seo.meta.defaults.*`
- `site.seo.fallbacks.*` → `site.seo.meta.fallbacks.*`
- `site.seo.openGraph.*` → `site.seo.social.openGraph.*`
- `site.seo.twitter.*` → `site.seo.social.twitter.*`
- `site.sitemap.*` → `site.seo.technical.sitemap.*`
- `site.feed.*` → `site.seo.technical.feed.*`

### Social Links
- `site.social.*` → `site.integrations.social.*`

### Assets
- `site.assets.cdn` → `site.assets.cdn.base`
- `site.assets.images.*` → `site.assets.cdn.images.*`
- Font structure completely changed to array

### Business
- `site.business.types` → `site.business.entity.types`
- `site.business.organization` → `site.business.entity.name`
- `site.business.areaServed` → `site.business.service.areas`
- `site.locations.*` → `site.business.service.locations.*`

### Analytics
- `site.analytics.*` → `site.integrations.analytics.*`

## Template Update Examples

### Basic References
```nunjucks
<!-- Old -->
{{ site.author }}
{{ site.url }}{{ page.url }}

<!-- New -->
{{ site.identity.name }}
{{ site.identity.url }}{{ page.url }}
```

### SEO References
```nunjucks
<!-- Old -->
{{ site.seo.defaults.description }}
{{ site.seo.openGraph.locale }}

<!-- New -->
{{ site.seo.meta.defaults.description }}
{{ site.seo.social.openGraph.locale }}
```

### Asset References
```nunjucks
<!-- Old -->
{{ site.assets.images.favicon32 }}

<!-- New -->
{{ site.assets.cdn.images.favicon32 }}
```