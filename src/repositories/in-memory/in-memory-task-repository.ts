import { Tasks, Prisma } from '@prisma/client'

import { TasksRepositories } from "../tasks-repositories";
import { randomUUID } from 'crypto';

export class InMemoryTaskRepository implements TasksRepositories {

    public tasks: Tasks[] = []

    async findById(id: string) {
        const task = this.tasks.find(task => task.id === id)

        if (!task) {
            throw new Error('Task not found')
        }

        return task
    }

    async getMany(page: number) {
        const tasks = await this.tasks

        return tasks.slice((page - 1) * 20, page * 20)
    }


    async create(data: Prisma.TasksUncheckedCreateInput) {
        if (!data.title) {
            throw new Error('title is required')
        }

        if (!data.description) {
            throw new Error('description is required')
        }

        const task = {
            ...data,
            id: randomUUID(),
            completed_at: null,
            created_at: new Date(),
            updated_at: new Date(),
        }

        await this.tasks.push(task)

        return task
    }

    async save(task: Tasks) {

        const taskIndex = this.tasks.findIndex((item) => item.id === task.id)
        if (taskIndex >= 0) {
            this.tasks[taskIndex] = task
        }

        return task
    }

    
    async delete(taskId: string) {

        const taskIndex = this.tasks.findIndex((item) => item.id === taskId)
        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex,1)
        }

    }
}