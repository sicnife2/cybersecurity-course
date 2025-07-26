import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const allowedEmails = [
  'sicnife04@gmail.com',
  'fordc15521@gmail.com',
]

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return !!(user?.email && allowedEmails.includes(user.email))
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.email = token.email
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST } 