import express from "express";
import { isAdmin } from "../Middlewares/isAdmin.js";
import { connectionsGET } from "../Controllers/ConnectionsControllers/connectionsGET.js";
import { connectionPOST } from "../Controllers/ConnectionsControllers/connectionPOST.js";
import { isUser } from "../Middlewares/isUser.js";

const connectionsRouter = express.Router();

connectionsRouter.get("/:id", isAdmin, connectionsGET);
connectionsRouter.post("/user/:id", isUser, connectionPOST());
export { connectionsRouter };
