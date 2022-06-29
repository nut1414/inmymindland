import mongoose from 'mongoose'

interface IMessage {
  sender?: mongoose.Types.ObjectId
  content?: string 
  contentType?: string 
  timestamp?: number  
}

interface IChatroom {
  name?: string
  chatId?: string
  messages?: IMessage[]
}

const messagesSchema = new mongoose.Schema<IMessage>({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  content: { type: String }, 
  contentType: { type: String }, 
  'timestamp': { type: Number }   
})

const chatroomSchema = new mongoose.Schema<IChatroom>({
  name: { type: String },
  chatId: { type: String, default: '0' },
  messages: [ { type: messagesSchema } ]
}, {timestamps: true} )

export default mongoose.models.Chatroom || mongoose.model('Chatroom', chatroomSchema)