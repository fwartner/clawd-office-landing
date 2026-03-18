# Landing Page Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the clawd-office-landing page with accurate product features, two new sections (Presence States, Rooms), and polished neo-brutalist execution.

**Architecture:** Single-page Next.js 16 app with App Router. All components are client-side (wrapped in LangProvider). Translations in centralized i18n.ts. Tailwind CSS v4 for styling. No API routes, no database.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript 5

**Spec:** `docs/superpowers/specs/2026-03-18-landing-page-redesign-design.md`

---

### Task 1: Update next.config.ts — add object storage remote pattern

**Files:**
- Modify: `next.config.ts`

**Step 1: Add the object storage hostname to remotePatterns**

Add a second entry to the `remotePatterns` array:

```typescript
{
  protocol: "https",
  hostname: "fsn1.your-objectstorage.com",
  pathname: "/pp-strapi/**",
},
```

**Step 2: Verify build works**

Run: `npm run build`
Expected: Build completes without errors.

**Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: add object storage remote pattern for P&P logo"
```

---

### Task 2: Update globals.css — add presence colors and card-dark token

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add new color tokens to @theme inline block**

Add after `--color-brand-dark`:

```css
--color-brand-card-dark: #111111;

--color-presence-active: #78f7b5;
--color-presence-available: #95d8ff;
--color-presence-meeting: #c39bff;
--color-presence-paused: #ffd479;
--color-presence-blocked: #ff8b8b;
--color-presence-off: #8792a8;
```

**Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add presence state colors and card-dark token"
```

---

### Task 3: Rewrite i18n.ts — all translations for new sections

**Files:**
- Modify: `src/lib/i18n.ts`

**Step 1: Replace entire file contents**

The new translations must cover these sections: nav (with rooms link), hero (new headline/subtitle/trust line), about (what-is), presence (6 states), rooms (5 rooms), features (6 updated features), tech, quickstart (updated copy), cta (updated copy), footer.

Key translation changes:
- `nav`: add `rooms` key, add `github` key
- `hero`: new keys — `title` ("A {highlight} for your AI agents"), `highlight` ("pixel-art office"), `sub` (presence/rooms/task routing description), `ctaPrimary` ("Get Started →"), `ctaSecondary` ("GitHub"), `trustStates`/`trustRooms`/`trustQueue`
- `presence`: new section — `title`, `sub`, plus 6 state objects each with `name` and `desc`
- `rooms`: new section — `title`, `sub`, plus 5 room objects each with `name`, `team`, `icon`
- `features.items`: updated to Agent CRUD, Task Queue & Routing, Activity Feed, Workday Awareness, Dual Backend, Accessible
- `quickstart`: updated title ("Up and Running in 60 Seconds" / "In 60 Sekunden startklar"), note text
- `cta`: new keys — `label` ("Built by Pixel & Process"), `title` ("Give your agents a place to work"), `sub` ("Open source, MIT licensed..."), `ctaPrimary` ("Clone Repository"), `ctaSecondary` ("Read the Docs")
- `footer`: updated copy

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 3: Commit**

```bash
git add src/lib/i18n.ts
git commit -m "feat: rewrite i18n translations for all redesigned sections"
```

---

### Task 4: Update layout.tsx — add font weight 800 and favicon

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Add weight "800" to Montserrat**

Change `weight: ["400", "500", "600", "700"]` to `weight: ["400", "500", "600", "700", "800"]`.

**Step 2: Add favicon metadata**

Add `icons` to the metadata export:

```typescript
icons: {
  icon: "https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg",
},
```

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add Montserrat 800 weight and P&P favicon"
```

---

### Task 5: Rewrite Navbar.tsx

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Replace component**

- Use `<img>` tag for P&P logo SVG from object storage (not Next Image — it's an external SVG used as a logo, small enough to not need optimization)
- Nav links: Features (#features), Rooms (#rooms), Tech (#tech), Quickstart (#quickstart), GitHub (https://github.com/fwartner/clawd-office, external)
- All nav links hidden on mobile (md:flex)
- DE/EN toggle button: yellow background, 2px border, neo-brut shadow-sm
- Sticky top, z-50, 3px black bottom border
- Max-width container 6xl, centered

**Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: redesign Navbar with P&P logo and updated nav links"
```

---

### Task 6: Rewrite Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Replace component**

Layout: 2-column grid (md:grid-cols-2), stacks on mobile.

Left column:
- Teal badge: `inline-block bg-brand-teal text-white text-xs font-semibold px-3 py-1 border-2 border-brand-black uppercase tracking-wider`
- Headline: `text-4xl md:text-5xl font-extrabold leading-tight` — uses `t()` for text, `<span className="bg-brand-yellow px-1 border-b-[3px] border-brand-black">` for highlight
- Subtitle: `text-brand-gray leading-relaxed`
- Two CTA buttons: purple "Get Started" (anchor to #quickstart) + white "GitHub" (external link)
- Trust line: three `✓` items in flex row, text-sm text-brand-gray

Right column:
- macOS window frame: `border-neo shadow-neo-lg overflow-hidden`
- Window chrome: black bar with 3 colored dots + monospace title
- Next.js `<Image>` component for screenshot from `raw.githubusercontent.com/fwartner/clawd-office/main/assets/readme/virtual-office-screenshot.jpg`
- Two floating status badges: absolute positioned, monospace text with colored borders

**Step 2: Verify it renders**

Run: `npm run dev`, check localhost:3000.

**Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: redesign Hero with real screenshot and dual CTAs"
```

---

### Task 7: Rewrite WhatIs.tsx

**Files:**
- Modify: `src/components/WhatIs.tsx`

**Step 1: Replace component**

- Section id="about"
- Teal label badge
- Headline from i18n
- One paragraph describing the concept
- Right side: same screenshot in neo-brut frame (reuse the macOS frame pattern)
- 2-column grid, stacks on mobile

**Step 2: Commit**

```bash
git add src/components/WhatIs.tsx
git commit -m "feat: redesign WhatIs section with updated copy"
```

---

### Task 8: Create PresenceStates.tsx (new)

**Files:**
- Create: `src/components/PresenceStates.tsx`

**Step 1: Create the component**

- Dark background section (bg-brand-black text-white)
- Centered headline + subtitle from i18n
- 3×2 grid (md:grid-cols-3, grid-cols-2 on mobile) of state cards
- Each card: `border-2` in matching presence color, `bg-brand-card-dark`, padding
  - Colored dot (w-3 h-3 rounded-full)
  - State name in matching color, font-bold
  - Description in text-gray-400
- 6 states from i18n translations, colors from Tailwind presence tokens

**Step 2: Commit**

```bash
git add src/components/PresenceStates.tsx
git commit -m "feat: add PresenceStates section with 6 status cards"
```

---

### Task 9: Create Rooms.tsx (new)

**Files:**
- Create: `src/components/Rooms.tsx`

**Step 1: Create the component**

- Section id="rooms"
- Light background
- Centered headline + subtitle from i18n
- 5-column grid (lg:grid-cols-5, md:grid-cols-3, grid-cols-2) of room cards
- Each card: `border-neo shadow-neo-sm bg-white text-center`
  - Emoji icon (text-2xl)
  - Room name (font-bold, text-sm)
  - Team label (text-xs, text-brand-gray)
- Rooms data from i18n

**Step 2: Commit**

```bash
git add src/components/Rooms.tsx
git commit -m "feat: add Rooms section with 5 themed room cards"
```

---

### Task 10: Rewrite Features.tsx

**Files:**
- Modify: `src/components/Features.tsx`

**Step 1: Replace component**

- Section id="features"
- Light background
- Centered headline from i18n
- 3×2 grid of feature cards
- Each card: `border-neo shadow-neo bg-white` with hover transition
  - 16px colored pixel square (cycling teal/purple/yellow via index % 3)
  - Feature title (font-bold)
  - Description (text-sm, text-brand-gray)
- 6 features from i18n with updated content

**Step 2: Commit**

```bash
git add src/components/Features.tsx
git commit -m "feat: redesign Features grid with accurate product capabilities"
```

---

### Task 11: Update TechStack.tsx

**Files:**
- Modify: `src/components/TechStack.tsx`

**Step 1: Update the component**

- Dark background section (id="tech")
- Headline: "Built With" from i18n
- Flex row of tech badges, each with colored dot + name
- Tech items: React 18, TypeScript 5.6, Vite 5, Node.js, PostgreSQL
- Badges: `border-2 border-gray-700 px-4 py-2 text-sm text-white`
- Centered, wraps on mobile

**Step 2: Commit**

```bash
git add src/components/TechStack.tsx
git commit -m "feat: update TechStack with dark background and badge styling"
```

---

### Task 12: Rewrite Quickstart.tsx

**Files:**
- Modify: `src/components/Quickstart.tsx`

**Step 1: Replace component**

- Section id="quickstart"
- Light background
- Centered headline from i18n
- Terminal block: max-w-xl mx-auto, border-neo shadow-neo-lg
  - macOS window chrome (3 dots + "terminal" label)
  - Dark body with monospace code:
    - `$ git clone https://github.com/fwartner/clawd-office.git`
    - `$ cd clawd-office && npm install`
    - `$ npm run dev`
    - `✓ Office running at localhost:4173` (in presence-active green)
  - Teal `$` prompt color
- Note below terminal from i18n

**Step 2: Commit**

```bash
git add src/components/Quickstart.tsx
git commit -m "feat: redesign Quickstart with updated terminal commands"
```

---

### Task 13: Rewrite CtaSection.tsx

**Files:**
- Modify: `src/components/CtaSection.tsx`

**Step 1: Replace component**

- Yellow background (bg-brand-yellow), 3px black borders top and bottom
- Centered layout:
  - P&P logo SVG (img tag, 24px) + "Built by Pixel & Process" label
  - Headline from i18n
  - Subtitle from i18n
  - Two CTAs: Black "Clone Repository" (link to GitHub) + White "Read the Docs" (link to GitHub README)

**Step 2: Commit**

```bash
git add src/components/CtaSection.tsx
git commit -m "feat: redesign CTA section with P&P branding"
```

---

### Task 14: Rewrite Footer.tsx

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Replace component**

- Dark background (bg-brand-black)
- Flex row, space-between:
  - Left: P&P logo SVG (16px) + copyright text from i18n
  - Right: links — pixelandprocess.de, GitHub, Impressum, Datenschutz
- Links: text-gray-500 hover:text-brand-teal transition
- Responsive: stacks on mobile

**Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: redesign Footer with P&P logo and updated links"
```

---

### Task 15: Update page.tsx — add new sections to composition

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add imports and sections**

Add imports for `PresenceStates` and `Rooms`. Remove import for `Icons` (deleted).

Update section order:
```tsx
<Navbar />
<Hero />
<WhatIs />
<PresenceStates />
<Rooms />
<Features />
<TechStack />
<Quickstart />
<CtaSection />
<Footer />
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add PresenceStates and Rooms to page composition"
```

---

### Task 16: Delete Icons.tsx

**Files:**
- Delete: `src/components/Icons.tsx`

**Step 1: Delete the file**

```bash
rm src/components/Icons.tsx
```

**Step 2: Commit**

```bash
git add -u src/components/Icons.tsx
git commit -m "chore: remove Icons.tsx (GitHub icon inlined in components)"
```

---

### Task 17: Build verification and push

**Step 1: Full build check**

Run: `npm run build`
Expected: Build completes without errors.

**Step 2: Lint check**

Run: `npm run lint`
Expected: No errors (warnings acceptable).

**Step 3: Push to GitHub**

```bash
git push origin main
```

This triggers the CI pipeline which builds the Docker image and updates the GitOps repo, deploying to `pixel-office.pixelandprocess.de`.

**Step 4: Verify CI passes**

Run: `gh run list -R fwartner/clawd-office-landing --limit 1`
Expected: Workflow status is "completed" with "success".
