import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import User from "../../../models/User"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: '', // If set, new users will be directed here on first sign in
  },
  callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user)
      console.log(account)
      console.log(profile)
      console.log(credentials)

      return true
    },
  },
  events:{
    async createUser({ user }){
      //console.log(User.findById(user.id))
    }
  }

} 
)