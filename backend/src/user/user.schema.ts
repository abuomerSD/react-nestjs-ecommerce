import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: String,
    password: String,
    role: {
      type: String,
      enum: ['customer', 'admin'],
    },
    address: {
      street: String,
      city: String,
      country: String,
      zip: String,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model('User', userSchema);
