import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";


interface FetchTaskUseCaseRequest {
    page?: number;
}

interface FetchTaskUseCaseReply {
    tasks: Tasks[]
}

export class FetchTasksUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ page = 1}: FetchTaskUseCaseRequest): Promise<FetchTaskUseCaseReply> {


        const tasks = await this.tasksRepository.getMany(page)
        return {
            tasks
        }
    }
}