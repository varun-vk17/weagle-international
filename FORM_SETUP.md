# Form Email Submission - Setup Instructions

## ✅ Implementation Complete

All forms across the website now send emails to **info@weagleinternational.com**

### Forms Updated:
- ✅ Home page - Modal form (Request Sample & Pricing)
- ✅ Home page - Footer contact form
- ✅ About page - Modal form (Request Sample & Pricing)
- ✅ Products page - Modal form (Request Sample & Pricing)

## 🔑 Required: Get Resend API Key

1. **Sign up at Resend:**
   - Go to https://resend.com
   - Create free account (100 emails/day)
   - Verify your email

2. **Get API Key:**
   - Go to API Keys section
   - Create new API key
   - Copy the key

3. **Add to Environment:**
   ```bash
   # Create .env.local file
   cd /Users/apple/Desktop/weagle7/weagle-app
   echo "RESEND_API_KEY=re_your_actual_key_here" > .env.local
   ```

4. **Restart Dev Server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

## 📧 Email Configuration

**Current Setup:**
- From: `onboarding@resend.dev` (Resend's test domain)
- To: `info@weagleinternational.com`
- Reply-To: Customer's email

**For Production (Optional):**
To use your own domain (e.g., noreply@weagleinternational.com):
1. Add and verify your domain in Resend dashboard
2. Update `from` field in `/src/app/api/send-email/route.ts`

## 🧪 Testing

1. Fill out any form on the website
2. Click Submit
3. Check info@weagleinternational.com for the email
4. Success message should appear on the form

## 📝 Form Types

- **Sample & Pricing** (Modal): Includes company, product interest, volume
- **Contact** (Footer): Simpler form for general inquiries
