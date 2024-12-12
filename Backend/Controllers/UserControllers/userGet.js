import { usersObj } from "../../Models/UserModel.js";

export const usersGet = async (req, res) => {
  try {
    const data = await usersObj.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
