import Image from "next/image";
import React from "react";

const IdeaHeader = () => {
  return (
    <div className="grid items-center h-screen">
      <div className="grid grid-cols-2 items-center justify-center">
        <h1 className="text-center text-6xl">
          Bringing the best{" "}
          <span className="font-bold block text-8xl">Ideaz</span> on the Tezos
          blockchain
        </h1>
        <Image src="/idea.png" alt="Idea man" width={400} height={500} />
      </div>
    </div>
  );
};

export default IdeaHeader;
