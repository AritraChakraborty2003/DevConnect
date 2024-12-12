import { connectionRequestObj } from "../../Models/ConnectionRequest.js";

export const connectionsGET = async (req, res) => {
  try {
    const connections = await connectionRequestObj.find();
    res.status(200).json(connections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
