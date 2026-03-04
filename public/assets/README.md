# Assets Folder Structure

This folder contains all static assets (videos, images, etc.) for the application.

## Folder Structure

```
assets/
├── videos/              # Video files
│   └── hero/           # Hero section videos
├── images/              # Image files
│   ├── hero/           # Hero section images
│   ├── categories/     # Category images
│   ├── products/       # Product images
│   ├── editorial/      # Editorial section images
│   ├── instagram/      # Instagram feed images
│   ├── testimonials/   # Testimonial images
│   └── story/          # Story section images
```

## Usage

### Videos
Place video files in `public/assets/videos/` and reference them in your components:

```tsx
<video src="/assets/videos/hero-video.mp4" />
```

### Images
Place image files in the appropriate subfolder and reference them:

```tsx
<img src="/assets/images/hero/floating-1.jpg" alt="Hero Image" />
```

## File Naming Convention

- Use lowercase letters
- Use hyphens to separate words
- Be descriptive: `hero-main-video.mp4`, `product-blazer-1.jpg`

## Supported Formats

- **Videos**: MP4, WebM
- **Images**: JPG, PNG, WebP, AVIF
