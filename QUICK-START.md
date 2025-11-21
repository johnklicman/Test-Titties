# 🚀 Quick Start Guide

Get your Slater Painting website up and running in 10 minutes!

## Step 1: Install Node.js (if you haven't)

Download from: https://nodejs.org/
- Choose the **LTS version**
- Run the installer
- Restart your terminal/computer

Verify installation:
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

Open terminal in this folder (`slater-painting-nextjs`) and run:

```bash
npm install
```

Wait for it to complete (may take 2-3 minutes).

## Step 3: Set Up Sanity CMS

### Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

### Navigate to sanity folder:
```bash
cd sanity
```

### Initialize Sanity:
```bash
sanity init
```

Follow these prompts:
1. **Login to Sanity** (create free account if needed)
2. **Create new project**: Select "Yes"
3. **Project name**: Enter "Slater Painting"
4. **Dataset**: Enter "production"
5. **Output path**: Just press Enter (uses ./sanity)
6. **Project template**: Select "Clean project"

### Install Sanity dependencies:
```bash
npm install
```

### Deploy Sanity Studio:
```bash
sanity deploy
```

Choose a studio hostname (e.g., `slater-painting-cms`)

You'll get a URL like: `https://slater-painting-cms.sanity.studio`

## Step 4: Configure Environment

Go BACK to the root folder:
```bash
cd ..
```

Create a file named `.env.local` with this content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**To get your Project ID:**
1. Go to https://www.sanity.io/manage
2. Click your project
3. Copy the Project ID
4. Paste it in `.env.local`

## Step 5: Start Your Website!

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

## Step 6: Add Content

1. Go to your Sanity Studio URL (from Step 3)
2. Login
3. Add Services, Projects, and Testimonials
4. Click **Publish** on each item
5. Refresh your website to see changes!

---

## That's It! 🎉

Your website is now running with a full CMS!

### What's Next?

- **Add content** in Sanity Studio
- **Customize colors** in `tailwind.config.ts`
- **Deploy to Vercel** (free hosting)

### Need Help?

Check `README.md` or `SETUP-INSTRUCTIONS.md` for more details!

---

## Common Issues

**"npx not recognized"** → Install Node.js first

**"Module not found"** → Run `npm install`

**"Port 3000 in use"** → Run `npm run dev -- -p 3001`

**Sanity data not showing** → Make sure you published content in Sanity Studio

