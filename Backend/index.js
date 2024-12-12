/* Import Mdules */
import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { dbConnect } from "./Connection/dbConnect.js";
import { isAdmin } from "./Middlewares/isAdmin.js";
import { isUser } from "./Middlewares/isUser.js";
/* ------------  */

/* Create Express App and App specific configurations and middlewares*/
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("uploads"));
/*-----------------------------------------*/

/* Database Connections and Configurations */
const { DB_USER, DB_PASSWORD } = process.env;
dbConnect({ DB_USER, DB_PASSWORD });
/* -------------------------------- */

/* Custom middlewares application level */
// app.use("/", isAdmin);
/*-----------------------------------------*/

/* Add http handler routes here  */
app.get("/api/v1/user/:id", isUser, (req, res) => {
  res.send({ status: 200, response: "OK" });
});
app.get("/api/v1/:id", isAdmin, (req, res) => {
  res.send({ status: 200, response: "OK" });
});
app.get("api/v1/users/:id", isAdmin, (req, res) => {
  res.send({ status: 200 });
});

/*-----------------------------------------*/

/* Listen to PORT */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*-----------------------------------------*/
