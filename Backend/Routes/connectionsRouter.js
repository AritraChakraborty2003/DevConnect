import express from "express";

import { isAdmin } from "../Middlewares/isAdmin.js";
import { connectionsGET } from "../Controllers/ConnectionsControllers/connectionsGET.js";

const connectionsRouter = express.Router();

connectionsRouter.get("/:id", isAdmin, connectionsGET);
export { connectionsRouter };
