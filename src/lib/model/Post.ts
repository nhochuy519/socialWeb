import mongoose from "mongoose";

export interface Media {
  url: string;
  type: "image" | "video";
}
export interface IPost {
  idUser?: mongoose.Schema.Types.ObjectId;
  content?: string;
  media?: Media[];
  comments?: mongoose.Schema.Types.ObjectId;
  createdAt?: Date;
}

const postSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: String,

    media: [
      {
        url: String,
        type: {
          enum: ["image", "video"],
          type: String,
        },
      },
    ],
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
