# Vercel Deployment Guide

This guide will help you deploy your OpenAI ChatKit starter app to Vercel.

## Prerequisites

1. A GitHub account with this repository pushed
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Your OpenAI API credentials:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`

## Quick Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Prepare Your Repository**
   ```bash
   # Ensure all changes are committed and pushed
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in (recommend using GitHub for easier integration)

3. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `openai-chatkit-starter-app` repository
   - Click "Import"

4. **Configure Your Project**
   - Vercel will automatically detect it's a Next.js app
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

5. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   | Name | Value | Notes |
   |------|-------|-------|
   | `OPENAI_API_KEY` | `sk-proj-...` | Your OpenAI API key |
   | `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` | `wf_...` | Your ChatKit workflow ID |
   | `CHATKIT_API_BASE` | (optional) | Only if using custom endpoint |

   **Important:** 
   - Mark `OPENAI_API_KEY` as "Secret" for security
   - Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
   - You can add these for all environments (Production, Preview, Development)

6. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - You'll get a live URL like `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Follow the prompts to link your project
# Add environment variables when prompted

# Deploy to production
vercel --prod
```

To add environment variables via CLI:
```bash
vercel env add OPENAI_API_KEY
vercel env add NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
```

## Post-Deployment

### Verify Your Deployment

1. Visit your deployed URL (e.g., `your-project.vercel.app`)
2. Check that the ChatKit interface loads correctly
3. Test the chat functionality with starter prompts
4. Verify theme switching works

### Set Up Automatic Deployments

Once connected, Vercel automatically:
- Deploys to production on every push to `main` branch
- Creates preview deployments for pull requests
- Provides deployment logs and analytics

### Custom Domain (Optional)

1. Go to your project's "Settings" in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)

## Troubleshooting

### Build Failures

**Error: Missing environment variables**
- Solution: Add all required environment variables in Vercel dashboard
- Go to Project Settings → Environment Variables

**Error: Build exceeded memory limit**
- Solution: Upgrade to a paid Vercel plan or optimize your build

**Error: API route not working**
- Solution: Ensure API routes are in `app/api/` directory
- Verify edge runtime configuration in your route files

### Runtime Issues

**ChatKit not loading**
- Check browser console for errors
- Verify `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` is set correctly
- Ensure workflow ID is valid in OpenAI dashboard

**Domain verification error**
- Error: "Domain verification failed for [your-domain]"
- Solution: 
  1. Go to https://platform.openai.com/settings/organization/security/domain-allowlist
  2. Click "Add domain"
  3. Enter your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
  4. Click "Add" - ChatKit will display a public key confirmation message
  5. Wait a few moments for the domain verification to propagate
  6. Refresh your Vercel deployment page - the error should be resolved
  
  **Note**: The public key shown is for your reference only and does not need to be added to your application code or environment variables. Simply adding the domain to the allowlist is sufficient.

**Session creation fails**
- Verify `OPENAI_API_KEY` is set in Vercel environment variables
- Check Vercel function logs for error details
- Ensure API key has ChatKit access permissions

### Checking Logs

1. Go to your project in Vercel dashboard
2. Click "Deployments"
3. Select a deployment
4. View "Build Logs" and "Function Logs"

## Managing Environment Variables

### Update Variables
1. Go to Project Settings → Environment Variables
2. Edit or delete existing variables
3. Redeploy to apply changes

### Environment-Specific Variables
- **Production**: Used for production deployments
- **Preview**: Used for PR preview deployments
- **Development**: Used when running `vercel dev` locally

## Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use Vercel's environment variables** - They're encrypted at rest
3. **Mark sensitive vars as Secret** - Hides values in dashboard
4. **Rotate API keys regularly** - Update in Vercel when you do
5. **Use preview deployments** - Test changes before production

## Monitoring & Analytics

Vercel provides:
- **Analytics**: Page views, visitor data (Settings → Analytics)
- **Speed Insights**: Performance metrics (Settings → Speed Insights)
- **Web Vitals**: Core Web Vitals tracking
- **Function Logs**: API route execution logs

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## Need Help?

- Check [Vercel Status](https://vercel-status.com)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Review your deployment logs in dashboard
