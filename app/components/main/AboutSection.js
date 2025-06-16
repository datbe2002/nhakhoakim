"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div
        className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden group cursor-pointer border-10 border-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src="/images/mainpage/thumbnail-home.png"
          alt="About Kim Dental"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
          <button className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <FaPlay className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <iframe
              src="https://www.youtube.com/embed/GUb8uUZUh5A?si=gLbFYKz9-X6okRYH"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
