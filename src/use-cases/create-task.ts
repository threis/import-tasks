import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";


interface TaskUseCaseRequest {
    title: string;
    description: string;
}

interface TaskUseCaseReply {
    task: Tasks
}

export class CreateTaskUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ title, description }: TaskUseCaseRequest): Promise<TaskUseCaseReply> {

        if (!title ||!description) {
            throw new Error('title and description are required')
        }

        const task = await this.tasksRepository.create({ title, description })

        return {
            task
        }
    }
}