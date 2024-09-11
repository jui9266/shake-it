import React from "react";
import Image from "next/image";
import Visual from "../../../../public/assets/images/main/visual1.png";

const RecipePage = () => {
  return (
    <div className="">
      <div className="flex flex-1 items-center justify-between px-10">
        <Image
          src={Visual}
          width={600}
          height={600}
          quality={90}
          alt="칵테일 이름 이미지"
          className="h-full w-[300px] object-contain"
        />
      </div>
      <div className="bg-blue-300"></div>
    </div>
  );
};

export default RecipePage;
