import { Prisma, Tasks } from "@prisma/client";
import { TasksRepositories } from "../tasks-repositories";
import { prisma } from "../../lib/prisma";

export class PrismaTaskRepository implements TasksRepositories {
    async create(data: Prisma.TasksUncheckedCreateInput): Promise<Tasks> {
        const task = await prisma.tasks.create({ data })
        return task
    }
}