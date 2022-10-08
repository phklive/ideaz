import Image from "next/image";
import React from "react";

const Users = () => {
  return (
    <div className="flex flex-row justify-evenly gap-8 w-screen bg-grey">
      <div className="flex flex-col items-center justify-center border border-slate-200 rounded w-11/12">
        <h1 className="text-4xl">I have an idea</h1>
        <Image
          src={"/idea.png"}
          alt="Idea illustration"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col items-center justify-center border border-slate-200 rounded w-11/12">
        <h1 className="text-4xl">I'm a builder</h1>
        <Image
          src={"/builder.png"}
          alt="Builder illustration"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col items-center justify-center border border-slate-200 rounded w-11/12">
        <h1 className="text-4xl">I want to invest</h1>
        <Image
          src={"/investor.png"}
          alt="Investor illustration"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Users;
