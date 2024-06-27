import fastify from "fastify";
import { routes } from "./http/controllers/routes";
import fastifyMultipart from "@fastify/multipart";

export const app = fastify()

app.register(fastifyMultipart)
app.register(routes)

