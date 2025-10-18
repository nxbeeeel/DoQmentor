# 📧 Email Setup Guide for DoQmentor

## Gmail Configuration

To enable email functionality, you need to set up Gmail App Password:

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Other (Custom name)**
3. Name it: **DoQmentor Website**
4. Click **Generate**
5. Copy the 16-digit password

### Step 3: Create Environment File
Create a file named `.env.local` in the project root with:

```env
GMAIL_USER=documentor.Com@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password-here
```

### Step 4: Add to Vercel
For production deployment on Vercel:

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - `GMAIL_USER` = `documentor.Com@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your-16-digit-app-password`
4. Redeploy your project

## Testing Locally

```bash
# Install dependencies
npm install

# Create .env.local with your credentials
# Run development server
npm run dev

# Test the contact form at http://localhost:3000
```

## How It Works

1. User fills the contact form
2. Form data is sent to `/api/send-email`
3. Server uses nodemailer to send email via Gmail
4. You receive a beautifully formatted email at `documentor.Com@gmail.com`
5. You can reply directly to the customer's email

## Email Format

You'll receive emails with:
- Customer name, email, phone
- Their message/service request
- Professional HTML formatting
- Reply-to address set to customer's email
- Timestamp

## Security Notes

⚠️ **Never commit `.env.local` to git!** (Already in .gitignore)
✅ Use App Passwords, not your actual Gmail password
✅ Keep your credentials secure
✅ Rotate passwords periodically

