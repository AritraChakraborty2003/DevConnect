import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 99,
    },
    gender: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    interest: {
      type: [String],
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    domain: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    Collection: "users",
  }
);

const usersObj = mongoose.model("users", UserSchema);
export { usersObj };
