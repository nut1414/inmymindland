import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../utils/database/mongodbConnect"
import UserInfo, { IUserInfo } from "../../../models/UserInfo"
import { NextAuthOptions, Session } from "next-auth"
import mongooseConnect from "../../../utils/database/mongooseConnect"
import mongoose from "mongoose"
import cloudinary from 'cloudinary'
import { DefaultImage } from "../../../models/schemas/Image"
export interface HydratedSession extends Session {
  id: string
}

cloudinary.v2.config({
  secure: true
})

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
      if (session.user && userdata && userdata.image?.type === 'cloudinary')
        session.user.image = userdata.image.url
      session.role = userdata?.role || 'user'
      return session as HydratedSession
    }
  },
  events:{
    async createUser({ user }){
      await mongooseConnect()
      let cldimg: cloudinary.UploadApiResponse | cloudinary.UploadApiErrorResponse | undefined = undefined
      if ( user.image )
          cldimg = await cloudinary.v2.uploader.upload(user.image,{
          upload_preset: process.env.CLD_PROFILE_PRESET,
          public_id: user.id
        })

      const userDoc = await UserInfo.create({
        user: new mongoose.Types.ObjectId(user.id),
        contact:{ 
                  name: user.name, email: user.email 
                },
        worker_profile: {
                  name: user.name, image: cldimg?.secure_url ? { type: 'cloudinary',url: cldimg.secure_url, pid: cldimg.public_id } : DefaultImage
                },
        image: cldimg?.secure_url ? { type: 'cloudinary',url: cldimg.secure_url, pid: cldimg.public_id } : DefaultImage
      })
      console.log(userDoc)
    }
  }

}

export default NextAuth(authOptions)
