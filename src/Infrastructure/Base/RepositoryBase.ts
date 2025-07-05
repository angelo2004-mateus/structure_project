import { Model, ModelStatic } from "sequelize-typescript";

export abstract class RepositoryBase<TEntity extends Model> {
    protected readonly model: ModelStatic<TEntity>;

    constructor(model: ModelStatic<TEntity>) {
        this.model = model;
    }

    async create(entity: Partial<TEntity>): Promise<void> {
        await this.model.create(entity);
    }

    async getAll(): Promise<TEntity[]> {
        return this.model.findAll();
    }
}