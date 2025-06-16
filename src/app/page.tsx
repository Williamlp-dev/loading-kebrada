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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Main Content */}
        <div className="text-center">
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-50 mb-6 tracking-tight"}>
            KEBRADA BURGER
          </h1>
        </div>

        {/* Clickable Image */}
        <div 
          onClick={handleImageClick}
          className="cursor-pointer transform hover:scale-105 transition-transform duration-200 group"
        >
          <div className="bg-neutral-900 p-4 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-200">
            <Image
              src="https://ik.imagekit.io/wl3csniyjx/kebradaburguer.png?updatedAt=1750103542792"
              alt="Kebrada Burger - Clique para ser parceiro"
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Simple instruction */}
        <p className="text-sm text-gray-50 mt-6 text-center max-w-md">
          Clique na imagem para fazer parte do time de parceiros
        </p>
      </div>
    </div>
  );
}