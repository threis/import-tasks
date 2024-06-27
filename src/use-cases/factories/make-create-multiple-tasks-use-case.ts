import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { CreateMultipleTasksUseCase } from "../create-multiple-tasks";

export function makeCreateMultipleTasksUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new CreateMultipleTasksUseCase(tasksRepositories)

    return useCase
}