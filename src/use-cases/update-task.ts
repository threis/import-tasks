import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";


interface UpdateTaskByIdUseCaseRequest {
    taskId: string;
    title: string
    description: string
}

interface UpdateTaskByIdUseCaseReply {
    task: Tasks
}

export class UpdateTaskByIdUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ taskId, title, description }: UpdateTaskByIdUseCaseRequest): Promise<UpdateTaskByIdUseCaseReply> {

        if (!taskId || !title || !description){
            throw new Error('taskId, title and description are required')
        }

        const task = await this.tasksRepository.findById(taskId)

        task.updated_at = new Date()
        task.description = description
        task.title = title

        await this.tasksRepository.save(task)

        return {
            task
        }
    }
}