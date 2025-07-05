import { BaseController } from "../Base/BaseController";
import { UserAppService } from "../../Application/Services/UserAppService";
import { UserModel } from "../../Infrastructure/Database/Models/UserModel";

interface UserParams {
    name: string;
    email: string;
}

export class UserController extends BaseController<UserModel, UserParams, UserAppService> {
    constructor() {
        super(new UserAppService());
    }
}

export const userController = new UserController();
