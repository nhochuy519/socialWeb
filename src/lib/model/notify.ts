import mongoose from "mongoose";

const notifySchema = new mongoose.Schema(
  {
    recipentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["like", "comment", "follow", "mention", "share", "friendRequest"],
      required: true,
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    idRead: Boolean,
  },
  { timestamps: true }
);

const Notify = mongoose.models.Notify || mongoose.model("Notify", notifySchema);
export default Notify;
