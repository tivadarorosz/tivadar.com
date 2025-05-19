# Site.json Documentation

This document explains the purpose of each parameter in `src/_data/site.json` for SEO and site functionality.

## Main Site Identity

### `title`
- **Purpose**: Main site identity
- **Used in**: Page titles, meta tags, and JSON-LD Schema
- **Example**: "Tivadar Orosz"

### `description`
- **Purpose**: Default meta description for SEO
- **Used in**: Search results when page doesn't have specific description
- **Example**: "Luxury escort and boudoir photography..."

### `url`
- **Purpose**: Full site URL
- **Used in**: Canonical URLs, sitemap, and social media cards
- **Example**: "https://www.tivadarorosz.com"

### `author`
- **Purpose**: Author name
- **Used in**: JSON-LD Schema, RSS feed, and copyright notices
- **Example**: "Tivadar Orosz"

### `copyright`
- **Purpose**: Copyright text
- **Used in**: Footers
- **Example**: "© 2025 Tivadar Orosz. All rights reserved."

## Social Media Links

### `social`
- **Purpose**: Social media links
- **Used in**: Footer, JSON-LD sameAs property, and contact sections
- **Includes**: Twitter, Instagram, Bluesky, LinkedIn

## SEO Configuration

### `seo.defaults`
- **`title`**: Page title for browser tabs and search results
- **`description`**: Meta description for search engine results pages (SERP)
- **`keywords`**: Keywords for SEO (less important for modern SEO but still useful)
- **`image`**: Default image for social media cards (Twitter, Facebook, LinkedIn)
- **`type`**: Schema.org type for regular pages
- **`schemaName`**: Site name for JSON-LD WebSite schema (describes the site as a whole, not individual pages)

### `seo.fallbacks`
- **Purpose**: Fallback descriptions when specific content types don't have descriptions
- **`article.description`**: Default for blog posts
- **`story.description`**: Default for portfolio stories

### `seo.openGraph`
- **Purpose**: Facebook/LinkedIn OpenGraph protocol settings
- **`siteName`**: Site name displayed in social shares
- **`locale`**: Language/region setting for content
- **`image`**: Default social media image dimensions and alt text

### `seo.twitter`
- **Purpose**: Twitter/X specific metadata
- **`card`**: Card type - summary_large_image shows big preview image
- **`site`**: Twitter handle for the website
- **`creator`**: Content creator handle (usually same as site)

## Assets

### `assets.cdn`
- **Purpose**: Base CDN URL for all static assets
- **Example**: "https://cdn.tivadarorosz.com"

### `assets.images`
- **`socialCard`**: Social media preview image
- **`favicon32`**: Browser favicon icon (32x32)
- **`favicon16`**: Browser favicon icon (16x16)
- **`appleTouchIcon`**: Apple device home screen icon

### `assets.fonts`
- **Purpose**: Web font files
- **Used in**: CSS @font-face declarations
- **Includes**: Styrene A font family (bold, medium, regular)

## Analytics

### `analytics.fathom`
- **Purpose**: Fathom Analytics - privacy-focused analytics service
- **`siteId`**: Site ID for tracking
- **`script`**: Script URL for analytics code

## Locations

### `locations.primary`
- **Purpose**: Primary business location
- **Used in**: Footer and JSON-LD Schema
- **Example**: "London"

### `locations.country`
- **Purpose**: Country for address
- **Used in**: JSON-LD Schema
- **Example**: "United Kingdom"

### `locations.availability`
- **Purpose**: Travel schedule
- **Used in**: Footer
- **Format**: Array of objects with `city` and `dates`

## Business Information

### `business.types`
- **Purpose**: Schema.org types
- **Used in**: JSON-LD structured data
- **Tells**: Search engines what kind of business this is
- **Example**: ["Photographer", "LocalBusiness"]

### `business.areaServed`
- **Purpose**: Service areas
- **Used in**: JSON-LD Schema
- **Description**: Locations where services are available
- **Example**: ["London", "Dubai", "Budapest", "Berlin", "Europe"]

## Usage Notes

1. When changing domains, update:
   - `url`
   - `assets.cdn`
   - Email domains in `email-protect.js`

2. For SEO optimization, update:
   - `seo.defaults.description` for better SERP snippets
   - `seo.defaults.keywords` for relevant search terms
   - `seo.defaults.image` for social media previews

3. When expanding to new locations:
   - Add to `business.areaServed`
   - Update `locations.availability` for travel dates