import express from "express";
import { conn } from "./Infrastructure/Database/Conection/conn";
import userRoutes from "./Interfaces/Routes/userRoutes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

conn.sync({ alter: true }).then(() => {
    console.log("Banco sincronizado!");
    app.listen(3000, () => console.log("API rodando na porta 3000"));
});
