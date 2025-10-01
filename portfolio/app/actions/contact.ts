'use server';

import { Resend } from 'resend';

// Initialize Resend with your environment variable
// Make sure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the return type for the server action
type FormState = {
  success: boolean;
  message: string;
};

export async function sendEmailAction(formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 1. Simple Validation
  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' };
  }

  // 2. Send Email using Resend
  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <info@deedixtech.com>', // Must be a verified domain/sender
      to: process.env.CONTACT_FORM_TO_EMAIL || 'codojnr@yahoo.com', // Your target email
      subject: `New Portfolio Message from ${name}`,
      replyTo: email, // This makes it easy for you to reply directly to the user
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Check for Resend API errors
    if (data.error) {
        throw new Error(data.error.message);
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Server failed to send email. Check API key and domain status.' };
  }
}