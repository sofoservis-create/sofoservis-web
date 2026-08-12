# WhatsApp Widget — Next.js Implementation Guide

A floating WhatsApp button that sticks to the bottom-right corner of the screen. Works with App Router (Next.js 13+). No external libraries needed.

---

## What it does

- Fixed button bottom-right, always visible
- Opens WhatsApp chat in a new tab (`wa.me` link)
- Shows a small red "online" dot for visual trust
- On mobile: moves up automatically when a sticky CTA bar appears below it
- Hides when the mobile burger menu is open
- Supports multiple phone numbers depending on the current route (optional)
- Supports multiple languages (optional)

---

## Step 1 — Create the component

Create `src/components/widgets/WhatsAppWidget.tsx`:

```tsx
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppWidget() {
  const pathname = usePathname();

  // ─── CONFIG ───────────────────────────────────────────────────────────────
  // Your WhatsApp number in international format WITHOUT + or spaces
  // e.g. UK: 447911123456 | SK: 421951735130 | US: 12025551234
  const phoneNumber = "YOUR_PHONE_NUMBER_HERE";
  const waUrl = `https://wa.me/${phoneNumber}`;

  // Label shown next to the icon
  const label = "We're Online";
  // ──────────────────────────────────────────────────────────────────────────

  // Moves button up when a sticky bottom bar is present on mobile
  const [aboveBar, setAboveBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth < 1024;
      // Adjust 600 to however many px of scroll before your CTA bar appears
      setAboveBar(isMobile && window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Hides when burger menu is open (optional — delete if you don't use this)
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = (e: Event) =>
      setMenuOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("burgermenu", handler);
    return () => window.removeEventListener("burgermenu", handler);
  }, []);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`fixed right-5 z-[1000] flex items-center gap-2 px-4 py-2.5
        rounded-full shadow-lg transition-all duration-300
        hover:scale-105 hover:shadow-xl
        ${aboveBar ? "bottom-[76px]" : "bottom-5"}
        ${menuOpen ? "pointer-events-none opacity-0 translate-y-4" : ""}`}
      style={{ backgroundColor: "#4CAF72" }}
    >
      {/* WhatsApp SVG icon (Font Awesome free, no dependency needed) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-6 h-6 flex-shrink-0"
        fill="white"
        aria-hidden="true"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>

      {/* Label text */}
      <span className="text-white font-semibold text-sm whitespace-nowrap">
        {label}
      </span>

      {/* Red online dot */}
      <span
        className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
        style={{ backgroundColor: "#e53e3e" }}
        aria-hidden="true"
      />
    </a>
  );
}
```

---

## Step 2 — Add it to your layout

In your root layout (`src/app/layout.tsx`), import and render the component **inside the `<body>`**, outside of `<main>`. Because it uses `usePathname()` it must be a Client Component wrapper — if your layout is a Server Component (default), wrap it like this:

```tsx
// src/app/layout.tsx
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WhatsAppWidget />   {/* ← add this line */}
        {children}
      </body>
    </html>
  );
}
```

> **Note:** `WhatsAppWidget` already has `"use client"` at the top, so Next.js handles the boundary automatically — your Server Component layout does not need to change to a Client Component.

---

## Step 3 — Tailwind check

The component uses only standard Tailwind utility classes. No custom config needed. The only non-Tailwind styles are the two inline `style` props for the brand green (`#4CAF72`) and red dot (`#e53e3e`) — these are intentional because Tailwind purges arbitrary colour values.

If you want to move them into Tailwind config:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      whatsapp: "#4CAF72",
    }
  }
}
```

Then replace `style={{ backgroundColor: "#4CAF72" }}` with `className="bg-whatsapp"`.

---

## Optional features

### A — Multiple phone numbers per route

Useful if different teams handle different services:

```tsx
const specialRoutes = ["/services/installation", "/services/repair"];
const isSpecial = specialRoutes.some((r) => pathname?.includes(r));
const phoneNumber = isSpecial ? "447700000001" : "447700000002";
```

### B — Multiple languages

```tsx
const isEnglish = pathname?.startsWith("/en");
const label = isEnglish ? "We're Online" : "Nous Sommes En Ligne";
```

### C — Pre-filled message

Append `?text=` to the `wa.me` URL:

```tsx
const message = encodeURIComponent("Hello, I'd like a quote.");
const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
```

### D — Hide on specific pages

```tsx
const hiddenRoutes = ["/checkout", "/admin"];
if (hiddenRoutes.some((r) => pathname?.startsWith(r))) return null;
```

### E — Burger menu integration

If your navbar fires a custom DOM event when the mobile menu opens, the widget will hide itself to avoid overlap. Fire the event from your navbar like this:

```ts
// Inside your Navbar component, when menu state changes:
window.dispatchEvent(
  new CustomEvent("burgermenu", { detail: { open: true } })  // or false
);
```

If you don't need this, **delete** the second `useEffect` block in the component entirely.

### F — No sticky CTA bar

If you don't have a sticky bottom bar on mobile, simplify the bottom positioning:

1. Delete the first `useEffect` block.
2. Delete the `aboveBar` state.
3. Replace `` `${aboveBar ? "bottom-[76px]" : "bottom-5"}` `` with just `"bottom-5"`.

---

## How the `wa.me` URL works

| Format | Example |
|--------|---------|
| Phone only | `https://wa.me/447911123456` |
| With pre-filled message | `https://wa.me/447911123456?text=Hello` |
| Group chat (rare) | `https://chat.whatsapp.com/GROUPINVITECODE` |

Always use the **full international format** without `+`, spaces, or dashes:
- ✅ `447911123456`
- ❌ `+44 7911 123456`
- ❌ `07911123456`

---

## z-index notes

The component uses `z-[1000]`. Make sure:
- Your navbar/header is ≤ `z-[999]` or uses a different stacking context.
- Any modal/drawer you open is `z-[1001]` or higher so it covers the button.

---

## Accessibility

- `aria-label` on the `<a>` provides a text alternative for screen readers.
- The decorative SVG and red dot both have `aria-hidden="true"`.
- The button is keyboard-focusable (it's a native `<a>` tag).
- Colour contrast: white on `#4CAF72` passes WCAG AA for large text (the label and icon).

---

## File summary

| File | What to create/edit |
|------|---------------------|
| `src/components/widgets/WhatsAppWidget.tsx` | Create — full component code above |
| `src/app/layout.tsx` | Edit — import and render `<WhatsAppWidget />` inside `<body>` |
| `tailwind.config.js` | Optional — add `whatsapp` colour token |
