import { connectionRequestObj } from "../../Models/ConnectionRequest.js";
const connectionPOST = () => {
  return async (req, res) => {
    const { fromUser, toUser, status } = req.body;
    const newConnection = new connectionRequestObj({
      fromUser,
      toUser,
      status,
    });
    try {
      const savedConnection = await newConnection.save();
      res.status(201).json(savedConnection);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
};

export { connectionPOST };
