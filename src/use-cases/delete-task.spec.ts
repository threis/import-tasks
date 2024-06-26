import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";


interface DeleteTaskByIdUseCaseRequest {
    taskId: string;
}

interface DeleteTaskByIdUseCaseReply {}

export class DeleteTaskByIdUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ taskId }: DeleteTaskByIdUseCaseRequest): Promise<DeleteTaskByIdUseCaseReply> {

        if (!taskId ){
            throw new Error('taskId is required')
        }

        await this.tasksRepository.delete(taskId)

        return {}
    }
}