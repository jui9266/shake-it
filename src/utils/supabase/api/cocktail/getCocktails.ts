import { Cocktail } from "@/types/main/cocktail";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { createClient } from "../../client";

export const getCocktails = async () => {
  const supabase = createClient();

  const { data }: PostgrestSingleResponse<Cocktail[]> = await supabase
    .from("cocktail")
    .select(`*`);

  return data;
};
