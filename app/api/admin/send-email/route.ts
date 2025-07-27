import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message, adminName } = await request.json()

    // Validate input
    if (!to || !subject || !message || !adminName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Verify transporter
    try {
      await transporter.verify()
      console.log('Admin transporter verified successfully')
    } catch (verifyError) {
      console.error('Admin transporter verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Email content from admin to user
    const mailOptions = {
      from: `"CyberGuide Support" <cyberguide9@gmail.com>`,
      to: to,
      subject: `[CyberGuide Support] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Message from CyberGuide Team
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">From CyberGuide Team</h3>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              This message was sent from the CyberGuide admin panel. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    }

    console.log('Attempting to send admin email...')
    console.log('From: CyberGuide Support <cyberguide9@gmail.com>')
    console.log('To:', to)

    await transporter.sendMail(mailOptions)
    console.log('Admin email sent successfully')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully to user' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Admin email sending error:', error)
    console.error('Admin error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      name: error instanceof Error ? error.name : 'Unknown'
    })
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    )
  }
} 