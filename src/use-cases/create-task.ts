import { Tasks } from "@prisma/client";
import { TasksRepositories } from "../repositories/tasks-repositories";
import { ResourceNotFoundError } from "./errors/resource-not-found";


interface CreateTaskUseCaseRequest {
    title: string;
    description: string;
}

interface CreateTaskUseCaseReply {
    task: Tasks
}

export class CreateTaskUseCase {
    constructor(private tasksRepository: TasksRepositories) { }

    async execute({ title, description }:  CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseReply> {

        if (!title ||!description) {
            throw new ResourceNotFoundError()
        }

        const task = await this.tasksRepository.create({ title, description })

        return {
            task
        }
    }
}