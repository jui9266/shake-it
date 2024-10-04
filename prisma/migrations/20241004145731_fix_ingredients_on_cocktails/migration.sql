/*
  Warnings:

  - The primary key for the `IngredientsOnCocktails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assignedAt` on the `IngredientsOnCocktails` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `IngredientsOnCocktails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IngredientsOnCocktails" DROP CONSTRAINT "IngredientsOnCocktails_pkey",
DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy",
ADD COLUMN     "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "IngredientsOnCocktails_pkey" PRIMARY KEY ("id");
