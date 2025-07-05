import { UserModel } from "../Database/Models/UserModel";
import { RepositoryBase } from "../Base/RepositoryBase";

export class UserRepository extends RepositoryBase<UserModel> {
    constructor() {
        super(UserModel);
    }
}
