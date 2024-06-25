import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateTaskByIdUseCase } from "../../../use-cases/factories/make-update-task-by-id-use-case";

export async function updateTaskById(request: FastifyRequest, reply: FastifyReply) {

    const updateTaskByIdParamsSchema = z.object({
        id: z.string().uuid()
    })

    const updateTaskByIdBodySchema = z.object({
        title: z.string(),
        description: z.string()
    })


    const { id } = updateTaskByIdParamsSchema.parse(request.params)
    
    const { title, description } = updateTaskByIdBodySchema.parse(request.body)

    const createTaskUseCase = makeUpdateTaskByIdUseCase()

    const { task } = await createTaskUseCase.execute({ taskId: id, title, description })

    reply.status(200).send({ task })

}