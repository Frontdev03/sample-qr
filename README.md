# DASHMESH MEDICAL STORE - Digital Business Card

A modern, minimal, and mobile-first digital business card web application built for **Vikram Singh** (**Dashmesh Medical Store**).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFrontdev03%2Fsample-qr)

## 🚀 Features

- **Minimalist & Trustworthy Design**: Dark emerald green accents with clean typography on an off-white background.
- **Two-Stage QR Workflow**: 
  - Base URL shows the QR Code.
  - Scanning the QR Code opens the person and business profile details.
- **Centralized Configuration**: All details (name, store, phone, address, timings, map links) are in one file: [`src/config/businessDetails.js`](./src/config/businessDetails.js).
- **Fast & Responsive**: Built with Next.js (App Router), Tailwind CSS, and `qrcode`.

---

## 🛠️ Local Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 🌐 Deploy to Vercel

### Option 1: Automatic GitHub Import (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **"Import"** next to your GitHub repository: `Frontdev03/sample-qr`.
3. Keep default settings:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Click **"Deploy"**.

### Option 2: Deploy using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy directly from terminal
vercel
```
