import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { CreateTaskUseCase } from "../create-task";

export function makeTaskUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new CreateTaskUseCase(tasksRepositories)

    return useCase
}