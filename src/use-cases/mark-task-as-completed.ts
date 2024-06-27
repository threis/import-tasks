import { TasksRepositories } from "../repositories/tasks-repositories";
import { ResourceNotFoundError } from "./errors/resource-not-found";


interface MarkTaskAsCompletedUseCaseRequest {
    taskId: string;
}

interface MarkTaskAsCompletedUseCaseReply {}

export class MarkTaskAsCompletedUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ taskId }: MarkTaskAsCompletedUseCaseRequest): Promise<MarkTaskAsCompletedUseCaseReply> {

        if (!taskId ){
            throw new ResourceNotFoundError()
        }

        await this.tasksRepository.markAscompleted(taskId)

        return {}
    }
}