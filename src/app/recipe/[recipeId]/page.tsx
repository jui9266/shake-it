import React from "react";
import Image from "next/image";
import Visual from "../../../../public/assets/images/main/visual1.png";

const RecipePage = () => {
  return (
    <div className="flex sm:flex-row flex-col">
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
        <h2 className="text-2xl font-bold">아이스 브레이커</h2>
        <p className="mt-2 text-sm">
          데킬라 베이스 칵테일로, 자몽주스와 과일 시럽을 섞어 만든다. 때문에
          맛은 씁쓸하면서도 달콤하다.
        </p>

        <div className="flex justify-between items-start mt-5">
          <ul className="flex flex-col flex-1">
            <li className="mb-2 flex items-center">
              <p className="">도수:</p>
              <div className="flex ml-3 gap-x-3 items-center">
                <ul className="flex gap-x-2">
                  <li className="w-3 h-3 rounded-full bg-gray-200"></li>
                  <li className="w-3 h-3 rounded-full bg-red-300"></li>
                  <li className="w-3 h-3 rounded-full bg-gray-200"></li>
                </ul>
              </div>
            </li>
            <li className="mb-2">
              <p className="">
                기주: <span>데킬라</span>
              </p>
            </li>
            <li className="mb-2">
              <p className="">
                잔: <span>온더락</span>
              </p>
            </li>

            <li className="mt-2">
              <p className="text-lg font-bold mb-1">필요한 재료</p>
              <ul>
                <li className="text-sm mb-1">데킬라</li>
                <li className="text-sm mb-1">자몽주스</li>
                <li className="text-sm mb-1">트리플섹</li>
                <li className="text-sm mb-1">그레나딘시럽</li>
              </ul>
            </li>
          </ul>

          <div className="flex flex-col flex-1">
            <p className="text-lg font-bold mb-1">레시피</p>
            <ul>
              <li>
                <p>데킬라 1oz</p>
              </li>
              <li>
                <p>자몽주스 1oz</p>
              </li>
              <li>
                <p>트리플섹 1/2oz</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
