import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  const res = await prisma.cocktail.findMany();
  return NextResponse.json(res);
}
