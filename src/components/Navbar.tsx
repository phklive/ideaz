import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="text-3xl pt-6 absolute top-0 left-0 w-screen z-50">
      <div className="flex flex-row items-center justify-center gap-20 self-center">
        <Link href="/">Home</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/learn">Learn</Link>
        <LoginButton />
      </div>
    </nav>
  );
};

export default Navbar;
