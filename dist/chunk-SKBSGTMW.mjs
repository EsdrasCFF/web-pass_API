import {
  generateSlug
} from "./chunk-56MK7IYS.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-KYVTGLZ3.mjs";

// src/routes/create-event.ts
import z from "zod";
async function createEvent(app) {
  app.withTypeProvider().post(
    "/events",
    { schema: {
      summary: "Create a new event",
      tags: ["events"],
      body: z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable()
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid()
        })
      }
    } },
    async (request, response) => {
      const { details, maximumAttendees, title } = request.body;
      const slug = generateSlug(title);
      const eventWithSameSlug = await prisma.event.findUnique({
        where: { slug }
      });
      if (eventWithSameSlug !== null) {
        throw new BadRequest("Another event with same title already exists");
      }
      const event = await prisma.event.create({
        data: {
          title,
          slug,
          maximumAttendees,
          details
        }
      });
      return response.code(201).send({ eventId: event.id });
    }
  );
}

export {
  createEvent
};
