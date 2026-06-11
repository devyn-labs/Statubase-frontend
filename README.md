# Statubase

Statubase is an institutional-grade M&A (Mergers & Acquisitions) platform built to connect vetted business owners seeking clean, confidential exits with qualified institutional and private buyers. The platform features fully interactive data rooms, dynamic valuation estimation, real-time SVG charting, and a high-performance interactive backdrop canvas.

---

## 🚀 Key Features

*   **Institutional M&A Marketplace**: Dynamic listings filtered by industry category, ARR, profit margins, and growth metrics.
*   **Confidential Buyer Workflows**: Seamless modal interface workflows for Stripe-verified sellers and liquidity-vetted buyers.
*   **Interactive Area Charting**: High-performance, custom-rendered SVG area chart representing financial projections and margin trends.
*   **Valuation Calculator**: Algorithmic business valuation estimation based on industry-specific multiples and growth rate accelerators.
*   **Interactive Canvas Backdrop**: A custom-drawn, mouse-responsive particle network rendering smoothly at 60fps.
*   **Unified Styling & Dark Mode**: Instant, hardware-accelerated dark/light theme switching utilizing custom properties styled with Tailwind CSS v4.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 16 (App Router)
*   **Library**: React 19
*   **Styling**: Tailwind CSS v4 (native `@theme` integration)
*   **Language**: TypeScript 5 (Strict Typings)
*   **Bundler/Compiler**: Turbopack

---

## 🤖 Co-Engineered with AI

This project was built using a structured **AI-Human Collaboration Model**. Rather than relying on boilerplate library dependencies, we leveraged AI as an engineering partner to write custom, lightweight, type-safe implementations of complex features (such as SVG-based charting, coordinate-based hover state computations, and mathematical valuation scaling). 

For a deep-dive into the development phases, architectural trade-offs, and optimization strategies employed during the build, please refer to:
👉 **[AI Collaboration Report (AI_COLLABORATION.md)](./AI_COLLABORATION.md)**

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or newer recommended).

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server with:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the platform.

### Building for Production

Compile and optimize the project for production:
```bash
npm run build
```

This runs type checking, builds the Next.js production bundle, and outputs a highly optimized static bundle ready for deployment.
