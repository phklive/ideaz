import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 px-4 py-4 text-xl">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-20">
        <Link href="/">Home</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/learn">Learn</Link>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button className="border border-black px-8 py-2 rounded-full">
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
