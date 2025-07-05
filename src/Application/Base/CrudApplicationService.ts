import { RepositoryBase } from "../../Infrastructure/Base/RepositoryBase";

export abstract class CrudApplicationService<TEntity> {
    constructor(protected repository: RepositoryBase<TEntity>) {}

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
