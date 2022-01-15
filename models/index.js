import dotenv from "dotenv";
import images from "./model.image.js";
dotenv.config();
import Sequelize from "sequelize";
const sequelize = new Sequelize(
  process.env.mysqlDB,
  process.env.mysqlUSER,
  process.env.mysqlPASS,
  {
    host: process.env.mysqlHOST,
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
  }
);

const dbModel = {};

dbModel.Sequelize = Sequelize;
dbModel.sequelize = sequelize;
// db.images = require("./image.model.js")(sequelize, Sequelize);
dbModel.images = images;
// dbModel.images = new images(sequelize, Sequelize);

export default dbModel;
