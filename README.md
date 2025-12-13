# Where We've Loved Each Other ❤️
An interactive love map to celebrate our relationship anniversary

## 📁 Project Structure

love-map/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── memories.js      # OUR DATA 
├── script.js        # Application logic 
└── README.md        # This file

## How to Add Memories (permanent vs in-memory)
1. Temporary (session-only): Use "Add Memory" in the app — it will add a new memory at the current map center, but it only lives in the page state; it is not saved to your files or server.
2. Permanent: To add a memory permanently, edit memories.js and add a new object to the memories array (a sample JSON object is below)

## 📸 How to Add Photos

**Option 1: Imgur (Recommended)**
1. Go to [imgur.com](https://imgur.com)
2. Click "New post"
3. Upload your photo
4. Right-click image → "Copy image address"
5. Paste as `photo` URL

**Option 2: Google Drive**
1. Upload to Google Drive
2. Right-click → Get link → Change to "Anyone with link"
3. Replace `/view?usp=sharing` with `/preview`
4. Use that URL

## 🎵 How to Add Voice Notes

1. Record 10-20 second clips on your phone
2. Go to [vocaroo.com](https://vocaroo.com)
3. Upload your recording
4. Click "Copy link"
5. Paste as `audio` URL in memories.js

**Example:**
```javascript
audio: "https://vocaroo.com/1a2b3c4d.mp3"
```

## 🗺️ How to Get Coordinates

**Method 1: Google Maps**
1. Go to [Google Maps](https://maps.google.com)
2. Right-click any location
3. Click the coordinates at the top (e.g., 18.9441, 72.8232)
4. Use first number as `lat`, second as `lng`

**Method 2: LatLong.net**
1. Go to [latlong.net](https://www.latlong.net/)
2. Search your location
3. Copy the coordinates

## ✨ Features

### 📅 Timeline Mode
- Click "Timeline" button
- Drag slider to relive memories chronologically
- Perfect for showing our journey together

### 🎵 Play All Audio
- Click "Play All" to hear every voice note in sequence
- Shows progress: "Playing 2/5"
- Auto-plays like an audiobook of our love story

### ✨ Add Memory
- Click "Add Memory"
- She (or you) can add new memories directly on the map
- Places pin at current map center
- Perfect for when she wants to add her own memories later!

## 🎨 Customization Options

### Change Colors
In `styles.css`, find `#c41e3a` (red) and replace with:
- `#ff1493` - Hot pink
- `#8b4513` - Brown/earthy
- `#4169e1` - Royal blue
- Any hex color you want!

### Change Map Style
In `script.js`, line 13, replace OpenStreetMap with:

**Watercolor style:**
```javascript
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
    maxZoom: 18,
    attribution: '© Stamen Design'
}).addTo(map);
```

**Dark mode:**
```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© CartoDB'
}).addTo(map);
```

### Make the Golden "Home" Pin Special
Set `isGolden: true` for your most important memory (usually "Home")

## 🌐 Deploy Online (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your folder
3. Deploy in 60 seconds

## 💡 Pro Tips

### For Maximum Impact:
1. **Add 20-30 memories minimum** - Include random spots like:
   - "The Uber that got lost for 45 minutes"
   - "Hospital parking lot when your mom had surgery"
   - "Bus stop where we had our first argument"
   - Random coffee shops, parks, street corners

2. **Voice notes are KILLER** - Even a 5-second "I love you" hits hard

3. **Add a future pin** - Somewhere far away (Bali, Paris, Iceland) labeled "Year 10?" with a promise

4. **Make "Home" special** - Use the golden marker, add a recording saying something meaningful

5. **Test everything first** - Click every pin, play every audio, drag the timeline

### Timeline Works Best With:
- Chronological dates
- "First kiss" → "First date" → "First trip" order
- Exclude "Future" and "Forever" dates from timeline

## 🐛 Troubleshooting

**Map shows white screen?**
- Check internet connection (needs to load map tiles)
- Try different map style in script.js

**Photos not showing?**
- Make sure image URLs are "Direct links"
- Test URL in new browser tab
- Use `https://` not `http://`

**Audio not playing?**
- Vocaroo links must be direct MP3 links
- Test link in browser first
- Make sure URL ends in `.mp3` or is direct audio link

**Timeline not showing all memories?**
- Memories with `date: "The Future"` are excluded
- Check that sortedMemories array includes your data

## 📱 Mobile Friendly?
✅ Yes! Everything works perfectly on phones:
- Heart pins are tappable
- Audio auto-plays on tap
- Timeline slider works with touch
- "Add Memory" modal is mobile-optimized

## 🎁 Before You Gift It

### Final Checklist:
- [ ] All 20+ memories added with real data
- [ ] All photos uploaded and working
- [ ] At least 5-10 voice notes recorded
- [ ] "Home" has golden marker
- [ ] Tested on your phone
- [ ] Deployed online with secret URL
- [ ] All placeholders replaced

### Presentation Ideas:
1. **Send as link** - "I made you something... ❤️ [link]"
2. **QR code** - Print QR code that opens the map
3. **Treasure hunt** - Give clues leading to the URL
4. **Anniversary card** - Write URL inside

## 🔒 Keep It Private

The map will be public if you deploy online. To keep it private:
1. Use obscure URL that's hard to guess
2. Don't share on social media
3. Add password protection (requires backend)
4. Or keep it local - run from USB stick

## ❤️ What Makes This Gift Special

- **Personal** - Every location tells YOUR story
- **Interactive** - She can explore, not just read
- **Grows with you** - She can add new memories
- **Nostalgic** - Hearing your voice from each place
- **Reusable** - She'll open it again and again

---

## 🆘 Need Help?

Common issues:
1. **Files not linking?** - Make sure all 4 files are in same folder
2. **Coordinates wrong?** - Check lat/lng aren't swapped

Made with ❤️ for our anniversary