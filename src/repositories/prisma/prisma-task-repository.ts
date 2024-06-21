import { Prisma, Tasks } from "@prisma/client";
import { TasksRepositories } from "../tasks-repositories";
import { prisma } from "../../lib/prisma";

export class PrismaTaskRepository implements TasksRepositories {
    async getMany(page: number) {

        const tasks = await prisma.tasks.findMany({
            take: 20,
            skip: (page - 1) * 20,
        })
        return tasks
    }
    async findById(id: string){
        const task = await prisma.tasks.findUniqueOrThrow({
            where: {
                id
            }
        })
        return task
    }
    async create(data: Prisma.TasksUncheckedCreateInput): Promise<Tasks> {
        const task = await prisma.tasks.create({ data })
        return task
    }
}