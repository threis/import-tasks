import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { DeleteTaskByIdUseCase } from "../delete-task.spec";

export function makeDeleteTaskUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new DeleteTaskByIdUseCase(tasksRepositories)

    return useCase
}