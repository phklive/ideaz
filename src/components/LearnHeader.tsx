import Image from "next/image";
import React from "react";

const LearnHeader = () => {
  return (
    <div>
      <Image
        src={"/opentezos.jpg"}
        alt="Open tezos"
        width={2000}
        height={500}
      />
    </div>
  );
};

export default LearnHeader;
