"use client";

import React from "react";
import Image from "next/image";

import Visual from "../../../../../public/assets/images/main/visual1.png";
import { useQuery } from "@tanstack/react-query";
import { getCocktail } from "@/utils/supabase/api/cocktail/getCocktails";

const DetailWrap = ({ cocktailId }: { cocktailId: string }) => {
  const { data } = useQuery({
    queryKey: ["cocktail", cocktailId],
    queryFn: () => getCocktail(cocktailId),
    staleTime: 0,
  });

  if (!data) return <div>로딩중....</div>;
  return (
    <div className="flex sm:flex-row flex-col pb-20">
      <div className="flex flex-1 items-center justify-center px-10">
        <Image
          src={Visual}
          width={600}
          height={600}
          quality={90}
          alt="칵테일 이름 이미지"
          className="h-64 sm:h-80 object-contain"
        />
      </div>
      <div className="flex-[2] px-5 mt-8 sm:mt-0">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="mt-2 text-sm">{data.description}</p>

        <div className="mt-5">
          <div className="flex flex-row items-start ">
            <ul className="flex-1">
              <li className="mb-2 flex items-center ">
                <p className="">도수:</p>
                <div className="flex ml-3 gap-x-3 items-center">
                  <ul className="flex gap-x-2">
                    {[1, 2, 3].map((level) => (
                      <li
                        key={level}
                        className={`w-3 h-3 rounded-full ${
                          level === data.alcohol_degree
                            ? "bg-red-300"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <p className="">
                  기주: <span>{data.base_alcohol}</span>
                </p>
              </li>
              <li className="mb-2">
                <p className="">
                  잔: <span>{data.glass_type}</span>
                </p>
              </li>
            </ul>
            <div className="flex-1">
              <p className="text-lg font-bold mb-1">필요한 재료</p>
              <ul>
                <li className="text-sm mb-1">데킬라</li>
                <li className="text-sm mb-1">자몽주스</li>
                <li className="text-sm mb-1">트리플섹</li>
                <li className="text-sm mb-1">그레나딘시럽</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex flex-col flex-1">
            <p className="text-lg font-bold mb-1">레시피</p>
            <ul className="list-disc">
              <li className="ml-4">
                <p>데킬라 1oz</p>
              </li>
              <li className="ml-4">
                <p>자몽주스 1oz</p>
              </li>
              <li className="ml-4">
                <p>트리플섹 1/2oz</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWrap;
