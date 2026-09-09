# Hostinger Deployment Guide for Jinshad Nu's Portfolio

This guide provides step-by-step instructions for deploying your modern React + Vite portfolio website to **Hostinger** (Shared Web Hosting or Cloud Hosting).

---

## Method 1: Deploy via Hostinger File Manager (Quickest & Simplest)

### Step 1: Build the Production Bundle
In your local terminal inside `/Users/jinshadnu/Websites/My-Portfolio`, run:
```bash
npm run build
```
This generates an optimized, production-ready `dist/` directory containing `index.html`, assets, `.htaccess`, and `favicon.svg`.

### Step 2: Log into Hostinger hPanel
1. Navigate to [hpanel.hostinger.com](https://hpanel.hostinger.com) and log in.
2. Select your domain/hosting plan.
3. In the sidebar under **Files**, click **File Manager**.

### Step 3: Upload Files to `public_html`
1. Double-click to open the `public_html` folder.
2. If there is a default Hostinger `default.php` file, delete or rename it.
3. Open your local `dist/` folder.
4. Upload all files and folders inside `dist/` directly into `public_html`:
   - `assets/` (folder with bundled JS & CSS)
   - `index.html`
   - `.htaccess` *(Ensure hidden files are visible in Hostinger File Manager settings)*
   - `favicon.svg`
   - Any other static images

> [!NOTE]
> The `.htaccess` file provided in this repository automatically handles single-page routing (preventing 404 errors on refresh), browser caching, and gzip compression on Hostinger's LiteSpeed/Apache web servers.

---

## Method 2: Deploy via Git in Hostinger (Automated Continuous Deployment)

If your portfolio code is hosted on GitHub:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jinshad Nu Portfolio"
   git remote add origin https://github.com/Jinshadnu/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In Hostinger **hPanel**, navigate to **Advanced** → **Git**.
3. Enter your repository URL: `https://github.com/Jinshadnu/my-portfolio.git`.
4. Set the branch to `main`.
5. Set the directory to `/public_html`.
6. Click **Create** and then **Deploy**.

---

## Verifying Deployment & SSL

1. Ensure **SSL Certificate** is active: Go to **Security** → **SSL** in hPanel and ensure Let's Encrypt SSL is installed and active with **Force HTTPS** enabled.
2. Visit your domain (e.g., `https://jinshadnu.com` or `https://jinshadnu.dev`).
3. Verify that:
   - Sticky navigation bar works smoothly.
   - Project filter buttons filter projects by Flutter, Android, Web, and Desktop.
   - Clicking "View Case Study" opens the full modal.
   - Testimonial carousel slides automatically.
   - Contact form validates and displays success confirmation.
