import dotenv from "dotenv";
dotenv.config();

export const isUser = (req, res, next) => {
  const { API_KEY_USER, API_KEY_ADMIN } = process.env;
  const apiKey = req.query.api_key;
  console.log(apiKey);
  if (apiKey === API_KEY_USER || apiKey === API_KEY_ADMIN) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};
