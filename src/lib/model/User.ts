import mongoose from "mongoose";

import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: [40, "A tour name must have less or equal then 40 character"],
      minlength: [10, "A tour name must have more or equal then 10 character"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    avatar: {
      type: String,
      default: "/avatar",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "A password must have more or equal then 8 character"],
      select: false, // không trả về password khi lấy dữ liệu
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate: function (this: any, value: string): boolean {
        // this chỉ hoạt động với create và save
        return value === this.password;
      },
    },
    address: String,
    phone: String,
    dateOfBirth: {
      type: Date,
      default: Date.now,
    },
    friendRequestsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friendRequestSent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    Relationship: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
