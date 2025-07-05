import { Request, Response } from "express";
import { CrudApplicationService } from "../../Application/Base/CrudApplicationService";

export abstract class ControllerBase<TEntity, TCreateDto> {
    protected readonly appService: CrudApplicationService<TEntity>;

    constructor(appService: CrudApplicationService<TEntity>) {
        this.appService = appService;
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        const entities = await this.appService.getAll();
        res.json(entities);
    };

    create = async (req: Request, res: Response): Promise<void> => {
        const dto = req.body as TCreateDto;
        const entity= this.mapDtoToEntity(dto);
        await this.appService.create(entity);
        res.status(201).send();
    };


    protected abstract mapDtoToEntity(dto: TCreateDto): TEntity;
}