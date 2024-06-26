import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { DeleteTaskByIdUseCase } from "./delete-task.spec";

let inMemoryTaskRepository: InMemoryTaskRepository
let sut: DeleteTaskByIdUseCase
describe('Delete Task By Id', () => {

    beforeEach(async () => {
        inMemoryTaskRepository = new InMemoryTaskRepository()
        sut = new DeleteTaskByIdUseCase(inMemoryTaskRepository)
    })

    it('should be remove a task by id', async () => {

        const task = await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })
     
       await sut.execute({
            taskId: task.id
        })

        expect(inMemoryTaskRepository.tasks).toHaveLength(0)
    })

})