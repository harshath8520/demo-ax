# 🚀 Quick Start Guide - Aurax Website

## ⚡ Get Started in 3 Steps

### Step 1: Open the Website
Simply double-click `index.html` or open it in your browser:
```
file:///d:/Aurax/AX WEBSITE/Website/index.html
```

### Step 2: Add Your Content

#### A. Add Your Reel Videos
1. Place your MP4 videos in the `videos/` folder
2. Open `script.js`
3. Update the `reelsData` array (around line 6):

```javascript
const reelsData = [
    {
        id: 1,
        title: "Your Reel Title Here",
        category: "Social Media",
        thumbnail: "images/your-thumbnail.jpg",
        video: "videos/your-video.mp4"
    },
    // Add more reels...
];
```

#### B. Update Contact Information
Open `index.html` and find the contact section (around line 250):

```html
<!-- Update these -->
<p>hello@auraxcreative.com</p>     ← Your email
<p>+91 98765 43210</p>              ← Your phone
```

#### C. Update Social Media Links
Find the social links section (around line 280):

```html
<a href="https://instagram.com/yourhandle">Instagram</a>
<a href="https://youtube.com/yourchannel">YouTube</a>
<a href="https://wa.me/919876543210">WhatsApp</a>
```

### Step 3: Deploy (Optional)

#### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `Website` folder
3. Your site is live!

#### Option B: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access at `yourusername.github.io/repo-name`

---

## 🎨 Quick Customizations

### Change Colors
Edit `styles.css` (line 10-15):
```css
:root {
    --primary-blue: #4F46E5;      ← Change this
    --secondary-cyan: #06B6D4;     ← And this
    --accent-purple: #7C3AED;      ← And this
}
```

### Change Company Name
Find and replace "AURAX" in `index.html`:
- Header logo (line 34)
- Footer (line 440)

### Change Tagline
Edit `index.html` (line 65):
```html
<h1 class="hero-title">
    We Build Brands<br>
    <span class="gradient-text">That People Remember</span>
</h1>
```

---

## 📁 File Overview

```
Website/
├── index.html       ← Main page (edit content here)
├── styles.css       ← All styling (edit colors/design here)
├── script.js        ← Interactivity (edit reel data here)
├── README.md        ← Full documentation
├── images/          ← Put images here
└── videos/          ← Put reel videos here
```

---

## ✅ Checklist

Before going live, make sure you've:

- [ ] Added your reel videos to `videos/` folder
- [ ] Updated reel data in `script.js`
- [ ] Changed contact email and phone
- [ ] Updated social media links
- [ ] Replaced placeholder images
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Optimized images and videos

---

## 🆘 Common Issues

### Videos not playing?
- Check file format is MP4
- Ensure file paths in `script.js` are correct
- Try opening in Chrome (best compatibility)

### Animations not working?
- Make sure JavaScript is enabled
- Clear browser cache
- Try a different browser

### Mobile menu not opening?
- Check JavaScript console for errors
- Ensure `script.js` is loaded correctly

---

## 📞 Need Help?

Check the full `README.md` for detailed documentation!

---

**Ready to launch? Just open `index.html` and see your new website! 🎉**
