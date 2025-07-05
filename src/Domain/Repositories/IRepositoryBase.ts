export interface IRepositoryBase<TEntity> {
    findAll(): Promise<TEntity[]>;
    findOne(id: string): Promise<TEntity | null>;
    create(data: Partial<TEntity>): Promise<TEntity>;
    update(id: string, data: Partial<TEntity>): Promise<void>;
    delete(id: string): Promise<void>;
}
