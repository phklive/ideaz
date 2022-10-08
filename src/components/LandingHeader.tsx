import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <div className="">
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-7xl font-bold">
        Matching <em className="font-bold">best projects's</em> with{" "}
        <em className="font-bold">best builders</em>
      </h1>
      <Image
        src="/flying.png"
        alt="flying illustration"
        className="flying"
        height={500}
        width={500}
      />
    </div>
  );
};

export default LandingHeader;
