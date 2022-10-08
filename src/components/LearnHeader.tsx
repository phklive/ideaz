import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const LearnHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
              <Image src={"/logo.png"} height={228} width={400} />
              <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-center text-5xl font-normal mt-8">
                  <span className="font-bold underline">Learn</span>,{" "}
                  <span className="font-bold underline">Obtain</span>{" "}
                  certifications, <br /> and{" "}
                  <span className="font-bold underlfine">create</span> the best
                  projects <br />
                  on Tezos
                </h1>
                <button className="text-3xl border border-black rounded-full px-4 py-2 hover:text-blue-500">
                  Build the future!
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/builder.png"
                alt="flying illustration"
                className="flying"
                width={600}
                height={600}
              />
            </div>
          </div>
          <a href="#courses">
            <AiOutlineArrowDown className="my-0 mx-auto text-6xl mt-8 arrowDown" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LearnHeader;
