import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/logo.png"} height={228} width={400} />
          <h1 className="text-center text-5xl font-normal mt-8">
            Matching best <span className="font-bold">Projects 🚀</span> <br />{" "}
            with best <span className="font-bold">Builders 👷🏽‍♂️</span>
          </h1>
        </div>
        <div>
          <Image
            src="/flying.png"
            alt="flying illustration"
            className="flying"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="text-3xl border border-black rounded-full px-4 py-2 hover:text-blue-500">
          Build the future!
        </button>
      </div>
    </>
  );
};

export default LandingHeader;
