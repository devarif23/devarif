# Dynamic Contact Form Setup Guide

This guide will help you set up your contact form to send data to Google Sheets and email notifications.

## Overview
Your contact form now has three main features:
1. ✅ Store form submissions in Google Sheets
2. ✅ Send confirmation email to the user
3. ✅ Form validation and loading states

---

## Setup Instructions

### Step 1: Install Dependencies
Run this command to install EmailJS:
```bash
npm install
```

---

### Step 2: Set Up EmailJS (for sending emails)

#### 2.1 Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account
- Create a new service (Gmail recommended)

#### 2.2 Get Your Credentials
1. Go to EmailJS Dashboard
2. Click "Account" in the top menu
3. Copy your **Public Key**
4. Go to "Email Services" and create a new service
5. Note your **Service ID**
6. Go to "Email Templates" and create a new template
7. Note your **Template ID**

#### 2.3 Create Email Template
In EmailJS Email Templates:
1. Click "Create New Template"
2. Set template name to: `contact_form_template`
3. Use this template content:

```
Subject: Thank you for contacting me! - {{user_subject}}

Hi {{user_name}},

Thank you for reaching out! I have received your message:

---
Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Subject: {{user_subject}}

Message:
{{user_message}}
---

I will get back to you as soon as possible.

Best regards,
Arif Jahan
```

4. Click "Save"

#### 2.4 Update Contact.jsx with Your Credentials
In `src/page/Contact.jsx`, replace these lines:
```javascript
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
```
Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key.

And update the email sending section:
```javascript
const emailResponse = await emailjs.send(
    "YOUR_SERVICE_ID",      // Replace with your Service ID
    "YOUR_TEMPLATE_ID",     // Replace with your Template ID
```

---

### Step 3: Set Up Google Sheets Integration

#### 3.1 Create a Google Sheet
1. Go to [Google Drive](https://drive.google.com)
2. Create a new Google Sheet
3. Name it: `Contact Form Submissions`
4. Create column headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Subject`
   - F1: `Message`

#### 3.2 Create Google Apps Script
1. In your Google Sheet, go to **Tools** → **Script editor**
2. Replace the code with this:

```javascript
// Get the sheet
const SHEET_ID = "YOUR_SHEET_ID"; // Replace with your sheet ID
const SHEET_NAME = "Sheet1"; // Change if your sheet has a different name

function doPost(e) {
  try {
    // Parse the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Add the data
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.subject,
      data.massage
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** and give the script a name

#### 3.3 Deploy Google Apps Script
1. Click the **Deploy** button (top right)
2. Click **New deployment**
3. Select type: **Web app**
4. Set "Execute as" to your Gmail account
5. Set "Who has access" to **Anyone**
6. Click **Deploy**
7. A dialog will appear with your script URL - **Copy this URL**

#### 3.4 Get Your Sheet ID
1. Open your Google Sheet
2. Look at the URL in the address bar
3. Extract the ID between `/d/` and `/edit`
   - Example: `https://docs.google.com/spreadsheets/d/ABC123XYZ/edit`
   - Sheet ID: `ABC123XYZ`

#### 3.5 Update Your Apps Script
1. Go back to the Apps Script editor
2. Find this line: `const SHEET_ID = "YOUR_SHEET_ID";`
3. Replace with your actual Sheet ID
4. Click **Save**

#### 3.6 Update Contact.jsx with Your Script URL
In `src/page/Contact.jsx`, find:
```javascript
const googleSheetResponse = await fetch(
    "YOUR_GOOGLE_APPS_SCRIPT_URL",
```
Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied from the deployment.

---

### Step 4: Final Configuration

Update your Contact.jsx with all three pieces of information:

```javascript
// Line with EmailJS init
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

// Inside handleSubmit function
const googleSheetResponse = await fetch(
    "YOUR_GOOGLE_APPS_SCRIPT_URL",
    ...
);

...

const emailResponse = await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
```

---

## Testing

1. Run your app: `npm run dev`
2. Go to your contact page
3. Fill out the form and click "Send Message"
4. Check:
   - ✅ Success message appears
   - ✅ Form clears
   - ✅ Email is received
   - ✅ Google Sheet has a new row

---

## Troubleshooting

### Form submission not working?
- Check browser console (F12) for errors
- Make sure all credentials are correctly copied
- Verify your Apps Script is deployed with "Anyone" access

### Email not received?
- Check EmailJS template variables match the code
- Check spam folder
- Verify EmailJS service is connected to Gmail

### Google Sheets not updating?
- Check the Apps Script execution logs
- Verify Sheet ID is correct
- Make sure column headers match the script

### CORS Errors?
- Google Apps Script should handle CORS automatically
- If issues persist, verify the script URL is correct

---

## Security Tips

- Never commit your credentials to GitHub
- Use environment variables for production
- Consider adding rate limiting
- Add email validation

---

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Google Apps Script Docs: https://developers.google.com/apps-script/

---

**Your contact form is now fully functional! 🎉**
