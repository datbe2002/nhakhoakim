"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/mainpage/banner/BannerWeb-PhongTietTrung-PC-01-scaled.png",
    "/images/mainpage/banner/Implant-PC.png",
    "/images/mainpage/banner/trong-rang-implant-tri-an-10-thang-6-desktop-scaled.png",
    "/images/mainpage/banner/rang-su-tham-my-tri-an-10-thang-6-desktop-1-scaled.png",
    "/images/mainpage/banner/NiengRang-PC.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full w-full h-full flex-shrink-0 flex-grow-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain md:object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                currentSlide === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 sm:left-5 -translate-y-1/2 bg-white/30 hover:bg-white/60 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all z-10 group"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <button
        className="absolute top-1/2 right-2 sm:right-5 -translate-y-1/2 bg-white/30 hover:bg-white/60 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all z-10 group"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default HeroSection;
