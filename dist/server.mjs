import {
  errorHandler
} from "./chunk-YUWJRRKY.mjs";
import {
  checkIn
} from "./chunk-TZGZAGZA.mjs";
import {
  createEvent
} from "./chunk-SKBSGTMW.mjs";
import "./chunk-56MK7IYS.mjs";
import {
  getAttendeeBadge
} from "./chunk-YAO6GQ3V.mjs";
import {
  getEvent
} from "./chunk-E22ZZTE4.mjs";
import {
  getEventAttendees
} from "./chunk-FKC4ZXSY.mjs";
import {
  registerForEvent
} from "./chunk-UGK4TS5C.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-KYVTGLZ3.mjs";

// src/server.ts
import fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "web-pass",
      description: "Especifica\xE7\xF5es da API Web-Pass, backend da aplica\xE7\xE3o Web-Pass, construida para gerenciar eventos e participantes",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running");
});
