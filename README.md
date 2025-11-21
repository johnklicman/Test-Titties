# Slater Painting - Next.js + Sanity CMS

A modern, high-performance website for Slater Painting built with Next.js 14 and Sanity CMS.

## 🚀 Features

- ✅ **Next.js 14** with App Router
- ✅ **Sanity CMS** for easy content management
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** - Works on all devices
- ✅ **SEO Optimized** - Built-in metadata and SEO best practices
- ✅ **ISR (Incremental Static Regeneration)** - Fast performance with auto-updates
- ✅ **Image Optimization** - Next.js Image component with Sanity CDN
- ✅ **Fully Editable** - All content managed through Sanity Studio

## 📋 Prerequisites

Before you begin, make sure you have installed:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **npm** or **yarn** package manager

## 🛠️ Installation

### Step 1: Clone or Download

If you have this folder, you're ready to go!

### Step 2: Install Dependencies

Open terminal in this folder and run:

```bash
npm install
```

### Step 3: Set Up Sanity CMS

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Navigate to the sanity folder and initialize:
```bash
cd sanity
sanity init
```

Follow the prompts:
- Login to Sanity (or create free account)
- Create new project: **Slater Painting**
- Use dataset: **production**
- Output path: **./sanity** (already created)

3. Install Sanity dependencies:
```bash
npm install
```

### Step 4: Configure Environment Variables

In the ROOT folder (not sanity folder), create a file named `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

To get your Project ID:
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Copy the **Project ID**

### Step 5: Deploy Sanity Studio

From the sanity folder:
```bash
sanity deploy
```

This creates your CMS at `https://your-project.sanity.studio`

## 🏃‍♂️ Running the Project

### Development Mode

In the root folder:
```bash
npm run dev
```

Your website will be at: `http://localhost:3000`

### Run Sanity Studio Locally

In the sanity folder:
```bash
npm run dev
```

Sanity Studio will be at: `http://localhost:3333`

## 📝 Managing Content

### Access Sanity Studio

Go to your deployed Studio URL or run it locally:
```bash
cd sanity
npm run dev
```

### Content Types

1. **Services** - Add/edit painting services
   - Title, description, icon, features
   - Upload service images
   - Set display order

2. **Projects** - Gallery photos
   - Upload project images
   - Add titles, descriptions, locations
   - Categorize (interior, exterior, etc.)
   - Mark as featured

3. **Testimonials** - Customer reviews
   - Name, review text, rating
   - Optional avatar photo
   - Location

4. **Site Settings** - General site info
   - Contact information
   - Hero section content
   - Social media links
   - Business details

### Publishing Content

1. Create or edit content in Sanity Studio
2. Click **Publish**
3. Changes appear on your website within 60 seconds (thanks to ISR)

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0051a5',      // Your brand color
  'primary-dark': '#003d80',
}
```

### Modify Components

All components are in `/components` folder:
- `Hero.tsx` - Homepage hero section
- `Services.tsx` - Services grid
- `Gallery.tsx` - Project gallery
- `Testimonials.tsx` - Reviews
- `Contact.tsx` - Contact form
- etc.

### Update Metadata (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  keywords: ['your', 'keywords'],
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended - FREE)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Add environment variables from `.env.local`
6. Click "Deploy"

Done! Your site is live in minutes.

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `slater-painting-nextjs` folder
3. Add environment variables
4. Deploy!

## 📁 Project Structure

```
slater-painting-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Homepage with data fetching
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── Gallery.tsx         # Project gallery
│   ├── Testimonials.tsx    # Reviews
│   ├── About.tsx           # About section
│   ├── Process.tsx         # Process steps
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Site footer
├── lib/
│   ├── sanity.ts           # Sanity client & queries
│   └── types.ts            # TypeScript types
├── sanity/
│   ├── schemas/            # Content schemas
│   │   ├── service.ts
│   │   ├── project.ts
│   │   ├── testimonial.ts
│   │   └── siteSettings.ts
│   └── sanity.config.ts    # Sanity configuration
└── public/                 # Static assets
```

## 🔧 Common Tasks

### Add a New Service

1. Go to Sanity Studio
2. Click "Services"
3. Click "Create"
4. Fill in details and publish

### Update Hero Image

1. Go to Sanity Studio
2. Click "Site Settings"
3. Upload new hero image
4. Publish

### Change Contact Info

1. Go to Sanity Studio
2. Click "Site Settings"
3. Update phone, email, address
4. Publish

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Sanity data not showing
- Check `.env.local` has correct Project ID
- Verify content is published in Sanity Studio
- Wait 60 seconds for ISR to update

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Port already in use
```bash
npm run dev -- -p 3001
```

## 📞 Support

For questions or issues:
- Email: slaterpainting864@gmail.com
- Phone: (619) 952-8685

## 📄 License

© 2024 Slater Painting. All rights reserved.

---

## 🎉 You're All Set!

Your modern, CMS-powered website is ready to go. Update content anytime through Sanity Studio without touching any code!

**Quick Start Checklist:**
- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Set up Sanity project
- [ ] Create `.env.local` file
- [ ] Deploy Sanity Studio
- [ ] Add content in Sanity
- [ ] Run `npm run dev`
- [ ] Deploy to Vercel

Need help? Check `SETUP-INSTRUCTIONS.md` for detailed step-by-step guide!

