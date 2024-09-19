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

export const getCocktail = async (id: string) => {
  const supabase = createClient();

  const { data }: PostgrestSingleResponse<Cocktail> = await supabase
    .from("cocktail")
    .select(`* `)
    .eq("id", id)
    .single();

  return data;
};
