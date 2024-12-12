import mongoose from "mongoose";

const connectionRequestSchema = mongoose.Schema(
  {
    fromUser: {
      type: String,
      required: true,
    },
    toUser: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    Collection: "connectionrequests",
  }
);

const connectionRequestObj = mongoose.model(
  "connectionrequests",
  connectionRequestSchema
);
export { connectionRequestObj };
