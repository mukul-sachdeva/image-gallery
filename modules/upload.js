import fs from "fs";
import dbModel from "../models/index.js";
import path from "path";
const Image = dbModel.images;
const __dirname = path.resolve();

const multipleUpload = async (req, res) => {
  try {
    console.log("images", req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    req.files.map((file, index) => {
      Image.create({
        type: file.mimetype,
        name: file.originalname,
        data: fs.readFileSync(__dirname + "/assets/uploads/" + file.filename),
      }).then((image) => {
        fs.writeFileSync(__dirname + "/assets/tmp/" + image.name, image.data);
        if (index + 1 == req.files.length) {
          return res.send(`Files has been uploaded.`);
        }
      });
    });
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

export default multipleUpload;
