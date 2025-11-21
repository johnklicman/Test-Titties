# Slater Painting Next.js + Sanity CMS Setup

## Prerequisites

Before you begin, you need to install:

### 1. Install Node.js
Download and install from: https://nodejs.org/
- Choose the **LTS version** (Long Term Support)
- This will install both Node.js and npm

### 2. Verify Installation
Open PowerShell/Terminal and run:
```bash
node --version
npm --version
```
You should see version numbers for both.

---

## Quick Start (5 minutes)

### Step 1: Install Dependencies

Open terminal in the `slater-painting-nextjs` folder and run:

```bash
npm install
```

This installs all required packages.

### Step 2: Set Up Sanity CMS

1. Create a free account at https://www.sanity.io/
2. Run this command:
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```
3. Follow the prompts:
   - **Login** to your Sanity account
   - **Create new project**: Yes
   - **Project name**: Slater Painting
   - **Dataset**: production
   - **Output path**: ./sanity
   - **Template**: Clean project

### Step 3: Configure Environment Variables

Create a file named `.env.local` in the root folder:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-api-token
```

To get these values:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** settings
4. Copy your **Project ID**
5. Create a new **API Token** with Editor permissions

### Step 4: Deploy Sanity Schemas

```bash
cd sanity
sanity deploy
```

This creates your Sanity Studio (the CMS admin panel).

### Step 5: Add Content

1. Go to your Sanity Studio URL (shown after deployment)
2. Add Services, Projects, and Testimonials
3. Publish them!

### Step 6: Run the Website

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

---

## Project Structure

```
slater-painting-nextjs/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   └── ...
├── sanity/                # Sanity CMS
│   ├── schemas/          # Content schemas
│   │   ├── service.ts
│   │   ├── project.ts
│   │   └── testimonial.ts
│   └── sanity.config.ts
├── lib/                   # Utilities
│   └── sanity.ts         # Sanity client
└── public/               # Static files

```

---

## Editing Content

### To Edit Your Website Content:

1. Go to your Sanity Studio URL (e.g., `https://your-project.sanity.studio`)
2. Or run locally: `npm run sanity`
3. Login and edit:
   - **Services**: Add/edit painting services
   - **Projects**: Upload project photos and descriptions
   - **Testimonials**: Add customer reviews
   - **Settings**: Update phone, email, business info

Changes appear on your website **immediately**!

---

## Deployment

### Deploy to Vercel (Recommended - FREE)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Connect your GitHub repository
5. Add environment variables from `.env.local`
6. Click "Deploy"

Done! Your site is live in minutes.

### Deploy to Netlify

1. Go to https://netlify.com
2. Drag and drop your `slater-painting-nextjs` folder
3. Add environment variables
4. Deploy!

---

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0051a5',    // Your brand color
      secondary: '#...',
    }
  }
}
```

### Modify Layout

Edit components in `/components` folder. Each section is its own component.

### Add New Content Types

1. Create schema in `sanity/schemas/`
2. Add to `sanity.config.ts`
3. Create component in `/components`
4. Fetch data in your page

---

## Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Sanity data not showing
- Check `.env.local` has correct values
- Verify content is published in Sanity Studio
- Clear Next.js cache: `rm -rf .next`

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## What You Get

✅ **Modern Stack**: Next.js 14 + React + TypeScript  
✅ **CMS**: Sanity Studio for easy content editing  
✅ **Styling**: Tailwind CSS (utility-first)  
✅ **Performance**: Static generation + ISR  
✅ **SEO**: Built-in metadata and optimization  
✅ **Responsive**: Works on all devices  
✅ **Free Hosting**: Deploy to Vercel/Netlify free  

---

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Email: slaterpainting864@gmail.com

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start Next.js dev server
npm run sanity          # Start Sanity Studio locally

# Build
npm run build           # Build for production
npm start              # Run production build

# Sanity
sanity deploy          # Deploy Sanity Studio
sanity manage          # Open project settings
```

That's it! You now have a modern, CMS-powered website that you can edit without touching code! 🎉

