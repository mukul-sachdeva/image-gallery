import util from "util";
import path from "path";
import multer from "multer";
import fs from "fs";
import tbl_counter from "../models/model.counter.js";
const __dirname = path.resolve();
var imageNo = await tbl_counter.findOne({
  where: {
    type: 1,
  },
});
var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/assets/uploads/`));
  },
  filename: async (req, file, callback) => {
    const match = ["image/png", "image/jpeg"];
    console.log("file===", file);
    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
      return callback(message, null);
    }
    if (fs.existsSync(__dirname + "/assets/uploads/" + file.originalname)) {
      console.log("imageNo", imageNo, file);
      imageNo.counter = imageNo.counter + 1;
      if (file.mimetype == "image/jpeg") {
        file.originalname = `Image${imageNo.counter}.jpeg`;
      } else {
        file.originalname = `Image${imageNo.counter}.png`;
      }
    }

    var update = await tbl_counter.update(
      {
        counter: imageNo.counter + 1,
      },
      {
        where: {
          type: 1,
        },
      }
    );
    console.log("update", update);
    var filename = `${file.originalname}`;
    console.log("filename", filename);

    callback(null, filename);
  },
});

var uploadFiles = multer({ storage: storage }).array("files", 100);
export default uploadFiles;
