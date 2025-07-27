import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Debug logging
    console.log('Email configuration check:')
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER)
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS)

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
      }
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sicnife04@gmail.com', // Your email address
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              This message was sent from your cybersecurity course contact form.
            </p>
          </div>
        </div>
      `
    }

    console.log('Attempting to send email...')
    // Send email
    await transporter.sendMail(mailOptions)
    console.log('Main email sent successfully')

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us - Cybersecurity Course',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Contacting Us
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to us through our cybersecurity course contact form. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Your Message Details</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>We typically respond within 24-48 hours. If you have any urgent questions, please don't hesitate to reach out again.</p>
          
          <p>Best regards,<br>
          The Cybersecurity Course Team</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 8px;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `
    }

    await transporter.sendMail(confirmationMailOptions)
    console.log('Confirmation email sent successfully')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    )
  }
} 