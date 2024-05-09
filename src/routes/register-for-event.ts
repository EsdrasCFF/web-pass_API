import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function regiserForEvent(app:FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post(
      '/events/:eventId/attendee',
      
      {schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email()
        }),
        params: z.object({
          eventId: z.string().uuid()
        }),
        response: {
          201: z.object({
            attendeeId: z.number()
          })
        }
      }}, 
      
      async (request, response) => {
        const { name, email } = request.body
        const { eventId } = request.params
      
        const attendee = await prisma.attendee.create({
          data: {
            name,
            email,
            eventId,
          }
        })

        return response.code(201).send({attendeeId: attendee.id})
      }
    )
}