# GitHub Hosting & Deployment Guide for Jinshad Nu's Portfolio

Your portfolio is fully configured with automated GitHub Actions and relative asset bundling (`base: './'`), ready to be hosted for free on **GitHub Pages**.

---

## Step 1: Create a New GitHub Repository

1. Open your browser and navigate to: **[https://github.com/new](https://github.com/new)**
2. In the **Repository name** field, enter:
   - `My-Portfolio` *(or `portfolio`, or `Jinshadnu.github.io` if you want it as your primary user site)*
3. Leave it **Public**.
4. **Do NOT** initialize with a README, .gitignore, or license (these already exist locally).
5. Click **Create repository**.

---

## Step 2: Push Your Local Code to GitHub

Open your terminal in `/Users/jinshadnu/Websites/My-Portfolio` and run:

```bash
# If your repo is named 'My-Portfolio':
git remote add origin https://github.com/Jinshadnu/My-Portfolio.git
git push -u origin main
```
*(If you already have an SSH key configured, you can use `git remote add origin git@github.com:Jinshadnu/My-Portfolio.git`)*

---

## Step 3: Enable Free GitHub Pages Hosting (Automated via GitHub Actions)

Your repository already includes the pre-configured workflow at `.github/workflows/deploy.yml`.

1. In your GitHub repository, go to **Settings** (tab at the top right).
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** → **Source**, select **GitHub Actions** from the dropdown.
4. That's it! GitHub Actions will automatically trigger, build the Vite app, and publish your website.

Within 1–2 minutes, your live site will be available at:
👉 **`https://jinshadnu.github.io/My-Portfolio/`**

---

### Alternative One-Command Deploy (via `gh-pages`)

If you prefer to deploy directly from your command line at any time:
```bash
npm run deploy
```
This automatically builds `dist/` and pushes it directly to the `gh-pages` hosting branch.
In **Settings** → **Pages**, select **Deploy from a branch** and choose **`gh-pages`** / `(root)`.

---

## Step 4: Custom Domain (Optional)

If you have a custom domain (e.g. `jinshadnu.com` or `jinshadnu.dev`):
1. In **Settings** → **Pages**, enter your domain in the **Custom domain** box.
2. In your domain registrar (Hostinger, GoDaddy, or Namecheap), add a CNAME record pointing to `jinshadnu.github.io`.
3. Check **Enforce HTTPS**.
