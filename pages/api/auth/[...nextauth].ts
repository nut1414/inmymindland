import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../utils/database/mongodbConnect"
import UserInfo from "../../../models/UserInfo"
import { NextAuthOptions } from "next-auth"
import mongooseConnect from "../../../utils/database/mongooseConnect"

export const authOptions: NextAuthOptions = {
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
    /*async signIn({ user, account, profile, email, credentials }) {

      return true
    },*/
  },
  events:{
    async createUser({ user }){
      await mongooseConnect()
      const userDoc = await UserInfo.create({
        userid: user.id,
        contact:{ 
                  name: user.name, email: user.email 
                },
        worker: {
                  name: user.name, email: user.email, image: user.image
                }
      })
      console.log(userDoc)
    }
  }

}

export default NextAuth(authOptions)
