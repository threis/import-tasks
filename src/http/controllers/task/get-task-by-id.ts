import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetTaskByIdUseCase } from "../../../use-cases/factories/make-get-task-by-id-use-case";
import { z } from "zod";

export async function GetTaskById(request: FastifyRequest, reply: FastifyReply) {

    const getTaskByIdParamsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = getTaskByIdParamsSchema.parse(request.params)

    const createTaskUseCase = makeGetTaskByIdUseCase()

    const { task } = await createTaskUseCase.execute({ id })

    reply.status(200).send({ task })

}