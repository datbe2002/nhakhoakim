"use client";

import React, { useState } from "react";
import HeaderTilte from "./HeaderTilte";
import { FaPlay } from "react-icons/fa";

const FeelingSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      image:
        "https://nhakhoakim.com/wp-content/uploads/2024/04/YoutubeShort-FN-nieng-gia-phuc-01.jpg",
      videoId: "CdLPwHL2D5I",
      title: "[Short] Video khách hàng Gia Phúc",
    },
    {
      image:
        "https://nhakhoakim.com/wp-content/uploads/2024/07/photo_2024-07-20_14-11-57.jpg",
      videoId: "cHFiXgia-kc",
      title: "[Short] Video khách hàng Tú Trí",
    },
    {
      image:
        "https://nhakhoakim.com/wp-content/uploads/2024/03/YoutubeShort-FN-new-02-update.jpg",
      videoId: "COJ3ngxw1HQ",
      title: "[Short] Video khách hàng Anh Khoa",
    },
    {
      image:
        "https://nhakhoakim.com/wp-content/uploads/2024/07/photo_2024-07-20_14-13-07.jpg",
      videoId: "jpX5e2xmJMc",
      title: "[Short] Video khách hàng Thu Thảo",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <HeaderTilte title="CẢM NHẬN CỦA KHÁCH HÀNG" />

      <div className="flex flex-wrap -mx-1 mt-10 bg-white rounded-sm overflow-hidden shadow-lg">
        {testimonials.map((item, index) => (
          <article
            key={index}
            className="mb-2 p-1 transition-all duration-300 hover:-translate-y-1 w-full sm:w-1/2 md:w-1/4 lg:w-1/4"
          >
            <div
              className="relative p-0 cursor-pointer"
              onClick={() => setSelectedVideo(item.videoId)}
              title={item.title}
            >
              <img
                className="w-full h-auto object-cover"
                width="54"
                height="96"
                src={item.image}
                alt={item.title}
              />

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#ffffff1c] rounded-full flex items-center justify-center">
                <FaPlay className="text-white ml-1 " />
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-4 mt-10">
        <div className="text-center text-white py-2 px-4 bg-[#005f9d] rounded-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          Tìm hiểu thêm
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeelingSection;
