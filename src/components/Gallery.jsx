import React, { useState, useRef } from "react";
import { Plus, ArrowLeft, ArrowRight, CircleHelp, Table } from "lucide-react";
import image from "../assets/image.jpg";

const Gallery = () => {
  const [images, setImages] = useState([image, image, image, image]);
  const scrollRef = useRef(null);

  const addImage = () => setImages([...images, image]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 220, behavior: "smooth" });

  return (
    <div className="w-full max-w-[720px] bg-[#363C43] rounded-[18px] p-4 md:p-[15px] flex gap-4">
      {/* Sidebar */}
      <aside className="flex flex-col items-center gap-4">
        <CircleHelp className="w-[24px] h-[24px] text-gray-400" />
        <Table className="mt-[105px] text-gray-400" />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full gap-4">
        {/* Header */}
        <div className="flex items-center w-full sm:w-[92%]">
          <h2 className="bg-[#171717] rounded-[23px] flex items-center justify-center text-white text-[16px] md:text-[18px] font-medium w-[120px] md:w-[149px] h-[50px] md:h-[62px] poppins">
            Gallery
          </h2>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={addImage}
              className="text-[12px] w-[110px] md:w-[131px] h-[40px] md:h-[46px] rounded-[104px] backdrop-blur-sm bg-gray-500/30 flex items-center justify-center gap-2 text-white"
            >
              <Plus size={16} /> ADD IMAGE
            </button>

            <div onClick={scrollLeft} className="bg-black rounded-full text-gray-400 p-2 cursor-pointer hover:scale-110 transition">
              <ArrowLeft />
            </div>
            <div onClick={scrollRight} className="bg-black rounded-full text-gray-400 p-2 cursor-pointer hover:scale-110 transition">
              <ArrowRight />
            </div>
          </div>
        </div>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-[20px] md:gap-[29px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent mt-[5px] overflow-x-auto w-full sm:w-[92%] px-4 py-4 ml-0 sm:ml-5 scroll-smooth"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="flex-shrink-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px] hover:rotate-[-5deg] opacity-90 grayscale rounded-[24px] hover:grayscale-0 hover:scale-[1.1] duration-300 transition-transform"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
