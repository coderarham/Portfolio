# Simple EmailJS Templates

## Template 1: Contact Form
```
Subject: New Contact from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

## Template 2: Auto Reply
```
Subject: Thank you for contacting me

Hi {{name}},

Thank you for your message. I'll get back to you soon!

Your message: {{message}}

Best regards,
Md Arham
```

Update your EmailJS templates with these exact variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`