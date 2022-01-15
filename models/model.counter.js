import sequilize from "sequelize";
import db from "../config/db.js";

const counter = db.define("counters", {
  type: {
    type: sequilize.DataTypes.INTEGER,
    allowNull: false,
  },
  counter: {
    type: sequilize.DataTypes.INTEGER,
    allowNull: false,
  },
});
export default counter;
