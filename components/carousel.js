"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import book from "@/public/images/carousel/book.jpg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: book,
    title: "خصومات حصرية",
    description: "تصل إلى 50% على الدورات المميزة.",
  },
  {
    image: book,
    title: "دورات متخصصة",
    description: "تعلم من خبراء في مجالات متعددة.",
  },
];

export default function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Runs when swiperInstance is set

  return (
    <div className="relative w-full flex justify-center items-center p-4">
      <div className="max-w-3xl w-full relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSwiper={setSwiperInstance} // Store swiper instance
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex bg-blue-200 p-6 rounded-xl justify-around items-center gap-4">
                <div>
                  <h2 className="text-blue-800 font-bold text-lg">
                    {slide.title}
                  </h2>
                  <p className="text-blue-700">{slide.description}</p>
                </div>
                <div className="p-2 rounded-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons at Borders */}
        <button
          ref={prevRef}
          className="absolute -left-6 cursor-pointer top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-6 cursor-pointer top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
