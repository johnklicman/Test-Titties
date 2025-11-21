# 🚀 Deployment Guide

Complete guide to deploying your Slater Painting website to production.

## Option 1: Vercel (Recommended - FREE)

Vercel is made by the creators of Next.js and offers the best performance.

### Prerequisites
- GitHub account
- Your code pushed to a GitHub repository

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" and use GitHub to login

3. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., slaterpainting.com)
   - Update DNS records as shown
   - SSL certificate auto-configured

### Updates
Every time you push to GitHub, Vercel auto-deploys!

```bash
git add .
git commit -m "Update content"
git push
```

---

## Option 2: Netlify (FREE)

### Method A: Drag and Drop

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to https://netlify.com
3. Drag your project folder onto Netlify
4. Add environment variables in Site Settings
5. Deploy!

### Method B: Git Integration

1. Push to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Deploy!

---

## Option 3: Self-Hosted (VPS/Server)

For hosting on your own server (AWS, DigitalOcean, etc.)

### Requirements
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

### Steps

1. **Clone on Server**
   ```bash
   git clone your-repo-url
   cd slater-painting-nextjs
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   nano .env.local
   ```
   Add your Sanity credentials

3. **Build**
   ```bash
   npm run build
   ```

4. **Install PM2**
   ```bash
   npm install -g pm2
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "slater-painting" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Sanity Studio Deployment

Your Sanity Studio should already be deployed from setup, but if not:

```bash
cd sanity
sanity deploy
```

Choose a hostname and your CMS will be at:
`https://your-hostname.sanity.studio`

---

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | `abc123def` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version date | `2024-01-01` |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `SANITY_API_TOKEN` | For preview mode (not required for production) |

Get these from: https://www.sanity.io/manage → Your Project → API

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Sanity content appears on site
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured
- [ ] SEO metadata correct
- [ ] Analytics installed (Google Analytics, etc.)
- [ ] Submit sitemap to Google Search Console

---

## Continuous Deployment

### Automatic Updates (Vercel/Netlify)

Once set up with Git:
1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```
3. Site auto-deploys in 2-3 minutes!

### Content Updates

Changes in Sanity Studio appear automatically thanks to ISR:
1. Edit content in Sanity
2. Click "Publish"
3. Changes appear within 60 seconds

---

## Performance Optimization

### 1. Image Optimization
Already handled by Next.js Image component + Sanity CDN ✓

### 2. Caching
Configured with ISR (60 second revalidation) ✓

### 3. CDN
Vercel/Netlify automatically use global CDN ✓

### 4. Additional Optimizations

Add to `next.config.js`:
```javascript
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}
```

---

## Monitoring

### Vercel Analytics (FREE)
- Go to Vercel Dashboard
- Click your project
- Go to Analytics tab
- View real-time traffic and performance

### Google Analytics

1. Get your GA tracking ID
2. Add to `app/layout.tsx`:

```typescript
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Troubleshooting

### Build Fails
- Check all environment variables are set
- Verify Node.js version (18+)
- Run `npm run build` locally first

### Images Not Loading
- Verify Sanity project ID is correct
- Check images are published in Sanity
- Confirm `cdn.sanity.io` is in `next.config.js` image domains

### Content Not Updating
- Verify Sanity content is published
- Wait 60 seconds for ISR to revalidate
- Clear browser cache

### 500 Errors
- Check server logs
- Verify environment variables
- Check Sanity API status

---

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Sanity Help: https://www.sanity.io/help

For site-specific help:
- Email: slaterpainting864@gmail.com
- Phone: (619) 952-8685

---

**Congratulations! Your site is live! 🎉**

