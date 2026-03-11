# 🕊️ Speaking Virtue

[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android%20%7C%20Web-blue)]()
[![Expo](https://img.shields.io/badge/Expo-54-black?logo=expo)]()
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61dafb?logo=react)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)]()
[![Expo Router](https://img.shields.io/badge/Expo%20Router-4.x-black?logo=expo)]()
[![License](https://img.shields.io/badge/license-ISC-green)]()

> **Truth Spoken. Virtue Lived. Love Revealed.** — A Catholic organisation dedicated to the spiritual, moral, and intellectual formation of the human person.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Screens & Navigation](#screens--navigation)
- [Cart & Checkout Flow](#cart--checkout-flow)
- [Known Issues Fixed](#known-issues-fixed)
- [Deployment](#deployment)

---

## About

**Speaking Virtue** is a cross-platform mobile and web application built with Expo and React Native. It is the digital home of the Speaking Virtue Catholic organisation — offering a curated shop, theological journal articles (PDF), an about page, and a full e-commerce checkout flow powered by Paystack or Flutterwave. A standalone `index.html` web SPA (Tailwind + Vanilla JS) is also included for lightweight web-only deployments.

---

## Features

| Feature | Description |
|---|---|
| 🏠 **Home Screen** | Animated hero, virtue cards (theological + cardinal), scripture quote, featured products, newsletter |
| 🛍️ **Shop** | Product grid with Add to Cart + toast notifications |
| 📖 **Journal / Articles** | PDF article cards — opens PDFs via `Linking.openURL` (native) or `window.open` (web) |
| ℹ️ **About** | Mission, vision, core values, team section, contact |
| 🛒 **Cart** | Add, remove, update quantity — live order total |
| 💳 **Checkout Modal** | Name + email input, Paystack/Flutterwave toggle, live payment session |
| 🔔 **Toast Notifications** | "Added to Cart" feedback via `react-native-toast-message` |
| 📱 **Drawer Menu** | Slide-in navigation drawer (from the right) with cart badge |
| 🔐 **Auth (optional)** | Google OAuth via `expo-auth-session` |
| 💾 **Persistent Cart** | Cart state persisted to device via `@react-native-async-storage/async-storage` |
| 🌐 **Web SPA** | Standalone `index.html` with Tailwind CSS, AOS animations, Lottie |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Expo](https://expo.dev) ~54 |
| **Navigation** | [Expo Router](https://expo.github.io/router) ~4.x (file-based routing) |
| **Language** | TypeScript 5.9 |
| **Styling** | React Native StyleSheet + NativeWind |
| **Animations** | React Native Animated API + Lottie |
| **State** | React Context API + AsyncStorage |
| **Payments** | Paystack / Flutterwave (via Express proxy at `localhost:3001`) |
| **Auth** | expo-auth-session (Google OAuth) |
| **HTTP** | Native `fetch` API |
| **Blur** | expo-blur |
| **Gestures** | react-native-gesture-handler |
| **Toast** | react-native-toast-message |

---

## Project Structure

```
speaking-virtue/
├── app/                        # Expo Router screens (file-based routing)
│   ├── _layout.tsx             # Root layout — providers, Header, Stack navigator
│   ├── index.tsx               # Home screen (main entry point)
│   ├── about.tsx               # About screen
│   ├── articles.tsx            # Journal / Articles screen
│   ├── shop.tsx                # Shop screen
│   └── cart.tsx                # Cart screen + CheckoutModal
│
├── components/                 # Shared UI components
│   ├── Header.tsx              # Sticky header with drawer toggle + cart badge
│   ├── DrawerMenu.tsx          # Slide-in navigation drawer (slides from the RIGHT)
│   ├── CheckoutModal.tsx       # Checkout modal (name, email, payment provider)
│   ├── ProductCard.tsx         # Shop product card with Add to Cart
│   └── VirtueCard.tsx          # Interactive virtue card (toggles active state)
│
├── contexts/
│   └── CartContext.tsx         # Cart state + AsyncStorage persistence [canonical]
│
├── constants/
│   └── Colors.ts               # Brand colour palette
│
├── src/
│   ├── components/             # Legacy/alternative component implementations
│   ├── context/
│   │   ├── AuthContext.tsx     # Google OAuth context
│   │   └── CartContext.tsx     # In-memory cart (used by src/screens only)
│   ├── hooks/
│   │   └── useCustomHook.ts    # Custom counter hook
│   ├── screens/                # Legacy screen implementations
│   └── utils/apiHelper.ts      # Generic fetch/post helpers
│
├── utils/
│   └── api.ts                  # Cart session + payment API calls (native fetch)
│
├── assets/                     # Icons, splash, article PDFs, images
├── index.html                  # Standalone web SPA (Tailwind + Vanilla JS)
├── App.tsx                     # Expo root — renders <Toast /> overlay
├── index.js                    # Expo Router entry point
├── app.json                    # Expo app config
├── babel.config.js             # Babel (expo preset + reanimated plugin)
├── metro.config.js             # Metro bundler config (Expo + NativeWind)
├── tailwind.config.js          # NativeWind/Tailwind config
└── tsconfig.json               # TypeScript config (strict + path aliases)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (macOS) or Android Studio / physical device with Expo Go

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/speaking-virtue.git
cd speaking-virtue

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your keys (see section below)

# 4. Start the development server
npx expo start

# Or target a specific platform:
npx expo start --ios
npx expo start --android
npx expo start --web
```

### Backend (Payment Proxy Server)

The checkout flow calls a local Express server on port 3001. Set up your server to expose:

```
POST /api/cart/create                        → { success: true, sessionId: "..." }
POST /api/payment/paystack/initialize        → { success: true, paymentUrl: "..." }
POST /api/payment/flutterwave/initialize     → { success: true, paymentUrl: "..." }
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Google OAuth (for AuthContext — used by src/context/AuthContext.tsx)
GOOGLE_CLIENT_ID=your_google_oauth_client_id_here

# Payment credentials (used server-side ONLY — never expose in the client bundle)
PAYSTACK_SECRET_KEY=sk_live_...
FLUTTERWAVE_SECRET_KEY=FLWSECK_...
```

> ⚠️ Never commit your `.env` file — it is already listed in `.gitignore`.

---

## Screens & Navigation

All screens live in the `app/` directory and are resolved by Expo Router's file-based routing:

| Route | Screen | Description |
|---|---|---|
| `/` | Home | Hero section, virtue cards, scripture quote, products, newsletter |
| `/about` | About | Mission, vision, core values, team, contact |
| `/articles` | Journal | Article search + PDF cards |
| `/shop` | Shop | Product grid with Add to Cart |
| `/cart` | Cart | Item list, order summary, checkout modal |

The `Header` is rendered for all screens via `app/_layout.tsx`. Tapping the hamburger icon opens `DrawerMenu`, which slides in from the **right**.

---

## Cart & Checkout Flow

```
User taps "Add to Cart" (Shop or Home)
  → CartContext.addItem() updates state + persists to AsyncStorage
  → Toast notification shown ("Added to Cart")
  → Cart badge in Header increments

User navigates to /cart
  → Items shown with +/- quantity controls and Remove button
  → Live order total calculated

User taps "Proceed to Checkout"
  → CheckoutModal opens (was wired in FIX #9)
  → User enters Full Name + Email Address
  → Selects Paystack or Flutterwave
  → Taps "Pay Now"
      → POST /api/cart/create   → receives sessionId
      → POST /api/payment/{provider}/initialize   → receives paymentUrl
      → Redirects to payment gateway
      → On successful return: cart is cleared
```

---

## Known Issues Fixed

| # | File | Bug | Fix |
|---|---|---|---|
| 1 | `utils/api.ts` | `import axios from 'axios'` — **axios is not in `package.json`** → immediate runtime crash on launch | Replaced entirely with native `fetch` API; added typed request helpers |
| 2 | `.vscode/launch.json` | `"program": "tsconfig.json"` — VS Code would fail to launch the debugger (tsconfig is not a script) | Changed to `"${workspaceFolder}/index.js"` |
| 3 | `app/articles.tsx` | `openPDF()` only called `console.log('Opening PDF:', pdfPath)` — PDFs never opened | Implemented with `Linking.openURL()` on native and `window.open()` on web; added `Alert` fallback if no viewer found |
| 4 | `components/DrawerMenu.tsx` | Drawer is anchored at `right: 0` but `slideAnim` started at `-width` (negative), causing it to fly in from the **left** across the full screen | Changed initial value to `+width` so the drawer correctly enters from the right |
| 5 | `src/hooks/useCustomHook.ts` | Stale closure: `setCount(count + 1)` reads `count` captured at creation time — rapid calls all see the same value and increments are lost | Changed to functional updater: `setCount(prev => prev + 1)` |
| 6 | `src/context/AuthContext.tsx` | Wrong Google OAuth URL: `accounts.google.com/oauth/v2/auth` (doesn't exist) — every login attempt returned 404 | Fixed to `accounts.google.com/o/oauth2/v2/auth` (correct path includes `/o/`) |
| 7 | `index.js` | Completely empty — Expo had no entry point and would fail to start | Added `import 'expo-router/entry'` |
| 8 | `metro.config.js` | Completely empty — Metro bundler fell back to bare defaults; asset resolution and NativeWind would silently fail | Added standard `@expo/metro-config` + `withNativeWind` setup |
| 9 | `app/cart.tsx` | `<TouchableOpacity style={styles.checkoutButton}>` had **no `onPress`** — `CheckoutModal` was never mounted or triggered | Added `isCheckoutOpen` state, wired `onPress={() => setIsCheckoutOpen(true)}`, rendered `<CheckoutModal />` |
| 10 | `tsconfig.json` | `"compilerOptions": {}` was completely empty — no strict type checking, no JSX target, no path aliases | Added `strict`, `jsx`, `baseUrl`, `paths` (`~/*`), `moduleResolution`, and other standard Expo TS settings |
| 11 | `package.json` | `"expo-router": "^6.0.22"` — **incompatible with Expo 54** which requires `~4.x`; would crash on install or at runtime with peer dependency conflicts | Corrected to `"~4.0.17"` |
| 12 | `src/context/AuthContext.tsx` | `GOOGLE_CLIENT_ID` fallback was the literal string `'YOUR_GOOGLE_CLIENT_ID'` — OAuth requests would silently fire with a junk client ID | Removed the insecure fallback; added a `console.error` in `__DEV__` mode so missing config is immediately visible |

---

## Deployment

### Mobile — EAS Build

```bash
npm install -g eas-cli
eas login
eas build --platform ios
eas build --platform android
eas build --platform all
```

### Web — Expo Export

```bash
npx expo export --platform web
# Static output written to dist/ — deploy to Netlify, Vercel, or GitHub Pages
```

### OTA Updates

```bash
eas update --branch production --message "Fix checkout and PDF opening"
```

### Web SPA (index.html only)

The standalone `index.html` can be deployed to any static host directly — no build step required. Simply upload it alongside your PDF files and image assets to the same directory.

---

*© 2025 Speaking Virtue. All Rights Reserved.*
