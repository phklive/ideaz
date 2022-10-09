import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-center text-3xl pt-6 absolute top-0 left-0 w-screen z-50">
      <div className="flex flex-row items-center justify-center gap-20 self-center">
        <Link href="/">Home</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/learn">Learn</Link>
      </div>
      <div className="flex absolute right-5 gap-8 text-xl">
        <LoginButton />
        <a href="#" className="flex flex-row" target={"_blank"}>
          <span>WhitePaper</span>
          <AiOutlineLink />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
