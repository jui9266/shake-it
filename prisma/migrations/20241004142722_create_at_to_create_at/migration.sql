/*
  Warnings:

  - You are about to drop the column `created_at` on the `Glass` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Glass" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
