import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="flex justify-center items-center flex-col">
        <Image src="/logo.png" alt="illustration" width={300} height={171} />
        <h1 className="text-center text-4xl font-normal">
          Matching best projects with best builders
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
