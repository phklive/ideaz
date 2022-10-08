import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
              <Image src={"/logo.png"} height={228} width={400} />
              <h1 className="text-center text-5xl font-normal mt-8">
                Matching best{" "}
                <span className="font-bold underline">Projects</span> 🚀 <br />{" "}
                with best <span className="font-bold underline">Builders</span>{" "}
                👷🏽‍♂️
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
          <div className="flex flex-col justify-center items-center gap-4">
            <button className="text-3xl border border-black rounded-full px-4 py-2 hover:text-blue-500">
              Build the future!
            </button>
            <span className="text-3xl text-center">Bringing the next BILLION users on Tezos</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
