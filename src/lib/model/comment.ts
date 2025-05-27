import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    idPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      default: [],
    },
    video: {
      type: [String],
      default: [],
    },
    parrentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null, // null nếu không phải là bình luận con
      required: false, // Không bắt buộc nếu không phải bình luận con
    },
    responTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null, // null nếu không phải là bình luận trả lời
    },
  },
  { timestamps: true }
);
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
