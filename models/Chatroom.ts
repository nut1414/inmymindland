import mongoose from 'mongoose'

const messagesSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  data: { type: String }, 
  content: { type: String }, 
  contentType: { type: String }, 
  'timestamp': { type: Number }   
})

const chatroomSchema = new mongoose.Schema({
  name: { type: String },
  chatId: { type: String, default: '0' },
  messages: [ { type: messagesSchema } ]
}, {timestamps: true} )

export default mongoose.models.Chatroom || mongoose.model('Chatroom', chatroomSchema)