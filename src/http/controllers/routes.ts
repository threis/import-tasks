import { FastifyInstance } from "fastify";
import { create } from "./task/create";
import { fetchTasks } from "./task/fetch-tasks";


export async function routes(app: FastifyInstance){
    app.get('/tasks', fetchTasks)
    app.post('/tasks', create)
}