import Image from "next/image";
import React from "react";

const LearnHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <a href="https://opentezos.com/">
        <Image
          src={"/opentezos.png"}
          alt="Open tezos"
          width={800}
          height={200}
        />
      </a>
    </div>
  );
};

export default LearnHeader;
