"use client";
// import { getCocktails } from "@/utils/getCocktails";
// import { useQuery } from "@tanstack/react-query";
import React from "react";
import CocktilItem from "./CocktilItem";

const data = [
  {
    id: 1,
    created_at: "2024-10-02T08:59:37.284Z",
    name: "갓마더",
    description: "설명설명설명",
    alcohol_degree: 2,
    glass_type: "온더락",
    base_alcohol: "보드카",
  },
  {
    id: 2,
    created_at: "2024-10-02T08:59:37.284Z",
    name: "갓파더",
    description: "설명설명설명",
    alcohol_degree: 3,
    glass_type: "온더락",
    base_alcohol: "위스키",
  },
];

const CocktailList = () => {
  // const { data } = useQuery({ queryKey: ["cocktails"], queryFn: getCocktails });

  // console.log(data);

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
