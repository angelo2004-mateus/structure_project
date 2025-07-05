import { IRepositoryBase } from "../../Domain/Repositories/IRepositoryBase";
import { ICrudApplicationService } from "./ICrudApplicationService";

export abstract class CrudApplicationService<TEntity> implements ICrudApplicationService<TEntity> {
    constructor(protected repository: IRepositoryBase<TEntity>) {}

    async findAll(): Promise<TEntity[]> {
        return this.repository.findAll();
    }

    async findOne(id: string): Promise<TEntity | null> {
        return this.repository.findOne(id);
    }

    async create(data: Partial<TEntity>): Promise<TEntity> {
        return this.repository.create(data);
    }

    async update(id: string, data: Partial<TEntity>): Promise<void> {
        await this.repository.update(id, data);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
