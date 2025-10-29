# Netlify Environment Variables Setup

## Step 1: Go to Netlify Dashboard
1. Open: https://app.netlify.com
2. Login with your account
3. Click on your site: **glittering-kitsune-39606e**

## Step 2: Add Environment Variables
1. Go to **Site Settings**
2. Click **Environment Variables** (left sidebar)
3. Click **Add a variable**

## Step 3: Add These Variables One by One

**Variable 1:**
- Key: `VITE_EMAILJS_SERVICE_ID`
- Value: `service_45kcl9i`

**Variable 2:**
- Key: `VITE_EMAILJS_TEMPLATE_ID`
- Value: `template_s0pmv4p`

**Variable 3:**
- Key: `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID`
- Value: `template_a4b6vxw`

**Variable 4:**
- Key: `VITE_EMAILJS_PUBLIC_KEY`
- Value: `3dmxvo_MrGtJlW27r`

**Variable 5:**
- Key: `EMAIL_SERVICE`
- Value: `mdarham1749@gmail.com`

**Variable 6:**
- Key: `EMAIL_APP_PASSWORD`
- Value: `ikll npgq bmho tnug`

## Step 4: Redeploy
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

## Step 5: Test Contact Form
Visit: https://glittering-kitsune-39606e.netlify.app
Fill contact form and test!