import React from "react";



import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const home =()=>{
   return (
      <div>
        <Header></Header>
       
         
      <div className="text-green-800">
      <section className="relative">
         <Image src="/images/p1.jpg" alt="" width={1200} height={800} className="object-cover w-full h-auto"></Image>
      
   </section>
      </div>

      <section className="bg-gray-900  text-[#ffff] py-8 px-6">
        <div className="mx-auto text-center max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Hollywood</h2>
         <p className="text-lg leading-relaxed">
         Hollywood, located in Los Angeles, California, is globally recognized as the epicenter of the entertainment industry, particularly film and television production. It has long been a symbol of glamour, creativity, and celebrity culture. Home to major film studios, iconic landmarks like the Hollywood Walk of Fame, and the annual Academy Awards ceremony, Hollywood plays a pivotal role in shaping popular culture. Over the years, it has evolved into a diverse hub of storytelling, influencing audiences worldwide through its movies, music, and media.
         </p>
         </div>
      </section>
      <section className="py-9 relative">
         <Image src="/images/p2.jpg" alt="" width={1200} height={800} className="h-auto object-cover w-full"></Image>
         
      </section>
      <section className="py-8 px-6 text-[#fff] bg-gray-900">
         <div className="max-w-5xl text-center mx-auto">
         <h2 className="text-3xl font-bold mb-4">Bollywood</h2>
         <p className="text-lg leading-relaxed">
         Bollywood, the vibrant heart of Indian cinema, is renowned for its colorful musicals, dramatic storytelling, and star-studded casts. Based in Mumbai, it produces a vast array of films that blend genres, often featuring elaborate dance sequences and emotional narratives. With a global fanbase, Bollywood has not only shaped Indian culture but also influenced international cinema. Its films explore themes of love, family, and social issues, resonating with audiences around the world while showcasing the rich diversity of Indian heritage.
         </p>
         </div>
      </section>
      <Footer></Footer>
      
      </div>
   )
}

export default home;