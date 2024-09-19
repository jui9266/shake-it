"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Visual1 from "../../../public/assets/images/main/visual1.png";
import Visual2 from "../../../public/assets/images/main/visual2.png";
import Visual3 from "../../../public/assets/images/main/visual3.png";

const Visual = () => {
  return (
    <Slider autoplay={false} arrows={false} autoplaySpeed={7000}>
      <div>
        <div className="w-full h-80 flex flex-row items-center justify-between bg-[#000033]">
          <div className="px-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              아이스 브레이커
            </h3>
            <p className="sm:text-lg mt-2 mb-4 text-gray-300 font-semibold">
              데킬라와 자몽주스로 만든 칵테일
            </p>
            <p className="text-xs sm:text-sm text-white mb-8">
              자몽이 들어있어 씁쓸한 맛이 있지만 끝에 살짝의 단맛이 있어어요
              <br />
              간얼음을 넣어 먹으면 좀더 맛있어요
            </p>
            <Link
              href={"/cocktail/3"}
              className="py-3 px-5 bg-white text-[#000033] rounded-lg font-semibold"
            >
              레시피 보러가기
            </Link>
          </div>
          <div className="pr-10">
            <Image
              src={Visual1}
              height={240}
              alt="마티니"
              className="h-60 sm:h-72 object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-80 flex flex-row items-center justify-between bg-[#000033]">
          <div className="px-5 ">
            <h3 className="text-3xl font-bold text-white">아이스 브레이커</h3>
            <p className="text-lg mt-2 mb-4 text-gray-300 font-semibold">
              데킬라와 자몽주스로 만든 칵테일
            </p>
            <p className="text-sm text-white mb-8">
              자몽이 들어있어 씁쓸한 맛이 있지만 끝에 살짝의 단맛이 있어어요
              <br />
              간얼음을 넣어 먹으면 좀더 맛있어요
            </p>
            <Link
              href={"/cocktail/3"}
              className="py-3 px-5 bg-white text-[#000033] rounded-lg font-semibold"
            >
              레시피 보러가기
            </Link>
          </div>
          <div className="pr-10">
            <Image
              src={Visual2}
              height={240}
              alt="마티니"
              className="h-72 object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-80 flex flex-row items-center justify-between bg-[#000033]">
          <div className="px-5 ">
            <h3 className="text-3xl font-bold text-white">아이스 브레이커</h3>
            <p className="text-lg mt-2 mb-4 text-gray-300 font-semibold">
              데킬라와 자몽주스로 만든 칵테일
            </p>
            <p className="text-sm text-white mb-8">
              자몽이 들어있어 씁쓸한 맛이 있지만 끝에 살짝의 단맛이 있어어요
              <br />
              간얼음을 넣어 먹으면 좀더 맛있어요
            </p>
            <Link
              href={"/cocktail/3"}
              className="py-3 px-5 bg-white text-[#000033] rounded-lg font-semibold"
            >
              레시피 보러가기
            </Link>
          </div>
          <div className="pr-10">
            <Image
              src={Visual3}
              height={240}
              alt="마티니"
              className="h-72 object-contain"
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Visual;
