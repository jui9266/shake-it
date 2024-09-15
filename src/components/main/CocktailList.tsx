"use client";

import { getCocktails } from "@/utils/supabase/api/cocktail/getCocktails";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CocktilItem from "./CocktilItem";

const CocktailList = () => {
  const { data } = useQuery({ queryKey: ["cocktails"], queryFn: getCocktails });

  return (
    <div className="w-full p-5">
      <h2 className="text-lg font-semibold mb-5">인기 레시피</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3">
        {data?.map((cocktail) => (
          <CocktilItem key={cocktail.id} cocktail={cocktail} />
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
