import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { FetchTasksUseCase } from "../fetch-tasks";

export function makeFetchTaskUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new FetchTasksUseCase(tasksRepositories)

    return useCase
}