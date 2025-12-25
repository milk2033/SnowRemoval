import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !address || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.replace(/\s/g, ''); // Remove all spaces

    if (!user || !pass) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Snow Removal Quote Request: ${name}`,
      text: `
        New Lead Details:
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Address: ${address}
        Service: ${service}
        
        Message:
        ${message || 'No message provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1e3a8a;">New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px;">${message || 'No message provided'}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
