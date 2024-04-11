import type { APIRoute } from "astro";
import prisma from "@util/prisma";

export const GET: APIRoute = async ({ params, request }) => {
  const persons = await prisma.person.findMany({
    include: {
      parent: true,
      child: true,
      spouse: true,
      gender: true,
    },
  });

  return new Response(JSON.stringify(persons), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
};
