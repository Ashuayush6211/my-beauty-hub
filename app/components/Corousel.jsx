"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const slides = [
    {
      image: "/image1.jpg",
      caption: "Experience the best beauty treatments",
    },
    {
      image: "/image2.jpg",
      caption: "Luxury skincare for radiant glow",
    },
    {
      image: "/image4.jpg",
      caption: "Relax and rejuvenate with us",
    },
  ];

  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-3xl font-bold my-6">Welcome to My Beauty Hub</h1>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full max-w-4xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-0 right-0 text-center bg-black/50 text-white py-2">
              {slide.caption}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
