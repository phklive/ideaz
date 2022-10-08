import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 px-4 py-4 text-xl mb-4">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={200} />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-20">
        <Link href="/">Home</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/learn">Learn</Link>
      </div>
    </nav>
  );
};

export default Navbar;
