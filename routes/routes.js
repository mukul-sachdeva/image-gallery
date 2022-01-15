import express from "express";
const router = express.Router();
import homeController from "../modules/home.js";
import uploadController from "../modules/upload.js";
//import upload from "../middleware/upload.js";
import multer from "multer";
import uploadFiles from "../middleware/upload.js";

let routes = (app) => {
  console.log("homeController", uploadController);
  router.get("/", homeController);
  router.post("/upload", uploadFiles, uploadController);

  return app.use("/", router);
};

export default routes;
