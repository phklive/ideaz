import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly h-screen w-screen LandingHeader">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/logo.png"} height={228} width={400} />
          <h1 className="text-center text-4xl font-normal">
            Matching best <span className="font-bold">Projects 🚀</span> <br />{" "}
            with best <span className="font-bold">Builders 👷🏽‍♂️</span>
          </h1>
        </div>
        <Image
          src="/flying.png"
          alt="flying illustration"
          className="flying"
          width={500}
          height={500}
        />
        <div className="slash"></div>
      </div>
    </>
  );
};

export default LandingHeader;
