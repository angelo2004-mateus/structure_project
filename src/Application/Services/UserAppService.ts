import { CrudApplicationService } from "../Base/CrudApplicationService";
import { UserModel } from "../../Infrastructure/Database/Models/UserModel";
import { UserRepository } from "../../Infrastructure/Repositories/UserRepository";

export class UserAppService extends CrudApplicationService<UserModel> {
    constructor() {
        super(new UserRepository());
    }
}
