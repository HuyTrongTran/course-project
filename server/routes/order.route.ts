import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";
import { createOrder, getAllOrder } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.post("/get-orders", isAuthenticated, authorizeRoles("admin"), getAllOrder);


export default orderRouter;