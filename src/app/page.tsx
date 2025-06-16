"use client";

import Image from "next/image";

export default function Home() {
  const handleImageClick = () => {
    window.open("https://wa.me/5581988926308?text=Ol%C3%A1!%20tudo%20bem%3F%20tenho%20interesse%20em%20fazer%20parte%20do%20time%20de%20parceiros%20da%20KEBRADA%20BURGUER!", "_blank");
  };

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
          onClick={handleImageClick}
          className="cursor-pointer transform hover:scale-105 transition-transform duration-200 group flex items-center justify-center"
        >
          <div className="relative w-[90vw] h-[80vh] max-w-6xl">
            <Image
              src="https://ik.imagekit.io/wl3csniyjx/kebradaburguer.png?updatedAt=1750103542792"
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