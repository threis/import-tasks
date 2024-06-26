import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { MarkTaskAsCompletedUseCase } from "./mark-task-as-completed";

let inMemoryTaskRepository: InMemoryTaskRepository
let sut: MarkTaskAsCompletedUseCase
describe('Mark Task As Completed', () => {

    beforeEach(async () => {
        inMemoryTaskRepository = new InMemoryTaskRepository()
        sut = new MarkTaskAsCompletedUseCase(inMemoryTaskRepository)
    })

    it('should be mark a task as completed', async () => {

        const task = await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })
     
       await sut.execute({
            taskId: task.id
        })

        expect(inMemoryTaskRepository.tasks).toEqual([
            expect.objectContaining({
                completed_at: expect.any(Date)
            })
        ])
    })

})