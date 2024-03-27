import express from "express";
import routesProduct from "./productRoutes.js";
import routesUser from "./userRoutes.js";
import routesCategory from "./categoryRoutes.js";

const router = express.Router();

router.use("/products", routesProduct);
router.use("/users", routesUser);
router.use("/categories", routesCategory);

export default router;
