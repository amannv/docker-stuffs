import "dotenv/config";
import prisma from "@repo/database/prisma";

export default async function Home() {
  const users = await prisma.client.user.findMany();

  return <div>{JSON.stringify(users)}</div>;
}
