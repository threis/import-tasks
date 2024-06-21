import { FastifyReply, FastifyRequest } from "fastify";
import { makeFetchTaskUseCase } from "../../../use-cases/factories/make-fetch-tasks-use-case";

export async function fetchTasks(request: FastifyRequest, reply: FastifyReply) {

    const createTaskUseCase = makeFetchTaskUseCase()

    const { tasks } = await createTaskUseCase.execute({})

    reply.status(200).send({ tasks })

}