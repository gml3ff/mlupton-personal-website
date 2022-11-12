import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
            <h1 className="text-2xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Morgan Lupton
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-400 dark:text-gray-200 my-2">
              Sales Engineer based in Washington D.C.
            </h1>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-1/2 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" id="profPic"/>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
