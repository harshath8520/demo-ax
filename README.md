# 🚀 Aurax Creative Marketing Agency - Website

## Premium Glassmorphic Design | Kakkanad, Kochi, Kerala

A high-end, cinematic creative marketing agency website featuring modern glassmorphic UI, 3D effects, and reel-first portfolio showcase.

---

## 🎨 Design Features

### Visual Style
- **Dark Mode Premium**: Deep charcoal/matte black background
- **Glassmorphic UI**: Frosted glass effects with blur and transparency
- **Blue Gradient Theme**: Electric purple to cyan gradients inspired by modern UI design
- **Cinematic Animations**: Smooth transitions, parallax scrolling, and micro-interactions
- **3D Depth Effects**: Floating cards, hover transforms, and perspective shifts

### Color Palette
```css
Primary Blue:     #4F46E5
Secondary Cyan:   #06B6D4
Accent Purple:    #7C3AED
Dark Background:  #0A0A0F
Dark Surface:     #13131A
```

---

## 📋 Sections

### 1. **Hero Section**
- Full-screen cinematic landing
- Animated gradient orbs background
- Powerful headline: "We Build Brands That People Remember"
- Dual CTAs: "Let's Build Your Brand" + "View Our Work"
- Stats showcase: 150+ Projects, 50+ Clients, 2M+ Views
- Floating card animations

### 2. **Work Section - Reel Cards**
- **9:16 vertical ratio cards** (Instagram Reels/YouTube Shorts format)
- 3D hover effects with tilt and scale
- Auto-play video preview on hover
- Click to open fullscreen modal
- Categories: Social Media, Commercial, Content Creation, etc.
- Grid layout: 3 columns (desktop), 2 (tablet), 1 (mobile)

### 3. **Services Section**
Five core services with icons:
- 🎬 Reel & Short-Form Video Editing
- 🚀 Brand Growth Content
- 📱 Social Media Marketing
- 🎥 Cinematic Ads & Promos
- 🧠 Creative Strategy & Consulting

### 4. **About Section**
- Glassmorphic card with gradient glow
- Concise agency description
- Location badge: "Based in Kakkanad, Kochi, Kerala"
- Trust-building copy

### 5. **Contact Section**
- Contact cards: Email, Phone, Location
- Social media links: Instagram, YouTube, WhatsApp
- Working contact form with validation
- Glassmorphic form design

### 6. **Footer**
- Minimal, premium design
- Aurax branding
- Location information
- Copyright notice

---

## 🛠️ Technical Stack

### Technologies
- **HTML5**: Semantic markup, SEO optimized
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, pure ES6+
- **Google Fonts**: Inter typeface

### Key Features
- ✅ Fully responsive (mobile-first)
- ✅ GPU-accelerated animations
- ✅ Intersection Observer for scroll animations
- ✅ Lazy loading for images
- ✅ Smooth scrolling
- ✅ Keyboard navigation support
- ✅ Touch-enabled for mobile
- ✅ Performance optimized
- ✅ SEO best practices

---

## 📁 File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # Interactive JavaScript
├── images/             # Image assets
│   ├── mountain-landscape.jpg
│   ├── forest-path.jpg
│   ├── serene-water-mirroring.jpg
│   ├── ocean-sunset-golden-hour.jpg
│   ├── rolling-sand-dunes.jpg
│   ├── starry-night.jpg
│   └── cascading-waterfall.jpg
└── videos/             # Video assets (to be added)
    ├── reel1.mp4
    ├── reel2.mp4
    └── ...
```

---

## 🎬 Adding Your Reel Videos

### Step 1: Create Videos Folder
Create a `videos` folder in the Website directory:
```
Website/videos/
```

### Step 2: Add Video Files
Add your reel videos as MP4 files:
- `reel1.mp4`
- `reel2.mp4`
- `reel3.mp4`
- etc.

### Step 3: Update Reel Data
Edit `script.js` and update the `reelsData` array:

```javascript
const reelsData = [
    {
        id: 1,
        title: "Your Reel Title",
        category: "Social Media",
        thumbnail: "images/your-thumbnail.jpg",
        video: "videos/your-video.mp4"
    },
    // Add more reels...
];
```

### Video Specifications
- **Format**: MP4 (H.264 codec recommended)
- **Aspect Ratio**: 9:16 (1080x1920 or 720x1280)
- **File Size**: Keep under 10MB for web performance
- **Duration**: 15-60 seconds ideal

---

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #4F46E5;      /* Your primary color */
    --secondary-cyan: #06B6D4;     /* Your secondary color */
    --accent-purple: #7C3AED;      /* Your accent color */
}
```

### Update Contact Information
Edit `index.html` contact section:
```html
<p>hello@auraxcreative.com</p>      <!-- Your email -->
<p>+91 98765 43210</p>              <!-- Your phone -->
<p>Kakkanad, Kochi, Kerala</p>      <!-- Your location -->
```

### Change Social Media Links
Update social links in the footer and contact section:
```html
<a href="https://instagram.com/yourhandle">Instagram</a>
<a href="https://youtube.com/yourchannel">YouTube</a>
<a href="https://wa.me/919876543210">WhatsApp</a>
```

---

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)
Deploy to any static hosting service:
- **Netlify**: Drag and drop the Website folder
- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Push to repo and enable Pages
- **Cloudflare Pages**: Connect and deploy

### Option 2: Traditional Hosting
Upload files via FTP to your web host:
1. Connect to your hosting via FTP
2. Upload all files to `public_html` or `www` folder
3. Ensure file permissions are correct
4. Access via your domain

### Option 3: Local Testing
Simply open `index.html` in a modern browser:
- Chrome (recommended)
- Firefox
- Safari
- Edge

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚡ Performance Optimization

### Already Implemented
- CSS animations use `transform` and `opacity` (GPU accelerated)
- `will-change` property for animated elements
- Lazy loading for images
- Intersection Observer for scroll animations
- RequestAnimationFrame for smooth scrolling
- Minimal dependencies (no frameworks)

### Further Optimizations
1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Minify CSS/JS**: Use build tools for production
3. **Enable Gzip**: Configure server compression
4. **CDN**: Use a CDN for static assets
5. **Caching**: Set proper cache headers

---

## 🎯 SEO Optimization

### Already Implemented
- Semantic HTML5 elements
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions
- Alt text for images
- Fast loading times
- Mobile-responsive

### Recommended Additions
1. **Add Meta Tags**:
```html
<meta property="og:title" content="Aurax Creative Marketing Agency">
<meta property="og:description" content="Creative marketing, reels, and high-impact edits">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

2. **Add Structured Data**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aurax Creative Marketing Agency",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kakkanad, Kochi",
    "addressRegion": "Kerala"
  }
}
</script>
```

3. **Create sitemap.xml**
4. **Add robots.txt**
5. **Submit to Google Search Console**

---

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
Add EmailJS library and configure in `script.js`

### Option 3: Backend API
Create a backend endpoint and update form submission in `script.js`

---

## 🎨 Design Credits

- **Inspiration**: Modern glassmorphic UI design
- **Color Scheme**: Based on uploaded reference image
- **Typography**: Inter font family (Google Fonts)
- **Icons**: Custom SVG icons

---

## 📄 License

This website is custom-built for Aurax Creative Marketing Agency.

---

## 🤝 Support

For questions or customization requests:
- **Email**: hello@auraxcreative.com
- **Location**: Kakkanad, Kochi, Kerala

---

## 🔄 Version History

### v1.0.0 (January 2026)
- ✅ Complete redesign from template
- ✅ Glassmorphic UI implementation
- ✅ 9:16 reel cards with 3D effects
- ✅ Cinematic hero section
- ✅ Full responsive design
- ✅ Performance optimizations
- ✅ SEO best practices

---

**Built with ❤️ for Aurax Creative Marketing Agency**

*Kakkanad, Kochi, Kerala*
