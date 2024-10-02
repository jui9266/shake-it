-- CreateTable
CREATE TABLE "Cocktail" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "description" TEXT,
    "alcohol_degree" SMALLINT NOT NULL DEFAULT 3,
    "glass_type" TEXT NOT NULL,
    "base_alcohol" TEXT NOT NULL,

    CONSTRAINT "cocktail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CocktailIngredient" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cocktail_id" BIGINT,
    "cocktail_ingredient" BIGINT,

    CONSTRAINT "cocktail_ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Glass" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,

    CONSTRAINT "glass_type_pkey" PRIMARY KEY ("id","type")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "glass_type_type_key" ON "Glass"("type");

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_ingredients_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "Cocktail" ADD CONSTRAINT "cocktail_base_ alcohol_fkey" FOREIGN KEY ("base_alcohol") REFERENCES "Ingredient"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cocktail" ADD CONSTRAINT "cocktail_glass_type_fkey" FOREIGN KEY ("glass_type") REFERENCES "Glass"("type") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CocktailIngredient" ADD CONSTRAINT "cocktail_ingredient_cocktail_id_fkey" FOREIGN KEY ("cocktail_id") REFERENCES "Cocktail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CocktailIngredient" ADD CONSTRAINT "cocktail_ingredient_cocktail_ingredient_fkey" FOREIGN KEY ("cocktail_ingredient") REFERENCES "Ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
