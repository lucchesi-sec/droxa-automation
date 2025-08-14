#!/bin/bash

# Droxa Automation - Vercel Deployment Setup Script
# This script helps you set up automatic deployment to Vercel

set -e

echo "🚀 Droxa Automation - Vercel Deployment Setup"
echo "=============================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel@latest
    echo "✅ Vercel CLI installed successfully"
else
    echo "✅ Vercel CLI is already installed"
fi

echo ""
echo "📋 Setup Steps:"
echo "1. Make sure you're logged in to Vercel"
echo "2. Link your project to Vercel"
echo "3. Get your project information"
echo ""

# Check if user is logged in to Vercel
echo "🔐 Checking Vercel authentication..."
if vercel whoami &> /dev/null; then
    echo "✅ You are logged in to Vercel as: $(vercel whoami)"
else
    echo "❌ Not logged in to Vercel. Please run:"
    echo "   vercel login"
    exit 1
fi

echo ""
echo "🔗 Linking project to Vercel..."
echo "Run the following command and follow the prompts:"
echo "   vercel link"
echo ""

read -p "Press Enter after you've linked your project..."

echo ""
echo "📊 Getting project information..."
echo ""

echo "📁 Your Vercel teams/organizations:"
vercel teams ls

echo ""
echo "📂 Your Vercel projects:"
vercel project ls

echo ""
echo "🔑 Next Steps:"
echo "1. Go to https://vercel.com/account/tokens"
echo "2. Create a new token named 'GitHub Actions'"
echo "3. Copy the token"
echo ""
echo "4. Go to your GitHub repository settings:"
echo "   https://github.com/[your-username]/[your-repo]/settings/secrets/actions"
echo ""
echo "5. Add these repository secrets:"
echo "   - VERCEL_TOKEN: [the token you just created]"
echo "   - VERCEL_ORG_ID: [your organization ID from the list above]"
echo "   - VERCEL_PROJECT_ID: [your project ID from the list above]"
echo ""
echo "6. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m \"Add GitHub Actions deployment workflow\""
echo "   git push origin main"
echo ""
echo "🎉 Your automatic deployment will be ready!"
echo "   Production deploys: Push to main branch"
echo "   Preview deploys: Create pull requests"
echo ""
echo "📱 Monitor deployments at:"
echo "   - Vercel: https://vercel.com/dashboard"
echo "   - GitHub Actions: https://github.com/[your-username]/[your-repo]/actions"
