import Image from "next/image";
import CockTail from "../../public/assets/images/cocktail/cocktail.jpg";
import Visual1 from "../../public/assets/images/main/visual1.png";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <div className="w-full h-80 flex flex-row items-center justify-between bg-[#000033]">
        <div className="px-5">
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
            href={"/recipe/3"}
            className="py-3 px-5 bg-white text-[#000033] rounded-lg font-semibold"
          >
            레시피 보러가기
          </Link>
        </div>
        <div className="">
          <Image
            src={Visual1}
            width={300}
            alt="마티니"
            className="h-72 object-contain"
          />
        </div>
      </div>
      <div className="w-full p-5">
        <h2 className="text-lg font-semibold mb-5">인기 레시피</h2>
        <ul className="grid grid-cols-3">
          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>

          <li className="bg-white shadow-lg rounded-lg h-80 mb-4 overflow-hidden mx-2">
            <div className="w-full h-56 ">
              <Image
                className="w-full h-full object-center"
                src={CockTail}
                alt="칵테일 이미지"
                width={500}
              />
            </div>
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
