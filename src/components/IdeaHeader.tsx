import Image from "next/image";
import React from "react";

const IdeaHeader = () => {
  return (
    <div className="grid items-center h-screen">
      <div className="flex flex-row flex-1 items-center justify-center">
        <Image
          className="flying"
          src="/idea.png"
          alt="Idea man"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center items-center text-center text-6xl">
          Bringing the best <Image src={"/logo.png"} height={171} width={300} />{" "}
          on the Tezos blockchain
        </div>
      </div>
    </div>
  );
};

export default IdeaHeader;
