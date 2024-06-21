import { Prisma, Tasks } from "@prisma/client";

export interface TasksRepositories {
    create(task: Prisma.TasksUncheckedCreateInput) : Promise<Tasks>
}