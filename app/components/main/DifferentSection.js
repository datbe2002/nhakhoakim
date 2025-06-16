"use client";

import React from "react";
import HeaderTilte from "./HeaderTilte";

const DifferentSection = () => {
  const differents = [
    {
      src: "/images/mainpage/different/1721637718FjxLDpBNXlhqcy8.png",
      title:
        "⚠️ Cảnh báo nhiễm khuẩn chéo: Đừng vệ sinh răng khi chưa kiểm tra khu vô trùng",
    },
    {
      src: "/images/mainpage/different/BacSi-02-555x312.png",
      title: "Nha Khoa Kim – Đối tác toàn cầu của Đại học Harvard",
    },
    {
      src: "/images/mainpage/different/Bacsi-555x312-1.png",
      title: "100% đội ngũ Bác sĩ có chứng chỉ hành nghề",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <HeaderTilte title="SỰ KHÁC BIỆT NHA KHOA KIM" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {differents.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm overflow-hidden shadow-lg duration-300 transition-all hover:-translate-y-[2px] cursor-pointer"
          >
            <div className="relative aspect-[16/9]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2 min-h-[3.5rem]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifferentSection;
