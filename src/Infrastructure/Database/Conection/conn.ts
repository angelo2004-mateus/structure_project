import { Sequelize } from "sequelize-typescript";
import { UserModel } from "../Models/UserModel";

export const conn = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "structure",
    models: [UserModel],
    logging: console.log,
});
