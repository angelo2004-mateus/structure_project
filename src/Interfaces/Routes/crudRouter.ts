import { Router } from "express";
import { BaseController } from "../Base/BaseController";

export function createCrudRouter<TEntity, TCreateDto, TService>(
    controller: BaseController<TEntity, TCreateDto, any>
): Router {
    const router = Router();
    router.get("/", controller.getAll);
    router.get("/:id", controller.get);
    router.post("/", controller.create);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    return router;
}
