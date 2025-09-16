# EmailJS Template Variables Fix

## Update Your EmailJS Templates

### Template 1: Contact Form Message
```
Subject: New message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{message}}
```

### Template 2: Auto Reply
```
Subject: {{reply_subject}}

Hi {{user_name}},

Thank you for your message:
"{{user_message}}"

I'll get back to you soon!

Best regards,
Md Arham
```

**Update these in your EmailJS dashboard templates to match the variable names.**