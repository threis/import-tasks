import { Prisma, Tasks } from "@prisma/client";

export interface TasksRepositories {
    create(task: Prisma.TasksUncheckedCreateInput) : Promise<Tasks>
    getMany(page: number): Promise<Tasks[]>
    findById(id: string): Promise<Tasks>
    save(task: Tasks): Promise<Tasks>
    delete(taskId: string): Promise<void>
}