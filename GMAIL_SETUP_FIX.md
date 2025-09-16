# Gmail API Scope Fix

## The Issue
Error 412: "Request had insufficient authentication scopes" means Gmail service needs re-authentication with proper permissions.

## Quick Fix Steps

### 1. Re-authenticate Gmail Service
1. Go to EmailJS Dashboard → **Email Services**
2. Find your Gmail service and click **Reconnect Service**
3. When prompted, make sure to grant ALL permissions:
   - ✅ Send emails on your behalf
   - ✅ Read email settings
   - ✅ Manage email settings

### 2. Alternative: Use SMTP Instead
If Gmail keeps having issues, switch to SMTP:

1. **Enable 2-Factor Authentication** on your Gmail
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Add SMTP Service in EmailJS**:
   - Service: Custom SMTP
   - SMTP Server: `smtp.gmail.com`
   - Port: `587`
   - Username: `your-email@gmail.com`
   - Password: `your-app-password`

### 3. Test Configuration
After fixing, test with a simple message to verify both:
- ✅ You receive the message
- ✅ User gets auto-reply

## Quick Alternative: Use Different Email Provider
If Gmail continues to have issues, try:
- **Outlook/Hotmail** (usually more reliable)
- **Yahoo Mail**
- **Custom SMTP** from your hosting provider