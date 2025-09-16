# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Templates

### Template 1: Main Contact Form (for you to receive messages)
1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Contact Form Message`
3. Template content:
```
Subject: New Contact Form Message from {{from_name}}

Hello Md Arham,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

### Template 2: Auto-Reply (for users to receive confirmation)
1. Create another template
2. Template Name: `Auto Reply`
3. Template content:
```
Subject: Thank you for contacting me - {{subject}}

Hi {{to_name}},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your message:
"{{original_message}}"

Best regards,
Md Arham
Data Scientist & Full Stack Developer

---
This is an automated response. Please do not reply to this email.
```

## 4. Get Your Credentials
1. Go to **Account** → **General**
2. Copy your **Public Key**
3. Note down your **Service ID** from Email Services
4. Note down both **Template IDs** from Email Templates

## 5. Update Environment Variables
Update your `.env` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## 6. Test Your Setup
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the message
4. Check if the user receives an auto-reply

## Important Notes
- Keep your credentials secure and never commit them to version control
- The free EmailJS plan allows 200 emails per month
- Make sure to add your domain to the allowed origins in EmailJS settings
- For production, add your live domain to EmailJS settings

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all environment variables are set correctly
- Ensure your email service is properly connected in EmailJS
- Check EmailJS dashboard for any error logs