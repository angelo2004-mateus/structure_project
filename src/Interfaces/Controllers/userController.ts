import { Request, Response } from "express";
import { UserModel } from "../../Infrastructure/Database/Models/UserModel";

class UserController {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar usuários" });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await UserModel.findByPk(id);
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado" });
                return;
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar usuário" });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, email } = req.body;
            const user = await UserModel.create({ name, email });
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao criar usuário" });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const user = await UserModel.findByPk(id);
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado" });
                return;
            }
            await user.update({ name, email });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar usuário" });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await UserModel.findByPk(id);
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado" });
                return;
            }
            await user.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao excluir usuário" });
        }
    }
}

export default new UserController();
