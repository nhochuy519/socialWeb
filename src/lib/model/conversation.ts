import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    lastMessagePreview: {
      type: String, // Ví dụ: "Hello", "[📷 Hình ảnh]", "[🎥 Video]"
    },
    updateAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);
export default Conversation;
