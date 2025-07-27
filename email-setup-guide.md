# Email System Setup Guide

## Setting Up Real Email Functionality

To enable real email sending from your contact form, follow these steps:

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

### 2. Gmail App Password Setup

**IMPORTANT**: You need to use a Gmail App Password, NOT your regular Gmail password.

#### Steps to get Gmail App Password:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Select "Other" as device (name it "Cybersecurity Course")
   - Click "Generate"
   - Copy the 16-character password

3. **Use the App Password**:
   - Replace `your-app-password-here` in `.env.local` with the generated password
   - Replace `your-email@gmail.com` with your actual Gmail address

### 3. Security Notes

- **Never commit `.env.local` to git** - it contains sensitive information
- The `.env.local` file is already in `.gitignore`
- App passwords are more secure than regular passwords
- You can revoke app passwords anytime from Google Account settings

### 4. Testing

Once configured:
1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email (sicnifr04@gmail.com) for the message
5. The sender will also receive a confirmation email

### 5. Production Deployment

For Vercel deployment:
1. Go to your Vercel project settings
2. Add the environment variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
3. Redeploy your application

### 6. Email Features

The email system includes:
- ✅ Professional HTML email templates
- ✅ Contact form submission to sicnifr04@gmail.com
- ✅ Automatic confirmation emails to senders
- ✅ Form validation and error handling
- ✅ Admin tracking in localStorage
- ✅ Responsive email design

### Troubleshooting

If emails aren't sending:
1. Check that 2FA is enabled on your Gmail account
2. Verify the app password is correct
3. Ensure environment variables are set correctly
4. Check the browser console for error messages
5. Verify your Gmail account allows "less secure app access" (if needed)

### Alternative Email Services

If you prefer not to use Gmail, you can modify the API route to use:
- SendGrid
- Mailgun
- AWS SES
- Resend
- Or any other SMTP service 