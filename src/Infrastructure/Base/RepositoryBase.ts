import { Model, ModelStatic } from "sequelize-typescript";
export abstract class RepositoryBase<TEntity extends Model> {
    protected readonly model: ModelStatic<TEntity>;

    constructor(model: ModelStatic<TEntity>) {
        this.model = model;
    }

    async findAll(): Promise<TEntity[]> {
        return this.model.findAll();
    }

    async findOne(id: string): Promise<TEntity | null> {
        return this.model.findByPk(id);
    }

    async create(data: Partial<TEntity>): Promise<TEntity> {
        const entity = await this.model.create(data);
        return entity;
    }

    async update(id: string, data: Partial<TEntity>): Promise<void> {
        await this.model.update(data, { where: { id } });
    }

    async delete(id: string): Promise<void> {
        const entity = await this.model.findByPk(id);
        if (entity) {
            await entity.destroy();
        }
    }
}
