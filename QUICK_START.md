# Quick Start Guide for Dynamic Contact Form

## ⚡ Quick Setup (5 minutes)

### 1. Copy Environment File
```bash
cp .env.example .env
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get Your Credentials

**From EmailJS:**
- Go to https://www.emailjs.com/
- Sign up → Go to Account → Copy Public Key
- Go to Email Services → Copy Service ID
- Go to Email Templates → Create template → Copy Template ID

**From Google:**
- Open your contact form spreadsheet
- Copy Sheet ID from URL (between /d/ and /edit)
- Go to Tools → Script Editor
- Paste the code from GOOGLE_APPS_SCRIPT.js
- Click Deploy → Web app → Copy the URL

### 4. Fill .env File
```
VITE_EMAILJS_PUBLIC_KEY=abc123...
VITE_EMAILJS_SERVICE_ID=service_xyz...
VITE_EMAILJS_TEMPLATE_ID=template_123...
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/d/...
```

### 5. Run Development Server
```bash
npm run dev
```

### 6. Test Your Form
- Fill out the contact form
- Click "Send Message"
- Check your email and Google Sheet ✅

---

## Files You Need to Know

- **src/page/Contact.jsx** - The contact form (now dynamic!)
- **.env** - Your credentials (add to .env file, don't commit)
- **CONTACT_FORM_SETUP.md** - Detailed setup instructions
- **GOOGLE_APPS_SCRIPT.js** - Copy this to Google Apps Script editor

---

## Troubleshooting

**Form not submitting?**
- Check browser console for errors (F12)
- Make sure all .env variables are filled
- Verify Google Apps Script is deployed with "Anyone" access

**Email not working?**
- Check spam folder
- Verify EmailJS template variables match the code

**Google Sheets not updating?**
- Make sure Sheet ID in Apps Script matches your spreadsheet

---

## Next Steps

1. Deploy your site to Vercel
2. Test the form on production
3. Monitor submissions in Google Sheets
4. Set up email filters for contact submissions

**That's it! Your dynamic contact form is ready! 🎉**
