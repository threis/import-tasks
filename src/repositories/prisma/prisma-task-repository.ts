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
    async findById(id: string) {
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

    async save(data: Prisma.TasksUncheckedCreateInput): Promise<Tasks> {
        const task = await prisma.tasks.update({ where: { id: data.id }, data })
        return task
    }

    async delete(taskId: string) {
        await prisma.tasks.delete({ where: { id: taskId } })
    }

    async markAscompleted(taskId: string) {
        
        const task = await prisma.tasks.update({ 
            where: { id: taskId }, 
            data: { completed_at: new Date() },
        })
        
        return task
            
        
    }
}