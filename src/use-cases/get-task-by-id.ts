import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";


interface GetTaskByIdUseCaseRequest {
    id: string;
}

interface GetTaskByIdUseCaseReply {
    task: Tasks
}

export class GetTaskByIdUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ id }: GetTaskByIdUseCaseRequest): Promise<GetTaskByIdUseCaseReply> {


        const task = await this.tasksRepository.findById(id)

        return {
            task
        }
    }
}