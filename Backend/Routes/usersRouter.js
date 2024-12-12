import express from "express";
import { isAdmin } from "../Middlewares/isAdmin.js";
import { usersGet } from "../Controllers/UserControllers/userGet.js";

const usersRouter = express.Router();

usersRouter.get("/:id", isAdmin, usersGet);

export { usersRouter };
