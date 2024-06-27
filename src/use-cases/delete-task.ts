import { TasksRepositories } from "../repositories/tasks-repositories";
import { ResourceNotFoundError } from "./errors/resource-not-found";


interface DeleteTaskByIdUseCaseRequest {
    taskId: string;
}

interface DeleteTaskByIdUseCaseReply { }

export class DeleteTaskByIdUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ taskId }: DeleteTaskByIdUseCaseRequest): Promise<DeleteTaskByIdUseCaseReply> {

        if (!taskId) {
            throw new ResourceNotFoundError()
        }

        const task = await this.tasksRepository.findById(taskId)

        if (!task) {
            console.log("Task not found")
            throw new ResourceNotFoundError()
        }

        await this.tasksRepository.delete(task.id)

        return {}
    }
}