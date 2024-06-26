import { FastifyInstance } from "fastify";
import { create } from "./task/create";
import { fetchTasks } from "./task/fetch-tasks";
import { getTaskById } from "./task/get-task-by-id";
import { updateTaskById } from "./task/update";
import { deleteTaskById } from "./task/delete";


export async function routes(app: FastifyInstance){
    app.get('/tasks/:id', getTaskById)
    app.get('/tasks', fetchTasks)
    app.post('/tasks', create)
    app.put('/tasks/:id', updateTaskById )
    app.delete('/tasks/:id', deleteTaskById )
}