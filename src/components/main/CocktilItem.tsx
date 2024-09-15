import React from "react";
import Image from "next/image";
import CockTail from "../../../public/assets/images/cocktail/cocktail.jpg";
import { Cocktail } from "@/types/main/cocktail";

type Props = {
  cocktail: Cocktail;
};

const CocktilItem = ({ cocktail }: Props) => {
  const alcoholDegree = (degree: number) => {
    if (degree === 1) return "낮음";
    if (degree === 2) return "보통";
    if (degree === 3) return "높음";
  };
  return (
    <li className="bg-white shadow-lg rounded-lg h-64 sm:h-80 mb-4 overflow-hidden mx-2">
      <div className="w-full h-40 sm:h-56 ">
        <Image
          className="w-full h-full object-center"
          src={CockTail}
          alt="칵테일 이미지"
          width={500}
        />
      </div>
      <div className="mt-2 px-2">
        <h3 className="text-lg font-semibold">{cocktail.name}</h3>
        <p className="text-sm text-gray-600">
          도수 : {alcoholDegree(cocktail.alcohol_degree)}
        </p>
        <p className="text-sm text-gray-600">기주 : {cocktail.base_alcohol}</p>
      </div>
    </li>
  );
};

export default CocktilItem;
