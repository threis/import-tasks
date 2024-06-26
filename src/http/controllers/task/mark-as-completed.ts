import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateTaskUseCase } from "../../../use-cases/factories/make-create-task-use-case";
import { makeMarkTaskAsCompletedUseCase } from "../../../use-cases/factories/make-mark-task-as-completed";

export async function markAsCompleted(request: FastifyRequest, reply: FastifyReply) {
    const markAsCompletedBodySchema = z.object({
        id: z.string().uuid(),
    })

    const { id } = markAsCompletedBodySchema.parse(request.params)

    const createTaskUseCase = makeMarkTaskAsCompletedUseCase()
    await createTaskUseCase.execute({
        taskId: id
    })

    reply.status(200).send()

}