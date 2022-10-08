import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center align-center flex-col">
        <h1 className="text-center text-4xl font-normal">
          Matching best projects's with best builders
        </h1>
      </div>
        <Image
          src="/flying.png"
          alt="flying illustration"
          className="flying"
          width={500}
          height={500}
        />
    </div>
  );
};

export default LandingHeader;
