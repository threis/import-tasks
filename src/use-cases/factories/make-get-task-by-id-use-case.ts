import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { GetTaskByIdUseCase } from "../get-task-by-id";

export function makeGetTaskByIdUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new GetTaskByIdUseCase(tasksRepositories)

    return useCase
}