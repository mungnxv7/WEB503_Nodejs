import express from "express";
import routesProduct from "./productRoutes.js";
import routesUser from "./userRoutes.js";
import routesCategory from "./categoryRoutes.js";
import upload from "./uploadRouter.js";
const router = express.Router();

router.use("/products", routesProduct);
router.use("/users", routesUser);
router.use("/categories", routesCategory);
router.use("/upload", upload);
export default router;
