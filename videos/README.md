# Video Assets Folder

## 📹 Add Your Reel Videos Here

This folder is for your 9:16 vertical reel videos.

### Video Specifications

**Format Requirements:**
- **File Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 9:16 (vertical)
- **Recommended Resolutions**:
  - 1080 x 1920 (Full HD)
  - 720 x 1280 (HD)
- **File Size**: Keep under 10MB for optimal web performance
- **Duration**: 15-60 seconds ideal

### Naming Convention

Use descriptive names that match your `script.js` configuration:
```
reel1.mp4
reel2.mp4
reel3.mp4
reel4.mp4
reel5.mp4
reel6.mp4
```

### Optimization Tips

1. **Compress Videos**: Use tools like:
   - HandBrake (free, desktop)
   - Adobe Media Encoder
   - Online tools: Clideo, CloudConvert

2. **Recommended Settings**:
   - Bitrate: 2-5 Mbps
   - Frame Rate: 30fps
   - Audio: AAC, 128kbps

3. **Create Thumbnails**: Extract a frame from each video as JPG for faster loading

### Example File Structure

```
videos/
├── reel1.mp4          (Brand Launch Campaign)
├── reel2.mp4          (Product Showcase)
├── reel3.mp4          (Instagram Story Series)
├── reel4.mp4          (Viral Marketing Campaign)
├── reel5.mp4          (Brand Story Highlight)
└── reel6.mp4          (Event Coverage)
```

### After Adding Videos

1. Place your MP4 files in this folder
2. Update the `reelsData` array in `script.js` with correct file names
3. Test the website to ensure videos load properly
4. Check file sizes and optimize if needed

---

**Note**: The website will work without videos, but reel cards won't play preview videos on hover. Add your actual content for the full experience!
