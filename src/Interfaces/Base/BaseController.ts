import { Request, Response } from "express";
import { CrudApplicationService } from "../../Application/Base/CrudApplicationService";

export abstract class BaseController<TEntity, TCreateDto, TService extends CrudApplicationService<TEntity>> {
    protected readonly appService: TService;

    constructor(appService: TService) {
        this.appService = appService;
    }

    getAll = async (_: Request, res: Response): Promise<void> => {
        const entities = await this.appService.findAll();
        res.json(entities);
    };

    get = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const entity = await this.appService.findOne(id);
        if (!entity) {
            res.status(404).send();
            return;
        }
        res.json(entity);
    };

    create = async (req: Request, res: Response): Promise<void> => {
        const dto = req.body as TCreateDto;
        const entity = await this.appService.create(dto as Partial<TEntity>);
        res.status(201).json(entity);
    };

    update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const dto = req.body as TCreateDto;
        await this.appService.update(id, dto as Partial<TEntity>);
        res.status(204).send();
    };

    delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.appService.delete(id);
        res.status(204).send();
    };
}
