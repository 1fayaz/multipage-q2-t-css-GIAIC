import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Link from "next/link";


const Footer=()=>{
   return(
      
      <footer className="bg-[#2c3e50] text-[#ffff] py-[60px] px-[20px] justify-center text-center relative overflow-hidden broder-t-4 border-[#f1c40f] divide-inherit">
         <div className='max-w-[1200px]'>
            <h2 id="h2q">Quick Links</h2>
            <ol className='flex justify-center  gap-[40px] flex-wrap list-none'>
               <li><Link href="/home" className="fas fa-home hover:bg-gray-500">Home</Link></li>
               <li><Link href="/studios" className="fa-brands fa-studiovinari hover:bg-gray-500">Studios</Link></li>
               <li><Link href="/contact"  className="fas fa-envelope hover:bg-gray-500">Contact Us</Link></li>
            </ol>

         </div>
      </footer>
   
   )
}

export default Footer;