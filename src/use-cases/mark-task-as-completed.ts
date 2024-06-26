import { TasksRepositories } from "../repositories/tasks-repositories";


interface MarkTaskAsCompletedUseCaseRequest {
    taskId: string;
}

interface MarkTaskAsCompletedUseCaseReply {}

export class MarkTaskAsCompletedUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ taskId }: MarkTaskAsCompletedUseCaseRequest): Promise<MarkTaskAsCompletedUseCaseReply> {

        if (!taskId ){
            throw new Error('taskId is required')
        }

        await this.tasksRepository.markAscompleted(taskId)

        return {}
    }
}