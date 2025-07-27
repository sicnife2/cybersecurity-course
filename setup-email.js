const fs = require('fs');
const path = require('path');

console.log('📧 CYBERSECURITY COURSE EMAIL SETUP');
console.log('=====================================\n');

console.log('🎯 SETUP INSTRUCTIONS:');
console.log('1. You need to enable 2-Factor Authentication on your Gmail account');
console.log('2. Generate a Gmail App Password (NOT your regular password)');
console.log('3. Create a .env.local file with your credentials\n');

console.log('📋 STEP-BY-STEP GUIDE:');
console.log('1. Go to your Google Account settings: https://myaccount.google.com/');
console.log('2. Navigate to Security > 2-Step Verification');
console.log('3. Enable 2-Step Verification if not already enabled');
console.log('4. Go to Security > App passwords');
console.log('5. Select "Mail" as the app and "Other" as device');
console.log('6. Name it "Cybersecurity Course" and click Generate');
console.log('7. Copy the 16-character password\n');

console.log('🔧 CREATE .env.local FILE:');
console.log('Create a file named .env.local in your project root with:');
console.log('');
console.log('EMAIL_USER=your-gmail@gmail.com');
console.log('EMAIL_PASS=your-16-character-app-password');
console.log('');

// Check if .env.local already exists
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file already exists!');
  console.log('Make sure it contains the correct EMAIL_USER and EMAIL_PASS values.\n');
} else {
  console.log('❌ .env.local file not found.');
  console.log('Create it with the format shown above.\n');
}

console.log('🧪 TESTING:');
console.log('1. Start your development server: npm run dev');
console.log('2. Go to the contact form on your website');
console.log('3. Fill out and submit the form');
console.log('4. Check your email (sicnife04@gmail.com) for the message');
console.log('5. The sender will also receive a confirmation email\n');

console.log('🚀 PRODUCTION DEPLOYMENT:');
console.log('For Vercel deployment, add these environment variables:');
console.log('- EMAIL_USER: Your Gmail address');
console.log('- EMAIL_PASS: Your Gmail app password\n');

console.log('📞 SUPPORT:');
console.log('If you have issues:');
console.log('1. Make sure 2FA is enabled on your Gmail account');
console.log('2. Verify the app password is correct (16 characters)');
console.log('3. Check that environment variables are set correctly');
console.log('4. Ensure your Gmail account allows app access\n');

console.log('✅ EMAIL SYSTEM FEATURES:');
console.log('- Professional HTML email templates');
console.log('- Contact form submissions to sicnife04@gmail.com');
console.log('- Automatic confirmation emails to senders');
console.log('- Admin panel contact tracking');
console.log('- Form validation and error handling');
console.log('- Responsive email design\n');

console.log('🎉 Your email system is ready to go!');
console.log('Follow the setup instructions above to start receiving real emails.'); 