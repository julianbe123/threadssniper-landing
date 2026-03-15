# ThreadsSniper.io — Landing Page

## Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub
1. Go to https://github.com/new
2. Name: `threadssniper-landing`
3. Keep it Public or Private (your choice)
4. Click "Create repository"
5. You'll see instructions — follow "upload an existing file"
6. Drag and drop ALL the files from this folder into the upload area
7. Click "Commit changes"

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and click "Sign Up"
2. Sign up with your GitHub account
3. Click "Add New..." → "Project"
4. Find `threadssniper-landing` in your repos → click "Import"
5. Leave all settings as default (Vercel auto-detects Vite)
6. Click "Deploy"
7. Wait ~1 minute — you'll get a URL like `threadssniper-landing.vercel.app`

### Step 3: Fix Google Form Entry IDs
The form currently has placeholder entry IDs. To make submissions work:
1. Open your Google Form in Chrome
2. Right-click anywhere → "View page source"
3. Press Ctrl+F and search for `FB_PUBLIC_LOAD_DATA`
4. Look for long numbers near your field names — these are the entry IDs
5. OR: Fill out your form once, then check the Google Sheet to confirm data arrives
6. Update the entry IDs in `src/App.jsx` where it says:
   `"entry.1036498498": name, "entry.1280408498": email`

### Step 4 (Optional): Custom Domain
1. Buy a domain (Namecheap, GoDaddy, Cloudflare — threadssniper.io recommended)
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow the DNS instructions

## Tech Stack
- React 18
- Vite 5
- Hosted on Vercel (free tier)

## Files
- `src/App.jsx` — The entire landing page
- `index.html` — Entry point with SEO meta tags
- `public/favicon.svg` — ThreadsSniper logo favicon
