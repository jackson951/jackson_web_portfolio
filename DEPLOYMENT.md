# Portfolio Website Deployment Guide

This guide explains how to deploy your portfolio website to GitHub Pages.

## Quick Start

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. Enable GitHub Pages

#### Option A: GitHub Actions (Recommended)
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**
5. Your site will deploy automatically to: `https://your-username.github.io/your-repo-name`

#### Option B: gh-pages Branch
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **gh-pages branch**
4. Click **Save**
5. The `deploy-gh-pages.yml` workflow will create and update the `gh-pages` branch automatically

## Manual Deployment

If you want to manually build and deploy:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in the /dist folder
```

## Configuration

### Vite Configuration
- Base URL: `/` (for GitHub Pages)
- Build output: `/dist`
- Source maps enabled for debugging
- Code splitting for better performance

### GitHub Actions Workflow
- **Trigger**: Push to `main`/`master` or pull requests
- **Node.js Version**: 18
- **Build Process**: `npm ci` → `npm run build`
- **Deployment**: Automatic to GitHub Pages

## Environment Variables

For the backend server (if deployed separately):
- Create a `.env` file in the `/server` directory
- Add your SMTP credentials for the contact form
- **Important**: Never commit `.env` files to GitHub

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the root directory:
   ```
   yourdomain.com
   ```

2. Update your DNS settings to point to GitHub Pages

3. In GitHub Settings → Pages, add your custom domain

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript compilation: `npm run build`
- Verify Vite configuration in `vite.config.ts`

### GitHub Actions Failures
- Check the Actions tab in your repository
- Ensure Node.js version is compatible
- Verify all required files are committed

### GitHub Pages Not Loading
- Check that the workflow completed successfully
- Ensure the `dist` folder is being uploaded
- Verify the base URL in `vite.config.ts` is correct

## Performance Optimization

The build process includes:
- Code splitting for faster loading
- Source maps for debugging
- Optimized assets
- Minified production code

## Contact Form

The contact form requires a backend server for email functionality. For GitHub Pages hosting:

1. Deploy the backend server separately (e.g., Heroku, Railway, Vercel)
2. Update the API endpoint in your frontend code
3. Configure CORS settings on your backend server

## Support

For issues related to:
- **Frontend**: Check React and Vite documentation
- **Deployment**: Review GitHub Pages documentation
- **Backend**: See server README for setup instructions