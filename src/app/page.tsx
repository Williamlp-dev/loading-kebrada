"use client";

import Image from "next/image";

export default function Home() {


  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Large Clickable Image */}
        <div 
         
          className="cursor-pointer transform hover:scale-105 transition-transform duration-200 group flex items-center justify-center"
        >
          <div className="relative w-[90vw] h-[80vh] max-w-6xl">
            <Image
              src="https://ik.imagekit.io/wl3csniyjx/kebradaburguer.png"
              alt="Kebrada Burger - Clique para ser parceiro"
              fill
              className="object-contain group-hover:brightness-110 transition-all duration-300 rounded-lg"
              priority
              sizes="90vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}