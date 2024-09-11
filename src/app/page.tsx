import Image from "next/image";
import CockTail from "../../public/assets/images/cocktail/cocktail.jpg";
import Visual from "@/components/main/Visual";
import { createClient } from "@/utils/supabase/server";

export default async function Main() {
  const supabase = createClient();

  const { data } = await supabase.from("cocktail").select();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Visual />
      <div className="w-full p-5">
        <h2 className="text-lg font-semibold mb-5">인기 레시피</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3">
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
              <h3 className="text-lg font-semibold">데킬라스톤샤워</h3>
              <p className="text-sm text-gray-600">도수 : 높음</p>
              <p className="text-sm text-gray-600">기주 : 데킬라</p>
            </div>
          </li>
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
