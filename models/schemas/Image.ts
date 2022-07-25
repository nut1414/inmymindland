import mongoose from "mongoose"
import { nanoid } from "nanoid"
import cloudinary from "cloudinary"

export type CldImage = cloudinary.UploadApiResponse


export interface IImage{
  type: 'url' | 'cloudinary'
  url: string
  uid?: string
  pid?: string
}

export const DefaultImage = {
  type: 'url',
  url: '/temp.jpg',
}


export const ImageSchema = new mongoose.Schema<IImage>({
  'type': { type: String, default: 'url', enum: ['url', 'cloudinary'] },
  url: { type: String, default: '/temp.jpg' },
  uid: { type: String, default: () => nanoid() },
  pid: { type: String }
})