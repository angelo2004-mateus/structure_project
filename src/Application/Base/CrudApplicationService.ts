import { IRepository } from "../../Domain/Repositories/IRepository";

export abstract class CrudApplicationService<TEntity> {
    constructor(protected repository: IRepository<TEntity>) {}

    async create(entity: TEntity): Promise<void> {
        await this.repository.create(entity);
    }

    async getAll(): Promise<TEntity[]> {
        return this.repository.getAll();
    }
}