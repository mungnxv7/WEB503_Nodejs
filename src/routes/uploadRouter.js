import express from "express";
import upload from "../middlewares/uploadImage.js";
import { uploadController } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/", upload.single("image"), uploadController);

export default router;
