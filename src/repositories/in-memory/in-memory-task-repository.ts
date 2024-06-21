import { Tasks, Prisma } from '@prisma/client'

import { TasksRepositories } from "../tasks-repositories";
import { randomUUID } from 'crypto';

export class InMemoryTaskRepository implements TasksRepositories {

    public tasks: Tasks[] = []

    async create(data: Prisma.TasksUncheckedCreateInput){
        if (!data.title){
            throw new Error('title is required')
        }
        
        if (!data.description){
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
}