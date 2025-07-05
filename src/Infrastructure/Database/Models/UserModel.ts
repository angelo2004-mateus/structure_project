import {AuditedAggregateRoot} from "./Base/AuditedAggregateRoot";
import {Column, Table, DataType} from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true,
    paranoid: true,
})

export class UserModel extends AuditedAggregateRoot<UserModel>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;
}