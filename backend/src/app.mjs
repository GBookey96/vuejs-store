import express from "express";
import appConfig from "./2-utils/app-config.js";
import catchAll from "./3-middleware/catch-all.js";
import routeNotFound from "./3-middleware/route-not-found.js";
import productsController from "./6-controllers/productsController.js";
import authController from "./6-controllers/authController.js";
import cartcontroller from "./6-controllers/cartsController.js";
import categoriesController from "./6-controllers/categoriesController.js";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", authController);
server.use("/api", productsController);
server.use("/api", cartcontroller);
server.use("/api", categoriesController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () =>
  console.log(`listening on http://localhost:${appConfig.port}`)
);
