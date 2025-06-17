"use client";

import React from "react";
import HeaderTilte from "./HeaderTilte";
import Link from "next/link";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/05/nieng-rang-mac-cai-tri-an-15-thang-6.jpg",
      title: "Tri ân 15% dịch vụ Niềng răng mắc cài",
      date: "01/06/2025",
      category: "Hoạt động & Sự kiện",
      description:
        "Mùa hè này, Nha Khoa Kim triển khai Chương trình TRI ÂN 15% dành cho dịch vụ Niềng răng mắc cài. Ưu đãi áp dụng trong Tháng 06. Đây là cơ...",
    },
    {
      id: 2,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/rang-su-tham-my-tri-an-10-thang-6-555x312.jpg",
      title: "Tri ân 10% dịch vụ trồng răng Implant",
      date: "31/05/2025",
      isSmall: true,
    },
    {
      id: 3,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/05/trong-rang-implant-tri-an-10-thang-6-555x312.jpg",
      title: "Tri ân 10% dịch vụ Răng sứ thẩm mỹ",
      date: "26/02/2025",
      isSmall: true,
    },
    {
      id: 4,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/02/Nha-Khoa-Kim-top-20-Thanh-tuu-Y-khoa-Viet-Nam-2024-10-555x312.jpg",
      title:
        "Nha Khoa Kim đạt được Thành tựu Y khoa 2024 do Sở Y tế TP.HCM tổ chức",
      date: "26/02/2025",
      isSmall: true,
    },
    {
      id: 5,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/02/NKK_POST-TUYEN-DUNG-chinh-nha-02a-555x312.jpg",
      title: "Nha Khoa Kim tuyển dụng bác sĩ nha khoa định hướng Chỉnh nha",
      date: "26/02/2025",
      isSmall: true,
    },
  ];

  const featuredNews = news[0];
  const recentNews = news.slice(1);

  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <HeaderTilte title="TIN TỨC & SỰ KIỆN" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 bg-white rounded-sm overflow-hidden shadow-lg">
        {/* Featured News */}
        <Link
          href={`/news/${featuredNews.id}`}
          className="group p-4 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="transition-all duration-300">
            <div className="relative aspect-[16/9]">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-700 text-yellow-500 transition-colors">
                {featuredNews.title}
              </h3>
              <div className="text-gray-500 text-sm mb-3">
                {featuredNews.category} - {featuredNews.date}
              </div>
              <p className="text-gray-600 line-clamp-3">
                {featuredNews.description}
              </p>
            </div>
          </div>
        </Link>

        {/* Recent News List */}
        <div className="space-y-2 flex flex-col gap-1 p-4">
          {recentNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <div className="overflow-hidden transition-all duration-300 flex hover:-translate-y-1">
                <div className="relative w-1/3 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-gray-500 text-sm">{item.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
