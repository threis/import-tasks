import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { CreateMultipleTasksUseCase } from "./create-multiple-tasks";

let tasksRepository: InMemoryTaskRepository
let sut: CreateMultipleTasksUseCase
describe('Create Multiple Tasks', () => {

    beforeEach(async () => {
        tasksRepository = new InMemoryTaskRepository()
        sut = new CreateMultipleTasksUseCase(tasksRepository)
    })

    it('should be able to create multiple tasks', async () => {

        const tasks = [
            {
                title: 'title-example-1',
                description: 'description-example-1',
            },
            {
                title: 'title-example-2',
                description: 'description-example-2',
            }
        ]
        await sut.execute(tasks)

        expect(tasksRepository.tasks).toHaveLength(2)
        expect(tasksRepository.tasks).toEqual([
            expect.objectContaining({ title: 'title-example-1', description: 'description-example-1' }),
            expect.objectContaining({ title: 'title-example-2', description: 'description-example-2' })
        ])

    })

})