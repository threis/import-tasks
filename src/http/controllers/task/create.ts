import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeTaskUseCase } from "../../../use-cases/factories/make-task-use-case";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createTaskBodySchema = z.object({
        title: z.string(),
        description: z.string(),
    })

    const {title, description } = createTaskBodySchema.parse(request.body)

    const createTaskUseCase = makeTaskUseCase()
    await createTaskUseCase.execute({
        title,
        description,
    })

    reply.status(201).send()

}