import dotenv from "dotenv";
dotenv.config();

export const isAdmin = (req, res, next) => {
  const { API_KEY_ADMIN } = process.env;
  const apiKey = req.query.api_key;
  if (apiKey === API_KEY_ADMIN) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};
