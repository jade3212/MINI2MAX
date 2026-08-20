# MIN 2 MAX GYM — Website

A premium, dark, cinematic single-page website for **Min 2 Max Gym** (Avadi & Veppampattu, Chennai).

## Files

```
mini2max/
├── index.html      → the whole page structure
├── css/style.css   → all styling (dark theme, yellow accent)
├── js/main.js      → all content data + interactivity
└── images/         → logo, gym photos, poster
```

## How to preview / host

- Open `index.html` directly in a browser, or
- Serve the folder with any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

All images use **relative paths**, so the folder works anywhere as-is.

---

## ✏️ Editing content (everything lives in `js/main.js`)

| What to change | Where |
|---|---|
| Official email | `CONFIG.EMAIL` (leave `""` until provided) |
| Phone numbers | `CONFIG.phones` |
| WhatsApp | `CONFIG.whatsapp` |
| Instagram accounts | `CONFIG.instagram` |
| Google Maps links | `CONFIG.maps.avadi` / `.veppampattu` |
| Opening hours | `CONFIG.hours` |
| Weekly workouts + exercises | `WORKOUTS` array (indexed Sun→Sat) |
| Equipment list | `EQUIPMENT` array |
| News / announcements | `UPDATES` array (currently empty) |
| Events | `EVENTS` array (currently empty) |
| Gallery photos + categories | `GALLERY` array |

### Adding an update (news)
Add an object to `UPDATES`:
```js
{ date: "20 Aug 2026", category: "NEW EQUIPMENT",
  title: "New machines are in", description: "...",
  image: "images/...jpg", link: "https://instagram.com/..." }
```

### Adding an event
```js
{ name: "Transformation Challenge", day: "01", month: "SEP",
  date: "01 Sep 2026", time: "6:00 AM", location: "Avadi",
  branch: "AVADI", description: "...", image: "...", registerLink: "..." }
```

---

## 🖼️ Image mapping (uploaded files → website)

### Logo
- `64ea90df…jpeg` → `images/logo.jpg` (navbar + footer)

### Gym photos → gallery & sections
| Original upload | Website file | Used in |
|---|---|---|
| `d060ea84…jpeg` | `images/hero.jpg` | Hero + contact background + gallery |
| `a862cdc1…jpeg` | `images/gym-wide-1.jpg` | Strength feature/zone + gallery |
| `cd31c436…jpeg` | `images/gym-wide-2.jpg` | Cardio feature/zone + gallery |
| `380af46a…jpeg` | `images/gym-wide-3.jpg` | Functional feature/zone + gallery |
| `226b0e01…jpeg` | `images/gym-wide-4.jpg` | Gallery |
| 8× `…1280x960…` | `images/gym-land-1..8.jpg` | Gallery + branch cards |
| 8× `…960x1280…` | `images/gym-port-1..8.jpg` | Gallery |

### NOT used (promotional posters / Instagram screenshots)
These contained on-image text (pricing, packages, phone numbers) and were excluded from the gallery per the brief:
- `6f358169…jpeg` — "GYM PACKAGES" pricing
- `1de24b97…jpeg` — "COUPLES PACKAGE"
- `2f063b15…jpeg` — ad poster with phone number
- `ea1f4fb3…jpeg` — info banner (saved as `images/poster-info.jpg` if you want to reuse it)
- `ce79a2cd…jpeg` — dark/yellow graphic (unused)

> ⚠️ **Note:** I could not visually inspect the images (no vision), so the
> **gallery category tags** (`gym` / `strength` / `cardio` / `functional` /
> `exterior`) are a *best-effort* assignment based on file dimensions and
> text-detection only. Please review `GALLERY` in `js/main.js` and re-tag
> any photo to its correct zone — it's a simple one-line edit per photo.
> The `exterior` category is currently empty; add exterior shots when available.
> Branch photos (Avadi vs Veppampattu) are placeholders — swap them with the
> correct branch images when provided.
