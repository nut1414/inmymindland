import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: '', // If set, new users will be directed here on first sign in
  },

})