import { Router } from "express";
import { userController } from "../Controllers/UserController";

export function createUserRouter(): Router {
    const router = Router();
    router.get("/", userController.getAll);
    router.get("/:id", userController.get);
    router.post("/", userController.create);
    router.put("/:id", userController.update);
    router.delete("/:id", userController.delete);
    return router;
}
