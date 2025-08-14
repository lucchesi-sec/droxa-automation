# Deployment Setup Guide

This guide will help you set up automatic deployment to Vercel using GitHub Actions.

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Vercel CLI**: Install globally with `npm i -g vercel`

## Step 1: Connect Vercel to Your Project

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Link your project to Vercel:
   ```bash
   vercel link
   ```
   
   Follow the prompts to create or link to an existing Vercel project.

## Step 2: Get Vercel Project Information

Run these commands to get the required IDs:

```bash
# Get Organization ID
vercel teams ls

# Get Project ID
vercel project ls
```

## Step 3: Generate Vercel Token

1. Go to [Vercel Settings > Tokens](https://vercel.com/account/tokens)
2. Create a new token with a descriptive name (e.g., "GitHub Actions")
3. Copy the token (you'll only see it once)

## Step 4: Set GitHub Secrets

Go to your GitHub repository settings and add these secrets:

1. **Repository Settings** → **Secrets and variables** → **Actions**
2. Add these repository secrets:
   - `VERCEL_TOKEN`: The token you generated in Step 3
   - `VERCEL_ORG_ID`: Your organization/team ID from Step 2
   - `VERCEL_PROJECT_ID`: Your project ID from Step 2

## Step 5: Update Package.json (if needed)

Make sure your `package.json` has the correct scripts:

```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start"
  }
}
```

## Step 6: Push to GitHub

The GitHub Action will automatically trigger when you push to the `main` branch:

```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

## How It Works

### Automatic Deployments

- **Production**: Pushes to `main` branch deploy to production
- **Preview**: Pull requests create preview deployments
- **Quality Checks**: Runs linting and builds before deployment

### Workflow Steps

1. **Code Checkout**: Downloads your repository code
2. **Node.js Setup**: Installs Node.js and caches dependencies
3. **Install Dependencies**: Runs `npm ci` for clean install
4. **Quality Checks**: Runs ESLint to catch issues
5. **Build**: Creates production build
6. **Deploy**: Deploys to Vercel (production for main, preview for PRs)

### Security Features

The `vercel.json` configuration includes:
- Security headers (XSS protection, content type options)
- CORS configuration for API routes
- SPA routing support

## Troubleshooting

### Common Issues

1. **Deployment fails**: Check that all secrets are set correctly
2. **Build errors**: Ensure your project builds locally first
3. **Linting errors**: Fix any ESLint warnings/errors

### Vercel Dashboard

Monitor deployments at:
- **Project Dashboard**: `https://vercel.com/[username]/[project-name]`
- **Deployment Logs**: Available in the Vercel dashboard

### GitHub Actions

Monitor workflow runs at:
- **Repository Actions**: `https://github.com/[username]/[repo]/actions`

## Environment Variables

If your app uses environment variables:

1. Add them to Vercel dashboard under Project Settings → Environment Variables
2. Add sensitive ones to GitHub Secrets if needed in the build process

## Manual Deployment

You can still deploy manually if needed:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
