import Image from "next/image";
import React from "react";

const IdeaHeader = () => {
  return (
    <div className="grid items-center h-screen">
      <div className="flex flex-row flex-1 items-center justify-center">
        <Image className="flying" src="/idea.png" alt="Idea man" width={500} height={500} />
        <h1 className="text-center text-6xl">
          Bringing the best{" "}
          <span className="font-bold block text-8xl">Ideaz</span> on the Tezos
          blockchain
        </h1>
      </div>
    </div>
  );
};

export default IdeaHeader;
