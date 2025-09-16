# Gmail App Password Setup

## Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification
3. Enable if not already enabled

## Step 2: Generate App Password
1. Go to Security → 2-Step Verification → App passwords
2. Select app: **Mail**
3. Select device: **Other (custom name)** → Type: "EmailJS"
4. Click **Generate**
5. Copy the **16-digit password** (format: xxxx xxxx xxxx xxxx)

## Step 3: Update EmailJS Service
1. Go to EmailJS Dashboard → Email Services
2. Delete current Gmail service
3. Add new service → Gmail
4. Use your **16-digit app password** instead of regular password

## Step 4: Test
Your contact form should now work without the 412 error.

**Note**: Use the app password, not your regular Gmail password!