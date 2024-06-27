import { TasksRepositories } from "../repositories/tasks-repositories";

interface CreateMultipleTasksUseCaseRequest {
    title: string
    description: string
}

interface CreateMultipleTasksUseCaseReply { }

export class CreateMultipleTasksUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute(tasks: CreateMultipleTasksUseCaseRequest[]): Promise<CreateMultipleTasksUseCaseReply> {

        tasks.forEach(async (task) => {
            const { title, description } = task
            await this.tasksRepository.create({ title, description })
        })

        return {}
    }
}