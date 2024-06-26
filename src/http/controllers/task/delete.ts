import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateTaskUseCase } from "../../../use-cases/factories/make-create-task-use-case";
import { makeDeleteTaskUseCase } from "../../../use-cases/factories/make-delete-task-use-case";

export async function deleteTaskById(request: FastifyRequest, reply: FastifyReply) {
    const deleteTaskParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = deleteTaskParamsSchema.parse(request.params)

    const deleteTaskUseCase = makeDeleteTaskUseCase()
    await deleteTaskUseCase.execute({
        taskId: id
    })

    reply.status(200).send()

}