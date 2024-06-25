import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { UpdateTaskByIdUseCase } from "./update-task";

let inMemoryTaskRepository: InMemoryTaskRepository
let sut: UpdateTaskByIdUseCase
describe('Update Task By Id', () => {

    beforeEach(async () => {
        inMemoryTaskRepository = new InMemoryTaskRepository()
        sut = new UpdateTaskByIdUseCase(inMemoryTaskRepository)
    })

    it('should be update a task by id', async () => {

        const createdTask = await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })

        const { task } = await sut.execute({
            taskId: createdTask.id,
            title: 'title-example-2',
            description: 'description-example-2',
        })

        expect(task.title).toEqual('title-example-2')
        expect(task.description).toEqual('description-example-2')
    })

})