# Site.json Configuration Documentation

This document explains the complete structure and purpose of each parameter in `src/_data/site.json` for the Tivadar website.

## Table of Contents
1. [Core Identity](#core-identity)
2. [Page Descriptions](#page-descriptions)
3. [SEO Configuration](#seo-configuration)
   - [Meta Defaults](#meta-defaults)
   - [Social Media](#social-media)
   - [Technical SEO](#technical-seo)
4. [Assets](#assets)
5. [Business Information](#business-information)
6. [Integrations](#integrations)
7. [Template Usage](#template-usage)
8. [Best Practices](#best-practices)

---

## Core Identity

The root identity object contains fundamental site information.

```json
"identity": {
  "name": "Tivadar Orosz",
  "title": "Tivadar Orosz",
  "description": "Luxury escort and boudoir photography...",
  "url": "https://www.tivadar.com",
  "copyright": "© 2025 Tivadar Orosz. All rights reserved."
}
```

### Properties:
- **`name`**: Site owner/photographer name. Used in schema.org, meta tags, and content.
- **`title`**: Browser title suffix. Appears after page titles.
- **`description`**: Global site description. Fallback for meta descriptions.
- **`url`**: Full site URL without trailing slash. Used for canonical URLs and schema.
- **`copyright`**: Copyright notice for footers.

### Template Usage:
```nunjucks
{{ site.identity.name }}
{{ site.identity.url }}{{ page.url }}
<title>{{ title }} \ {{ site.identity.title }}</title>
```

---

## Page Descriptions

Centralized meta descriptions for static pages, improving SEO management.

```json
"pages": {
  "about": {
    "description": "Command the frame. Photography and strategy..."
  },
  "portfolio": {
    "description": "Exclusive stories and portraits..."
  }
}
```

### Properties:
Each page key (about, portfolio, contact, etc.) contains:
- **`description`**: Meta description for that specific page

### Template Usage:
```nunjucks
{{ site.pages[page.fileSlug].description }}
```

---

## SEO Configuration

SEO settings are organized into three logical groups.

### Meta Defaults

Core SEO metadata and fallbacks.

```json
"seo": {
  "meta": {
    "defaults": {
      "title": "Tivadar Orosz — Escort & Boudoir Photographer",
      "description": "Luxury escort and boudoir photography...",
      "keywords": "escort photography, boudoir photographer...",
      "image": "https://cdn.tivadar.com/images/twitter-card.jpg",
      "type": "website",
      "schemaName": "Tivadar Orosz — Escort & Boudoir Photographer"
    },
    "fallbacks": {
      "article": {
        "description": "Latest insights...",
        "image": "https://cdn.tivadar.com/images/twitter-card.jpg"
      },
      "story": {
        "description": "View this exclusive story...",
        "image": "https://cdn.tivadar.com/images/twitter-card.jpg"
      },
      "page": {
        "description": "Luxury escort and boudoir photography..."
      }
    }
  }
}
```

#### Properties:
- **`defaults`**: Primary SEO values
  - **`title`**: Default page title for SEO
  - **`description`**: Default meta description
  - **`keywords`**: SEO keywords (comma-separated)
  - **`image`**: Default social sharing image
  - **`type`**: Default schema.org type
  - **`schemaName`**: Site name for structured data

- **`fallbacks`**: Content-type specific defaults
  - **`article`**: For blog posts
  - **`story`**: For portfolio stories
  - **`page`**: For generic pages

### Social Media

OpenGraph and Twitter Card configurations.

```json
"social": {
  "openGraph": {
    "siteName": "Tivadar Orosz",
    "locale": "en_GB",
    "image": {
      "width": "1200",
      "height": "630",
      "alt": "Tivadar Orosz - Luxury Escort & Boudoir Photographer",
      "defaultWidth": 1200,
      "defaultHeight": 630,
      "twitterWidth": 1200,
      "twitterHeight": 675
    }
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@tivadarorosz",
    "creator": "@tivadarorosz"
  }
}
```

#### Properties:
- **`openGraph`**: Facebook/LinkedIn sharing
  - **`siteName`**: Brand name in social shares
  - **`locale`**: Language and region
  - **`image`**: Image dimensions and alt text

- **`twitter`**: Twitter/X specific settings
  - **`card`**: Card type (summary_large_image for large preview)
  - **`site`**: Site Twitter handle
  - **`creator`**: Content creator handle

### Technical SEO

Sitemap and RSS feed configurations.

```json
"technical": {
  "sitemap": {
    "changeFrequency": {
      "home": "weekly",
      "primary": "weekly",
      "posts": "monthly",
      "default": "monthly"
    },
    "priority": {
      "home": 1.0,
      "primary": 0.8,
      "posts": 0.6,
      "default": 0.5
    }
  },
  "feed": {
    "title": "Tivadar Orosz - Insights",
    "language": "en-US",
    "maxItems": 20,
    "generator": "Eleventy"
  }
}
```

#### Properties:
- **`sitemap`**: XML sitemap settings
  - **`changeFrequency`**: Update frequency by page type
  - **`priority`**: Crawl priority (0.0-1.0) by page type

- **`feed`**: RSS feed configuration
  - **`title`**: Feed title
  - **`language`**: Feed language code
  - **`maxItems`**: Maximum items in feed
  - **`generator`**: Feed generator software

---

## Assets

All CDN-hosted assets are centralized here.

```json
"assets": {
  "cdn": {
    "base": "https://cdn.tivadar.com",
    "images": {
      "socialCard": "https://cdn.tivadar.com/images/twitter-card.jpg",
      "favicon32": "https://cdn.tivadar.com/icons/favicon-32x32.png",
      "favicon16": "https://cdn.tivadar.com/icons/favicon-16x16.png",
      "appleTouchIcon": "https://cdn.tivadar.com/icons/apple-touch-icon.png"
    },
    "fonts": [
      {
        "family": "Styrene A",
        "weight": "bold",
        "formats": {
          "woff2": "https://cdn.tivadar.com/fonts/StyreneA-Bold-Web.woff2",
          "woff": "https://cdn.tivadar.com/fonts/StyreneA-Bold-Web.woff"
        }
      }
    ]
  }
}
```

### Properties:
- **`cdn.base`**: Base CDN URL
- **`cdn.images`**: Image assets
  - **`socialCard`**: Social media share image
  - **`favicon32`**: 32x32px favicon
  - **`favicon16`**: 16x16px favicon
  - **`appleTouchIcon`**: iOS home screen icon

- **`cdn.fonts`**: Web fonts array
  - **`family`**: Font family name
  - **`weight`**: Font weight (bold, medium, regular)
  - **`formats`**: Font file formats and URLs

### Template Usage:
```nunjucks
{{ site.assets.cdn.base }}/images/example.jpg
{{ site.assets.cdn.images.favicon32 }}
```

---

## Business Information

Business entity and service information for schema.org and content.

```json
"business": {
  "entity": {
    "name": "Mirelle Studio Ltd",
    "types": ["Photographer", "LocalBusiness"]
  },
  "service": {
    "areas": ["London", "Dubai", "Budapest", "Berlin", "Europe"],
    "locations": {
      "primary": "London",
      "country": "United Kingdom",
      "availability": [
        {
          "city": "Dubai",
          "startDate": "2025-06-04",
          "endDate": "2025-06-11"
        }
      ]
    }
  }
}
```

### Properties:
- **`entity`**: Business entity information
  - **`name`**: Legal business name
  - **`types`**: Schema.org business types

- **`service`**: Service details
  - **`areas`**: Service locations
  - **`locations`**: Physical location data
    - **`primary`**: Main business location
    - **`country`**: Country name
    - **`availability`**: Travel schedule
      - **`city`**: Destination city
      - **`startDate`**: ISO date format
      - **`endDate`**: ISO date format

### Template Usage:
```nunjucks
{{ site.business.entity.name }}
{{ site.business.service.locations.primary }}
{{ avail.startDate | formatAvailabilityDate(avail.endDate) }}
```

---

## Integrations

External service configurations.

```json
"integrations": {
  "analytics": {
    "fathom": {
      "siteId": "VNVXUDQT",
      "script": "https://cdn.usefathom.com/script.js"
    }
  },
  "social": {
    "twitter": "https://x.com/tivadarorosz",
    "instagram": "https://instagram.com/tivadarorosz",
    "bluesky": "https://bsky.app/profile/tivadar.com",
    "linkedin": "https://linkedin.com/in/tivadarorosz"
  }
}
```

### Properties:
- **`analytics`**: Analytics services
  - **`fathom`**: Privacy-focused analytics
    - **`siteId`**: Unique site identifier
    - **`script`**: Analytics script URL

- **`social`**: Social media profiles
  - Full URLs for each platform

### Template Usage:
```nunjucks
<script src="{{ site.integrations.analytics.fathom.script }}" 
        data-site="{{ site.integrations.analytics.fathom.siteId }}" defer></script>

{% for platform, url in site.integrations.social %}
  <a href="{{ url }}">{{ platform | capitalize }}</a>
{% endfor %}
```

---

## Template Usage

### Common Patterns

#### Meta Description Fallback Chain
```nunjucks
{{ description or site.pages[page.fileSlug].description or site.seo.meta.fallbacks.page.description or site.seo.meta.defaults.description }}
```

#### Schema.org References
```nunjucks
"@type": {{ site.business.entity.types | json }}
"name": {{ site.identity.name }}
"url": {{ site.identity.url }}
```

#### Social Media Tags
```nunjucks
<meta property="og:site_name" content="{{ site.seo.social.openGraph.siteName }}">
<meta property="og:locale" content="{{ site.seo.social.openGraph.locale }}">
<meta name="twitter:card" content="{{ site.seo.social.twitter.card }}">
```

---

## Best Practices

### 1. URL Management
- Always use full URLs without trailing slashes
- Use CDN URLs for all assets
- Keep social media URLs updated

### 2. SEO Optimization
- Keep descriptions between 150-160 characters
- Update keywords based on search trends
- Use high-quality images for social sharing
- Review meta descriptions quarterly

### 3. Asset Management
- Always use CDN for assets
- Optimize images before uploading
- Use appropriate image dimensions for each context
- Version font files if making changes

### 4. Data Formatting
- Use ISO format for dates (YYYY-MM-DD)
- Maintain consistent capitalization
- Use arrays for multiple values
- Keep nested structures shallow when possible

### 5. Maintenance Schedule
- **Weekly**: Update availability dates
- **Monthly**: Review page descriptions
- **Quarterly**: Audit SEO keywords and descriptions
- **Yearly**: Review business information and service areas

### 6. Adding New Content
1. Choose appropriate section
2. Follow existing naming conventions
3. Update this documentation
4. Test in development environment
5. Deploy and verify

### 7. Environment Considerations
- Use environment variables for sensitive data
- Consider separate configs for dev/staging/production
- Keep API keys out of site.json

---

## Migration Guide

If migrating from old structure, see [Site.json Migration Guide](./site-json-migration.md) for mapping of old to new properties.

---

## Related Files

- `/src/_includes/base.njk` - Primary template consuming site.json
- `/src/sitemap.njk` - Uses sitemap configuration
- `/src/feed.njk` - Uses RSS feed configuration
- `/eleventy.config.js` - Contains filters for data processing
- All page templates that reference site data