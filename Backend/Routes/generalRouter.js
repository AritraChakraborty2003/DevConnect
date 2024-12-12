import express from "express";
import { generalGET } from "../Controllers/GeneralControllers/generalGet.js";
import { isAdmin } from "../Middlewares/isAdmin.js";

const generalRouter = express.Router();

generalRouter.get("/:id", isAdmin, generalGET);

export { generalRouter };
