import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { get } from "http";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";

const notificationsRoute = express.Router();

notificationsRoute.get("/get-all-notifications", updateAccessToken, isAuthenticated, authorizeRoles("admin"), getNotifications);

notificationsRoute.put("/update-notification/:id", updateAccessToken, isAuthenticated, authorizeRoles("admin"), updateNotification);


export default notificationsRoute;