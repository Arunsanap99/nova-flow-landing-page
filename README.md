<div align="center">

# ✦ NEXORA
### A modern web experience, built from the ground up.
**Not just a landing page. A first impression that lasts.**

A sleek, responsive, and interactive developer product landing page crafted with pure HTML5, CSS3, and modern Vanilla JavaScript.

<br>

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-6366f1?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/Arunsanap99)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)
[![Built With](https://img.shields.io/badge/Made_With-HTML5_•_CSS3_•_JS-f59e0b?style=for-the-badge)](https://developer.mozilla.org/)

<br>

[🌐 Live Demo](https://github.com/Arunsanap99) · [🐛 Report a Bug](https://github.com/Arunsanap99/nexora-landing-page/issues) · [✨ Request a Feature](https://github.com/Arunsanap99/nexora-landing-page/issues)

</div>

---

## ◈ 01 — The Vision

**Nexora** is a modern landing page concept designed to demonstrate how pure web standards can craft an uncompromising, world-class digital product experience.

The goal is simple: combine clean typography, glassmorphic visual hierarchy, meaningful micro-interactions, and fully responsive layouts without relying on heavy frontend frameworks or bulky UI component libraries.

Every section is engineered to communicate value with sub-millisecond clarity, guide visitors naturally, and deliver a fluid 60 FPS experience across phones, tablets, and ultra-wide desktops.

> *Great design doesn't need complexity. It needs clarity, purpose, and relentless attention to detail.*

---

## ◈ 02 — Experience the Features

| Feature | Description | Status |
| :--- | :--- | :---: |
| 🎨 **Modern UI & Design System** | Frosted glassmorphism, subtle dot-matrix background, clean type hierarchy using Plus Jakarta Sans & JetBrains Mono. | ✅ Implemented |
| 📱 **Responsive Layout** | Flawless multi-breakpoint grid and flexbox reflow from mobile ($390\text{px}$) to desktop ($1440\text{px}+$); zero horizontal overflow. | ✅ Implemented |
| ⚡ **Zero-Dependency Lightweight** | Built purely with semantic HTML5, modern CSS3, and ES6+ JavaScript. No React, Tailwind runtime, or build-step dependencies. | ✅ Implemented |
| 🖥️ **Interactive Telemetry Console** | Multi-tab product simulator featuring live event feeds, declarative TypeScript pipeline SDK code preview, and microsecond trace waterfalls. | ✅ Implemented |
| 🌓 **Persistent Theme Switching** | Seamless toggle between Dark and Light modes with `localStorage` memory and smooth CSS custom property transitions. | ✅ Implemented |
| ❓ **Instant Searchable FAQ** | Accordion system paired with an instant real-time keyword search filter across questions and answers. | ✅ Implemented |
| 📈 **Animated Statistics** | Dynamic counters that smoothly count up when entering the viewport using the `IntersectionObserver` API. | ✅ Implemented |
| 🍞 **Receipt Confirmation Toasts** | Floating toast notification card with animated countdown progress bar, pause-on-hover, and dismiss button on form submit. | ✅ Implemented |
| 💳 **Interactive Pricing Switcher** | Monthly vs. Annual toggle with dynamic price recalculation and a 20% discount highlight badge. | ✅ Implemented |
| ♿ **Accessible by Design** | Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), keyboard focus rings, and ARIA attributes. | ✅ Implemented |

---

## ◈ 03 — Built With Purpose

<div align="center">

| Technology | Responsibility |
| :--- | :--- |
| **HTML5** | Semantic structure, document landmarks, and accessibility trees |
| **CSS3** | Modern variables, glassmorphism, responsive grids, keyframes, and transitions |
| **Vanilla JavaScript (ES6+)** | State management, live stream simulation, DOM filtering, and form validation |

</div>

<br>

> **No React. No Bootstrap. No Tailwind runtime. Just the raw, timeless fundamentals of the web platform.**

---

## ◈ 04 — Project Architecture

```plaintext
nexora-landing-page/
│
├── index.html        # Semantic HTML5 page layout & landmarks
├── style.css         # Design tokens, typography, dark/light themes, and responsive media queries
├── script.js         # Interactive state: stream simulator, tabs, FAQ filter, toasts, theme toggle
├── assets/           # Brand icons, badges, and image assets
└── README.md         # Comprehensive project documentation
```

The codebase is clean, well-commented, and decoupled so that each file handles a single responsibility with maximum maintainability.

---

## ◈ 05 — Get Started

Want to run Nexora on your machine? Follow these simple steps.

### Prerequisites
- A modern web browser (Google Chrome, Firefox, Safari, Edge, or Brave).
- Git installed on your computer.
- Visual Studio Code (recommended).

### Step 1 — Clone the Repository
```bash
git clone https://github.com/Arunsanap99/nexora-landing-page.git
```

### Step 2 — Enter the Project Directory
```bash
cd nexora-landing-page
```

### Step 3 — Launch the Website

#### Option A: Using VS Code Live Server (Recommended)
1. Open the project folder in VS Code:
   ```bash
   code .
   ```
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **Open with Live Server** (or press `Alt + L, Alt + O`).

#### Option B: Direct Browser Launch
Open `index.html` directly in any web browser by double-clicking the file or dragging it into a browser tab.

*No `npm install`, dependencies, or build toolchain required.*

---

## ◈ 06 — A Look Inside

<div align="center">

### Desktop Experience
*Sub-millisecond event streaming interface with multi-tab telemetry console*

```
+--------------------------------------------------------------------------+
|  [⚡ Novaflow]  Home  Features  About  Metrics  Pricing  FAQ  Contact  [🌓] [Get Started] |
|                                                                          |
|               Scale Real-Time Events with Sub-Millisecond Precision       |
|          Declarative, distributed streaming engine for backend teams.    |
|                                                                          |
|         [🔴 Live Stream]  [💻 Pipeline SDK]  [⚡ Trace Waterfall]        |
|  +--------------------------------------------------------------------+  |
|  |  Live Throughput: 14,892 /s   | 12:30:04 payment.authorized  0.4ms |  |
|  |  Median Latency:  0.68 ms     | 12:30:02 order.dispatched    0.7ms |  |
|  +--------------------------------------------------------------------+  |
+--------------------------------------------------------------------------+
```

### Mobile Experience
*Adaptive frosted capsule navbar with slide-out drawer navigation*

```
+---------------------------+
| [⚡] Novaflow    [🌓] [☰] |
|                           |
| Scale Real-Time Events    |
| with Sub-Millisecond      |
| Precision                 |
|                           |
| [Start Free Trial ->]     |
| [Explore Architecture]    |
+---------------------------+
```

</div>

---

## ◈ 07 — Design Philosophy

Nexora adheres to three core design rules:

1. **Clarity over Clutter**  
   Every pixel and card has an explicit purpose. Visual noise is stripped away so users immediately understand the product's value proposition.
2. **Responsive by Default**  
   A premium user experience cannot be desktop-exclusive. Mobile navigation, cards, and interactive consoles are crafted with fluid units (`clamp()`, `rem`, `%`) to look exceptional on every display.
3. **Interaction with Intention**  
   Animations (hover lifts, glowing borders, live event feeds, and toast progress bars) provide tactile feedback rather than decorative distraction.

---

## ◈ 08 — What I Learned

Building this project provided deep hands-on experience in:
- **Semantic HTML5 Architecture**: Crafting structured markup optimized for SEO, web crawlers, and screen readers.
- **Advanced CSS3 Techniques**: Mastering CSS Custom Properties (CSS variables) for immediate theme switching, CSS Grid template areas, and frosted glassmorphism.
- **Vanilla JavaScript Performance**: Implementing event delegation, `requestAnimationFrame` throttles, dynamic timers, and the `IntersectionObserver` API for zero-lag scroll interactions.
- **Client-Side Form Validation**: Real-time regex testing, inline error messaging, and accessible feedback loops.
- **Modern Notification Architecture**: Building self-contained toast notifications with progress countdowns and pause-on-hover mechanics.

---

## ◈ 09 — The Roadmap

- [x] Initial design system and typographic scale (Plus Jakarta Sans & JetBrains Mono)
- [x] Glassmorphic floating navigation bar with scroll detection
- [x] Multi-tab interactive hero console (Live Stream, Pipeline SDK, Trace Waterfall)
- [x] Animated metrics counters triggered via Intersection Observer
- [x] Searchable FAQ accordion with instant query filtering
- [x] Client-side contact form validation with error states
- [x] Accessible confirmation receipt toast component with auto-dismiss progress bar
- [x] Full responsive optimization for mobile, tablet, and desktop viewports
- [ ] Add interactive benchmark comparison calculator
- [ ] Publish directly via GitHub Pages

---

## ◈ 10 — Contribute to the Project

Have an idea to make Nexora even better? Feedback, issues, and contributions are welcome!

1. **Fork** the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

## ◈ 11 — Connect With Me

<div align="center">

**Designed and developed by Arun Sanap**  
*Frontend Development Enthusiast & Computer Science Student*

[![GitHub](https://img.shields.io/badge/GitHub-Arunsanap99-181717?style=flat-square&logo=github)](https://github.com/Arunsanap99)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Arun_Sanap-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/arun-sanap-37781228b/)

</div>

---

## ◈ 12 — License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">

✦ **Build something worth remembering.**  
If you like this project, consider giving the repository a ⭐ on GitHub!

*Made with HTML, CSS, JavaScript, and curiosity.*

</div>
