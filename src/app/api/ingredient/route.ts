import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  const res = await prisma.ingredient.findMany();
  return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();
  const body = await request.json();

  const check = await prisma.ingredient.findUnique({
    where: { name: body.name },
  });

  if (check)
    return NextResponse.json({ error: "중복된 재료입니다." }, { status: 400 });

  // 새로운 사용자 생성
  const newUser = await prisma.ingredient.create({
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(newUser);
}
