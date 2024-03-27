import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/indexRoutes.js";
import connect from "./src/config/config_db.js";

const app = express();

dotenv.config();

const { API_SERVER, API_LOCAL, PORT } = process.env;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(router);
connect(API_SERVER);
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
