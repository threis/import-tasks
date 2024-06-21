import { FastifyInstance } from "fastify";
import { create } from "./task/create";


export async function routes(app: FastifyInstance){
    app.post('/tasks', create)
}