import Image from "next/image";
import React from "react";
import { idea } from "../utils/ideaz";

const IdeaCard: React.FC<idea> = ({ category, desc, image, raised, title }) => {
  return (
    <div className="flex flex-col shadow-xl rounded bg-gray-200">
      <div className="rounded">
        <Image
          src={image}
          alt="Project image"
          width={500}
          height={300}
          className="rounded-t"
        />
      </div>
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h2 className="text-gray-400 text-xl">{category}</h2>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg mt-4">{desc}</p>
        </div>
        <div className="mt-6">
          <h2 className="ml-4 text-lg">{raised} TZX Raised</h2>
          <div className="bg-green-500 h-3 rounded-full border border-black w-11/12 mx-auto mb-2" />
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
