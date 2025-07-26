import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

const allowedEmails = [
  'sicnife04@gmail.com',
  'fordc15521@gmail.com',
]

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user?.email && allowedEmails.includes(user.email)) {
        return true
      }
      return false
    },
    async session({ session, token, user }) {
      // Add email to session
      if (session?.user) {
        session.user.email = token.email
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.email = user.email
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 