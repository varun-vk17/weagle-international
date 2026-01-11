import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, company, email, phone, product, volume, message, formType } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Prepare email content based on form type
        let emailSubject = '';
        let emailHtml = '';

        if (formType === 'contact') {
            // Footer contact form
            emailSubject = `New Contact Form Submission from ${name}`;
            emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `;
        } else {
            // Sample & Pricing form (expandable modal)
            emailSubject = `New Sample & Pricing Request from ${company || name}`;
            emailHtml = `
        <h2>New Sample & Pricing Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Product Interest:</strong> ${product || 'Not specified'}</p>
        <p><strong>Expected Monthly Volume:</strong> ${volume || 'Not specified'}</p>
        <p><strong>Additional Requirements:</strong></p>
        <p>${message || 'No additional requirements'}</p>
      `;
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Weagle International <onboarding@resend.dev>', // You'll need to verify your domain
            to: ['info@weagleinternational.com'],
            subject: emailSubject,
            html: emailHtml,
            replyTo: email,
        });

        return NextResponse.json(
            { message: 'Email sent successfully', id: data.id },
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
