import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { FetchTasksUseCase } from "./fetch-tasks";
import { randomUUID } from "crypto";

let inMemoryTaskRepository: InMemoryTaskRepository
let sut: FetchTasksUseCase
describe('Fetch Tasks', () => {

    beforeEach(async () => {
        inMemoryTaskRepository = new InMemoryTaskRepository()
        sut = new FetchTasksUseCase(inMemoryTaskRepository)
    })

    it('should be able to fetch tasks', async () => {

        await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })
        await inMemoryTaskRepository.create({
            title: 'title-example-2',
            description: 'description-example-2',
        })

        const { tasks } = await sut.execute({})

        expect(tasks).toEqual([
            expect.objectContaining({ title: 'title-example-1', description: 'description-example-1' }),
            expect.objectContaining({ title: 'title-example-2', description: 'description-example-2' })
        ])
    })

    it('should be able to fetch tasks with pagination', async () => {

        for (let i = 0; i < 22; i++) {
            await inMemoryTaskRepository.create({
                title: `title-example-${i}`,
                description: `description-example-${i}`,
            })
        }
        const { tasks } = await sut.execute({page:2})

        expect(tasks).toHaveLength(2)
    })

})