# Bottom CTA Components

These are reusable call-to-action components that can be placed at the bottom of pages.

## Single Button Version

```njk
{% include "components/bottom-cta-single.njk" %}
```

With custom properties:
```njk
{% include "components/bottom-cta-single.njk" with 
  title="Need help choosing?",
  buttonText="Contact Sales",
  buttonUrl="/contact"
%}
```

## Single Button Inverted Version

Dark background with light text and button:

```njk
{% include "components/bottom-cta-single-inverted.njk" %}
```

With custom properties:
```njk
{% include "components/bottom-cta-single-inverted.njk" with 
  title="Ready to elevate your presence?",
  buttonText="Get Started",
  buttonUrl="/contact"
%}
```

## Double Button Version

```njk
{% include "components/bottom-cta-double.njk" %}
```

With custom properties:
```njk
{% include "components/bottom-cta-double.njk" with 
  title="Ready to get started?",
  button1Text="Get Started",
  button1Url="/signup",
  button2Text="Learn More",
  button2Url="/features"
%}
```

## Available Properties

### Single Button
- `title` - The CTA headline (default: "Not sure what fits? Let's find fit together.")
- `buttonText` - The button text (default: "Share Your Vision")
- `buttonUrl` - The button URL (default: "/contact")
- `customClass` - Additional CSS class to add

### Double Button
- `title` - The CTA headline (default: "Not sure what fits? Let's find fit together.")
- `button1Text` - First button text (default: "Share Your Vision")
- `button1Url` - First button URL (default: "/contact")
- `button2Text` - Second button text (default: "View Portfolio")
- `button2Url` - Second button URL (default: "/portfolio")
- `customClass` - Additional CSS class to add

## Styling

The components use these CSS classes:
- `.bottom-cta-section` - The main container
- `.bottom-cta-title` - The title/headline
- `.bottom-cta-buttons` - Container for multiple buttons

These components also support the existing classes:
- `.cta-section`, `.cta-title`, `.cta-buttons` (homepage)
- `.pricing-cta-section`, `.pricing-cta-title` (pricing page)