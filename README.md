# Shivang Gupta — DevOps Portfolio

A modern, highly interactive, and optimized developer portfolio built with React, Vite, and Tailwind CSS. Designed specifically for DevOps, Cloud, and Site Reliability Engineering showcases.

Live Site: [shivanggupta.in](https://shivanggupta.in)
Terminal Subdomain: [terminal.shivanggupta.in](https://terminal.shivanggupta.in)

---

## 🪐 Visual Highlights & Features

- **Spacetime Grid Bending Effect**: A high-performance HTML5 Canvas animation that bends and warps grid intersections dynamically toward the cursor to simulate gravitational pull.
- **Dynamic Shooting Stars**: An optimized particle animation pathing falling stars at controlled time intervals down the screen.
- **Micro-Animations & Typing Loop**: Custom-built infinite typing subtitles loop for role titles with customizable speed/pause times.
- **Supercharged Bundle Optimization**:
  - Unused templates, hooks, and boilerplate components pruned.
  - **JS Bundle Size**: Reduced by **45%** (from 325kB to 187kB).
  - **CSS Size**: Reduced by **66%** (from 68kB to 22.8kB).
- **Responsive Navigation & Scroll Indicator**: Fully viewport-adaptive interface with a bounce-animation centered scroll indicator.

---

## ⚙️ Configuration & Customization

All configurations and content details are decoupled from visual templates and managed inside [src/utils/data.ts](src/utils/data.ts).

### Adjusting Physics & Stars
You can tweak the spacetime gravity well parameters in `src/utils/data.ts` using `gravityGridConfig`:
```typescript
export const gravityGridConfig = {
  gridGap: 55,          // Spacing between grid lines (in pixels)
  influenceRadius: 800, // Distance of cursor pull influence (in pixels)
  gravityStrength: 40,  // How much the grid lines bend towards the mouse
  glowOpacity: 0.10,    // Radial cursor glow intensity
  minStarInterval: 2,   // Minimum delay between shooting stars (in seconds)
  maxStarInterval: 6,   // Maximum delay between shooting stars (in seconds)
};
```

### Adjusting Typing loop
Tweak titles and speeds using `typingConfig`:
```typescript
export const typingConfig = {
  titles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Architect"],
  speed: 80,   // Letter typing delay (in milliseconds)
  pause: 2500, // Pause duration before deleting typed words (in milliseconds)
};
```

---

## 🛠️ Tech Stack
- **Core**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages (automated via GitHub Actions CI/CD)

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```

### 3. Build Production Target
```bash
npm run build
```
