import express from "express";
import { conn } from "./Infrastructure/Database/Conection/conn";
import { createCrudRouter } from "./Interfaces/Routes/crudRouter";
import { userController } from "./Interfaces/Controllers/UserController";

const app = express();
app.use(express.json());
app.use("/api/users", createCrudRouter(userController));

conn.sync({ alter: true }).then(() => {
    console.log("Banco sincronizado!");
    app.listen(3000, () => console.log("API rodando na porta 3000"));
});
