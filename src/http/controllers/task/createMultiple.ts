import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateMultipleTasksUseCase } from "../../../use-cases/factories/make-create-multiple-tasks-use-case";
import { log } from "console";

export async function createMultiple(request: FastifyRequest, reply: FastifyReply) {

    const data = await request.file()

    const buffer = await data?.file.toArray()

    if (!buffer) {
        reply.status(400).send({ message: "No file uploaded" })
        return
    }

    let csvFileText = ''

    for await (const item of buffer) {
        csvFileText += item.toString()
    }

    let csvFileArray = csvFileText.split('\n')

    const tasks = csvFileArray
    .map((item, index) => {
        if (index > 0) {
            const itemArray = item.split(';')
            return {
                title: itemArray[0],
                description: itemArray[1]
            }
        }
    })
    .reduce<Array<{title: string, description: string}>>((tasks, item) => {
        if (item?.title !== undefined) {
            tasks.push(item)
            return tasks
        } else {
            return tasks
        }
    }, [])

    if (tasks.length === 0) {
        reply.status(400).send({ message: "No content" })
        return
    }

    const createTaskUseCase = makeCreateMultipleTasksUseCase()
    await createTaskUseCase.execute(tasks)

    console.log(csvFileArray[0].split(';'))

    reply.status(201).send()
}