import { FastifyInstance } from "fastify";
import { create } from "./task/create";
import { fetchTasks } from "./task/fetch-tasks";
import { GetTaskById } from "./task/get-task-by-id";
import { updateTaskById } from "./task/update";


export async function routes(app: FastifyInstance){
    app.get('/tasks/:id', GetTaskById)
    app.get('/tasks', fetchTasks)
    app.post('/tasks', create)
    app.put('/tasks/:id', updateTaskById )
}