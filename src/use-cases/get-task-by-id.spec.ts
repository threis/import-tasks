import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { GetTaskByIdsUseCase } from "./get-task-by-id";

let inMemoryTaskRepository: InMemoryTaskRepository
let sut: GetTaskByIdsUseCase
describe('Get Task By Id', () => {

    beforeEach(async () => {
        inMemoryTaskRepository = new InMemoryTaskRepository()
        sut = new GetTaskByIdsUseCase(inMemoryTaskRepository)
    })

    it('should be able to get task by id', async () => {

        const createdTask = await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })

        const { task } = await sut.execute({
            id: createdTask.id
        })

        expect(task.title).toEqual('title-example-1')
    })

    it('should not be able to get task by non-existent id', async () => {

        await inMemoryTaskRepository.create({
            title: 'title-example-1',
            description: 'description-example-1',
        })

        await expect(() => sut.execute({
            id: 'non-existent-id'
        })).rejects.toBeInstanceOf(Error)

        
    })


})