import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, request, response) => {
  if (error instanceof ZodError) {
    return response.status(400).send({
      message: "Error during validaton",
      erros: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return response.status(400).send({ message: error.message });
  }
  return response.status(500).send({ message: "Internal server error" });
};

export {
  errorHandler
};
