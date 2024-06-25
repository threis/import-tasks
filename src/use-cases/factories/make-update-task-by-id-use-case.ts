import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { UpdateTaskByIdUseCase } from "../update-task";

export function makeUpdateTaskByIdUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new UpdateTaskByIdUseCase(tasksRepositories)

    return useCase
}