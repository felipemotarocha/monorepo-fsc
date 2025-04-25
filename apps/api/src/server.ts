import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import { userSchema } from "@repo/schemas";

const server = Fastify({
  logger: true,
});

server.get("/hello", async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    server.log.info(`Server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
