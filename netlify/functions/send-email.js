const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SERVICE,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  try {
    // Send to you
    await transporter.sendMail({
      from: process.env.EMAIL_SERVICE,
      to: process.env.EMAIL_SERVICE,
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_SERVICE,
      to: email,
      subject: `Thank you for contacting me - ${subject}`,
      html: `
        <h3>Thank you for your message!</h3>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>"${message}"</p>
        <p>Best regards,<br>Md Arham</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};