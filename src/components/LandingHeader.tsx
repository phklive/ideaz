import React from "react";

const LandingHeader = () => {
  return (
    <div className="">
      <h1 className="z-100 h-28 font-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-7xl font-bold">
        Matching <em className="font-bold">best projects's</em> with{" "}
        <em className="font-bold">best builders</em>
      </h1>
      <img src="/flying.png" alt="flying illustration" className="flying" />
    </div>
  );
};

export default LandingHeader;
