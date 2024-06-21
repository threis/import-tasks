import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory/in-memory-task-repository";
import { CreateTaskUseCase } from "./create-task";

let tasksRepository: InMemoryTaskRepository
let sut: CreateTaskUseCase
describe('Create Task', () => {

    beforeEach(async () => {
        tasksRepository = new InMemoryTaskRepository()
        sut = new CreateTaskUseCase(tasksRepository)
    })

    it('should be able to create a new task', async () => {
        const { task } = await sut.execute({
            title: 'title-example',
            description: 'description-example'
        })

        expect(task.id).toEqual(expect.any(String))
    })
 
})