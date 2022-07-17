import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../utils/database/mongodbConnect"
import UserInfo from "../../../models/UserInfo"
import { NextAuthOptions, Session } from "next-auth"
import mongooseConnect from "../../../utils/database/mongooseConnect"
import mongoose from "mongoose"

export interface HydratedSession extends Session {
  id: string
}

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      
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
    /*async signIn({ user, account, profile, email, credentials }) {

      return true
    },*/
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      await mongooseConnect()
      session.id = user.id || ''
      const userdata = await UserInfo.findOne({user: user.id})
      session.role = userdata?.role || 'user'
      return session as HydratedSession
    }
  },
  events:{
    async createUser({ user }){
      await mongooseConnect()
      const userDoc = await UserInfo.create({
        user: new mongoose.Types.ObjectId(user.id),
        contact:{ 
                  name: user.name, email: user.email 
                },
        worker_profile: {
                  name: user.name, image: user.image
                }
      })
      console.log(userDoc)
    }
  }

}

export default NextAuth(authOptions)
