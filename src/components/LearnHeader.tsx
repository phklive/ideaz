import Image from "next/image";
import React from "react";

const LearnHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <a href="https://opentezos.com/">
            <Image
              src={"/opentezos.png"}
              alt="Open tezos"
              width={800}
              height={200}
            />
          </a>
          <span className="text-6xl text-center">
            Learn how to build on Tezos with Opentezos
          </span>
        </div>
        <Image src="/idea.png" alt="Idea man" width={400} height={500} />
      </div>
    </div>
  );
};

export default LearnHeader;
