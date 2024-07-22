import mongoose, { Document, Schema, trusted } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      unique: true,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
             // if not created
const User = mongoose.model.User ||  mongoose.model("User", userSchema)
export default User;
