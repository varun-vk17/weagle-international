# Weagle International - Premium Spice Export Website

A modern, high-performance Next.js website for Weagle International, a B2B spice export company specializing in premium Indian spices for global markets.

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Framer Motion
- **Premium Design**: Professional B2B-focused design with smooth animations
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, sitemap, and robots.txt
- **Performance**: Optimized images, compression, and production-ready configuration
- **Responsive**: Fully responsive design for all devices
- **Product Catalog**: Detailed product pages showcasing spice categories

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Update the domain in `src/app/layout.tsx` (line 25) to your actual domain
5. Add environment variables if needed

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Netlify Next.js plugin
- **AWS Amplify**: Connect your repository and deploy
- **DigitalOcean App Platform**: Deploy directly from GitHub
- **Self-hosted**: Build and run with `npm run build && npm start`

## 🔧 Configuration

### Update Domain

Before deploying, update the domain in these files:

1. `src/app/layout.tsx` - Line 25: `metadataBase: new URL('https://your-domain.com')`
2. `src/app/sitemap.ts` - Line 4: `const baseUrl = 'https://your-domain.com'`
3. `public/robots.txt` - Line 7: `Sitemap: https://your-domain.com/sitemap.xml`

### Add Contact Information

Update the contact details in:
- `src/app/page.tsx` - Footer section (lines 645-647)
- WhatsApp link in products page (line 248)

### Add Analytics

Add your analytics tracking codes:
- Google Analytics
- Facebook Pixel
- Other tracking scripts

Add them to `src/app/layout.tsx` or create a separate analytics component.

## 📁 Project Structure

```
weagle-app/
├── public/              # Static assets (images, logos, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   ├── products/    # Products page
│   │   ├── globals.css  # Global styles
│   │   └── sitemap.ts   # Dynamic sitemap
│   └── components/
│       └── animations.tsx # Reusable animation components
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## 🎨 Customization

### Colors & Branding

The design uses CSS variables defined in `src/app/globals.css`. Update the color scheme by modifying the CSS variables.

### Content

- **Home Page**: Edit `src/app/page.tsx`
- **Products Page**: Edit `src/app/products/page.tsx`
- **Metadata**: Edit `src/app/layout.tsx`

## 📊 SEO Checklist

- ✅ Comprehensive metadata with Open Graph and Twitter cards
- ✅ Dynamic sitemap.xml
- ✅ robots.txt configured
- ✅ Semantic HTML structure
- ✅ Image alt tags
- ✅ Proper heading hierarchy
- ✅ Fast page load times
- ✅ Mobile responsive

## 🔒 Production Checklist

Before going live:

- [ ] Update domain URLs in configuration files
- [ ] Add real contact information (email, phone)
- [ ] Add Google Analytics or other tracking
- [ ] Add Google Search Console verification
- [ ] Test all forms and CTAs
- [ ] Verify all images load correctly
- [ ] Test on multiple devices and browsers
- [ ] Set up SSL certificate (automatic on Vercel)
- [ ] Configure custom domain
- [ ] Test contact forms (if connected to backend)

## 📝 License

Copyright © 2024 Weagle International. All rights reserved.

## 🤝 Support

For technical support or questions, contact your development team.
