import sequilize from "sequelize";
import db from "../config/db.js";

const images = db.define("images", {
  type: {
    type: sequilize.DataTypes.STRING,
  },
  name: {
    type: sequilize.DataTypes.STRING,
  },
  data: {
    type: sequilize.DataTypes.BLOB("long"),
  },
});
export default images;
