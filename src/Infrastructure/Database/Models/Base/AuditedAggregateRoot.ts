import { Model, AutoIncrement, Column, PrimaryKey, Default, DataType, CreatedAt, UpdatedAt }
    from "sequelize-typescript";

interface IBaseAttributes {
    id: string;
    createdAt: Date;
    updatedAt?: Date;
}

export abstract class AuditedAggregateRoot <T extends IBaseAttributes> extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID
    })
    declare id: string;

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    declare createdAt: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE,
    })
    declare updatedAt: Date;
}