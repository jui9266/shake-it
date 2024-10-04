import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  const res = await prisma.cocktail.findMany({
    include: {
      ingredients: {
        include: { ingredient: true },
      },
    },
  });
  return NextResponse.json(res);
}

export async function POST() {
  const prisma = new PrismaClient();
  const res = await prisma.cocktail.create({
    data: {
      name: "갓파더",
      alcoholDegree: 3,
      baseAlcoholId: 1,
      order: ["잘", "섞", "어"],
      glassId: 1,
      description: "테스트입니다.",
    },
  });

  await prisma.ingredientsOnCocktails.create({
    data: {
      cocktailId: res.id,
      ingredientId: 1,
    },
  });
  return NextResponse.json(res);
}
