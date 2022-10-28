// @/connection.ts
import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "root",
  password: "123",
  database: "saas_db",
  logging: false,
});

export default connection;