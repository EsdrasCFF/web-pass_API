import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-KYVTGLZ3.mjs";

// src/routes/check-in.ts
import z from "zod";
async function checkIn(app) {
  app.withTypeProvider().get(
    "/attendees/:attendeeId/check-in",
    {
      schema: {
        summary: "Attendee run checked in",
        tags: ["check-in"],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        response: {
          201: z.null()
        }
      }
    },
    async (request, response) => {
      const { attendeeId } = request.params;
      const attendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          attendeeId
        }
      });
      if (attendeeCheckIn !== null) {
        throw new BadRequest("Attendee already checked in!");
      }
      await prisma.checkIn.create({
        data: {
          attendeeId
        }
      });
      return response.status(201).send();
    }
  );
}

export {
  checkIn
};
