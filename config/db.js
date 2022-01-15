import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.mysqlDB);
class Database {
  db;
  connectionString;

  constructor() {
    // console.log(
    //   `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`
    // );
    this.connectionString = `mysql://${process.env.mysqlUSER}:${process.env.mysqlPASS}@${process.env.mysqlHOST}/${process.env.mysqlDB}`;
    this.db = new Sequelize(this.connectionString, {
      dialect: "mysql",
      // logging: false,
      define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        underscored: true,
        timestamps: true,
      },
      pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000,
      },
      logging: false,
    });
  }
}
const db = new Database().db;
export default db;
