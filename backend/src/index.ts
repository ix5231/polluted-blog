import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/flag", async (request, reply) => {});

fastify.post("/login", async (request, reply) => {});

fastify.get("/friends", async (request, reply) => {});

fastify.get("/friends/:id/profile", async (request, reply) => {});

fastify.put("/my/profile", async (request, reply) => {});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
