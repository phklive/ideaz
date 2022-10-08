import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const IdeaHeader = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen">
      <div className="flex flex-row">
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
          <div className="flex flex-col justify-center items-center text-center text-6xl">
            Bringing the best{" "}
            <Image src={"/logo.png"} height={171} width={300} /> on the Tezos
            blockchain
          </div>
        </div>
      </div>
      <a href="#ideaz">
        <AiOutlineArrowDown className="my-0 mx-auto text-6xl mt-8 arrowDown" />
      </a>
    </div>
  );
};

export default IdeaHeader;
