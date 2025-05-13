import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ // Access Schema from the 'mongoose' object
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema); // Access models and model from 'mongoose'
