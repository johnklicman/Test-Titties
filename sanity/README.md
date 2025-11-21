# Sanity Studio

This is the CMS (Content Management System) for your website.

## First Time Setup

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Initialize your project (if not already done):
```bash
sanity init
```

3. Install dependencies:
```bash
npm install
```

4. Deploy your studio:
```bash
sanity deploy
```

## Local Development

Run Sanity Studio locally:
```bash
npm run dev
```

Studio will be available at: http://localhost:3333

## Deploying Updates

After making changes to schemas or configuration:
```bash
sanity deploy
```

## Managing Content

Access your deployed Sanity Studio at:
`https://your-project.sanity.studio`

### Content Types

1. **Services** - Your painting/staining services
2. **Projects** - Gallery photos and project details
3. **Testimonials** - Customer reviews
4. **Site Settings** - Contact info, hero section, etc.

### Publishing Content

1. Create or edit content
2. Click "Publish" button
3. Changes appear on website within 60 seconds

## Configuration

- **Schemas**: Located in `/schemas` folder
- **Config**: `sanity.config.ts`
- **CLI Config**: `sanity.cli.ts`

## Useful Commands

```bash
# Start development server
npm run dev

# Deploy studio
sanity deploy

# Manage project
sanity manage

# Check dataset
sanity dataset list

# Import data
sanity dataset import data.ndjson production

# Export data
sanity dataset export production data.ndjson
```

## Project Info

Get your project details:
```bash
sanity manage
```

Or visit: https://www.sanity.io/manage

## Documentation

- Sanity Docs: https://www.sanity.io/docs
- Schema Guide: https://www.sanity.io/docs/schema-types
- GROQ Query Language: https://www.sanity.io/docs/groq

