import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { MarkTaskAsCompletedUseCase } from "../mark-task-as-completed";

export function makeMarkTaskAsCompletedUseCase(){
    const tasksRepositories = new PrismaTaskRepository()
    const useCase = new MarkTaskAsCompletedUseCase(tasksRepositories)

    return useCase
}