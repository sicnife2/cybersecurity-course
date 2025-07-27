import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    
    return NextResponse.json({
      success: true,
      emailUserExists: !!emailUser,
      emailPassExists: !!emailPass,
      emailUserLength: emailUser ? emailUser.length : 0,
      emailPassLength: emailPass ? emailPass.length : 0,
      message: 'Environment variables check completed'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to check environment variables'
    }, { status: 500 })
  }
} 