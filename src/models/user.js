import { Schema, model } from "mongoose";
import Post from "./post";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("remove", async (next) => {
  await Post.deleteMany({ userId: this._id });
  next();
});

const User = model("user", userSchema);

export default User;
