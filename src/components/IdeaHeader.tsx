import Image from "next/image";
import React from "react";
import LoginButton from "./LoginButton";
import { AiOutlineArrowDown } from "react-icons/ai";

const IdeaHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row mt-20">
        <div>
          <Image
            className="flying"
            src="/idea.png"
            alt="Idea man"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center text-6xl mb-10">
            Bringing the best{" "}
            <Image src={"/logo.png"} height={171} width={300} /> on the Tezos
            blockchain
          </div>
          <button className="text-3xl border border-black rounded-full px-4 py-2 hover:text-blue-500">
            Bring your project to life!
          </button>
        </div>
      </div>
      <a href="#ideaz">
        <AiOutlineArrowDown className="my-0 mx-auto text-6xl mt-8 arrowDown" />
      </a>
    </div>
  );
};

export default IdeaHeader;
