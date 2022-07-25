import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

interface IMessage {
  sender?: mongoose.Types.ObjectId
  content?: string 
  contentType?: string 
  timestamp?: number  
}

interface IChatroom {
  name: string
  messages?: IMessage[]
}

const messagesSchema = new mongoose.Schema<IMessage>({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' }, 
  content: { type: String }, 
  contentType: { type: String }, 
  'timestamp': { type: Number }   
})

const chatroomSchema = new mongoose.Schema<IChatroom>({
  name: { type: String, default: 'Chatroom' },
  messages: [ { type: messagesSchema } ]
}, {timestamps: true} )

export default mongoose.models.Chatroom || mongoose.model('Chatroom', chatroomSchema)