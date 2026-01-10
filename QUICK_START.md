# 🚀 Quick Publishing Checklist

## Before You Deploy - MUST DO

### 1. Update URLs (Critical!)
- [ ] `src/app/layout.tsx` line 25 → Change `https://weagleinternational.com` to your actual domain
- [ ] `src/app/sitemap.ts` line 4 → Change `https://weagleinternational.com` to your actual domain  
- [ ] `public/robots.txt` line 7 → Change sitemap URL to your actual domain

### 2. Update Contact Info
- [ ] `src/app/page.tsx` lines 645-647 → Add real email and phone number
- [ ] `src/app/products/page.tsx` line 248 → Add real WhatsApp number (format: 1234567890)

### 3. Add Tracking (Optional but Recommended)
- [ ] Google Analytics code
- [ ] Google Search Console verification code (in `src/app/layout.tsx` line 64)

## Quick Deploy to Vercel (5 minutes)

1. **Push to GitHub:**
   ```bash
   cd /Users/apple/Desktop/weagle7/weagle-app
   git init
   git add .
   git commit -m "Production ready"
   git branch -M main
   # Add your GitHub repo URL below
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! ✅

3. **Add Custom Domain:**
   - In Vercel: Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed
   - SSL is automatic!

## After Deployment

- [ ] Test the live site on desktop
- [ ] Test the live site on mobile
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Test all forms and CTAs
- [ ] Share with team for feedback

## Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.

---

**Current Status:** ✅ Build Successful | Ready to Deploy
