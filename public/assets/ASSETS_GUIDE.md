# Assets Guide

## Folder Structure

```
public/assets/
├── videos/
│   └── hero-video.mp4          # Main hero video
├── images/
│   ├── hero/
│   │   ├── hero-poster.jpg     # Video poster/thumbnail
│   │   ├── floating-1.jpg      # Floating image 1
│   │   └── floating-2.jpg      # Floating image 2
│   ├── categories/             # Category images
│   ├── products/               # Product images
│   ├── editorial/              # Editorial section images
│   ├── instagram/              # Instagram feed images
│   ├── testimonials/           # Testimonial images
│   └── story/                  # Story section images
```

## How to Add Assets

### Videos
1. Place your video file in `public/assets/videos/`
2. Name it appropriately (e.g., `hero-video.mp4`)
3. Reference it in components: `/assets/videos/hero-video.mp4`

### Images
1. Place images in the appropriate subfolder
2. Use descriptive names (e.g., `floating-1.jpg`, `product-blazer-1.jpg`)
3. Reference them: `/assets/images/hero/floating-1.jpg`

## File Requirements

### Hero Video
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9 or 9:16 (portrait)
- **File Size**: Optimize for web (under 10MB if possible)

### Hero Images
- **Floating Images**: 400x600px or similar portrait ratio
- **Poster Image**: 800x1200px or similar portrait ratio
- **Format**: JPG or WebP
- **Optimization**: Compress images before adding

## Usage in Components

```tsx
// Video
<video src="/assets/videos/hero-video.mp4" />

// Image
<img src="/assets/images/hero/floating-1.jpg" alt="Description" />
```

## Notes

- All assets in `public/` are served from the root URL
- Use `/assets/...` paths (starting with `/`) not `./assets/...`
- Vite will automatically serve files from the `public` folder
- Consider using WebP format for better compression
