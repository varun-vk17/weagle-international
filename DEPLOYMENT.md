# Production Deployment Guide - Weagle International

## ✅ Pre-Deployment Checklist

### 1. Configuration Updates Required

Before deploying to production, you MUST update the following:

#### Domain Configuration
- [ ] `src/app/layout.tsx` (line 25): Update `metadataBase` URL
- [ ] `src/app/sitemap.ts` (line 4): Update `baseUrl`
- [ ] `public/robots.txt` (line 7): Update sitemap URL

#### Contact Information
- [ ] `src/app/page.tsx` (lines 645-647): Add real email and phone number
- [ ] `src/app/products/page.tsx` (line 248): Update WhatsApp link with real number

#### Analytics & Tracking
- [ ] Add Google Analytics tracking code
- [ ] Add Google Search Console verification code in `src/app/layout.tsx` (line 64)
- [ ] Add any other tracking pixels (Facebook, LinkedIn, etc.)

### 2. Content Review

- [ ] Review all text content for accuracy
- [ ] Verify all product names and descriptions
- [ ] Check testimonials are approved for use
- [ ] Ensure all images are properly licensed
- [ ] Verify certification logos are current

### 3. Technical Checks

- [ ] Run `npm run build` successfully ✅ (Already verified)
- [ ] Test all pages in production mode
- [ ] Verify all images load correctly
- [ ] Test form submissions (if backend is connected)
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers (Chrome, Safari, Firefox, Edge)
- [ ] Verify all links work correctly
- [ ] Test animations and interactions

### 4. SEO & Performance

- [ ] Verify metadata is correct on all pages
- [ ] Check Open Graph preview on social media debuggers
- [ ] Test page load speed (aim for < 3 seconds)
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt is accessible
- [ ] Ensure all images have alt tags

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by the creators of Next.js
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free SSL certificates
- Automatic deployments from Git

**Steps:**

1. **Push to GitHub**
   ```bash
   cd /Users/apple/Desktop/weagle7/weagle-app
   git init
   git add .
   git commit -m "Initial commit - Production ready"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., weagleinternational.com)
   - Follow DNS configuration instructions
   - Vercel will automatically provision SSL

4. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any API keys or secrets

**Cost:** Free for personal/commercial use with generous limits

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Install the Next.js Runtime plugin
   - Click "Deploy"

3. **Configure Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

**Cost:** Free tier available

---

### Option 3: Self-Hosted (VPS/Cloud Server)

**Requirements:**
- Ubuntu/Debian server
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Prepare Server**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Upload Code**
   ```bash
   # On your local machine
   cd /Users/apple/Desktop/weagle7/weagle-app
   npm run build
   
   # Create deployment package
   tar -czf weagle-app.tar.gz .next public package.json package-lock.json next.config.ts
   
   # Upload to server
   scp weagle-app.tar.gz user@your-server:/var/www/
   ```

3. **Setup on Server**
   ```bash
   # On server
   cd /var/www
   tar -xzf weagle-app.tar.gz
   npm install --production
   
   # Start with PM2
   pm2 start npm --name "weagle-app" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name weagleinternational.com www.weagleinternational.com;
       
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

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d weagleinternational.com -d www.weagleinternational.com
   ```

**Cost:** $5-20/month for VPS

---

## 🔧 Post-Deployment Tasks

### Immediate (Day 1)

1. **Verify Deployment**
   - [ ] Visit your live site
   - [ ] Test all pages
   - [ ] Check mobile version
   - [ ] Verify forms work
   - [ ] Test all CTAs

2. **Setup Monitoring**
   - [ ] Add to Google Search Console
   - [ ] Add to Bing Webmaster Tools
   - [ ] Setup uptime monitoring (e.g., UptimeRobot)
   - [ ] Configure error tracking (e.g., Sentry)

3. **SEO Setup**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Submit sitemap to Bing Webmaster Tools
   - [ ] Verify robots.txt is accessible
   - [ ] Test structured data (if added)

### Week 1

- [ ] Monitor analytics for errors
- [ ] Check page load speeds
- [ ] Review user behavior in analytics
- [ ] Fix any reported issues
- [ ] Gather initial feedback

### Ongoing

- [ ] Regular content updates
- [ ] Monitor search rankings
- [ ] Update product information
- [ ] Add new testimonials
- [ ] Security updates for dependencies

---

## 🛠️ Maintenance

### Regular Updates

```bash
# Update dependencies (monthly)
npm update
npm audit fix

# Rebuild and redeploy
npm run build
```

### Backup Strategy

- Code is backed up in Git repository
- If using a database, setup automated backups
- Keep copies of all images and assets

### Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check Lighthouse scores regularly
- Aim for 90+ scores on all metrics

---

## 📞 Support & Troubleshooting

### Common Issues

**Build fails:**
- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

**Images not loading:**
- Verify images are in `/public` folder
- Check file paths are correct
- Ensure image files are committed to Git

**Slow page loads:**
- Optimize images (compress, use WebP)
- Check for large dependencies
- Enable caching in hosting platform

### Getting Help

- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

## 📊 Success Metrics

Track these metrics post-launch:

- **Performance**: Page load time < 3 seconds
- **SEO**: Google PageSpeed score > 90
- **Uptime**: 99.9% availability
- **Engagement**: Bounce rate < 60%
- **Conversions**: Form submissions tracking

---

**Last Updated:** January 10, 2026
**Status:** ✅ Production Ready
