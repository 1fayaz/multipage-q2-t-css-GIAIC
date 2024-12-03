import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header (){
   return(
      <nav className="flex justify-between items-center py-[20px] px-[40px] bg-[#2c3e50] text-[#ffff] sticky top-0 z-[1000] shadow-black ">
       <Image src="/images/p8.png" alt="logo" width={160} height={95}  />
       <div className="text-2xl font-bold tracking-wider scroll-ml-[20px] uppercase text-[#f1c40f]">
         <h1>Film Industry Flix</h1>
       </div>

       <div className="links hidden md:flex items-center">
        <Link href="/home" className="text-white hover:bg-gray-400 p-4">Home</Link>
        <Link href="/studios" className="text-white hover:bg-gray-400 p-4">Studios</Link>
        <Link href="/contact" className="text-white hover:bg-gray-400 p-4">Contact Us</Link>
      </div>
      </nav>
   )
};

export default Header;