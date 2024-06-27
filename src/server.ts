import { ZodError } from 'zod'
import { app } from './app'
import { env } from './env'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🆗 HTTP Server Running! on port ${env.PORT}`)
  })


  app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error', issues: error.format() })
    }
  
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return reply
      .status(400)
      .send({ message: 'Validation error', issues: 'Resource not found', error_code: error.code })
    }

    if (env.NODE_ENV !== 'production') {
      console.error(error)
    } else {
      // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
    }
  
    return reply.status(500).send({ message: 'Internal server error' })
  })