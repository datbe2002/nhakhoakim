"use client";

import { useState } from "react";
import { articles } from "../data/articles";
import { usePagination } from "../hooks/usePagination";

const News = () => {
  const ITEMS_PER_PAGE = 16;
  const {
    currentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    getPageNumbers,
    paginate,
  } = usePagination(articles.length, ITEMS_PER_PAGE);

  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col mb-5">
      {/* Featured Article */}
      <div className="mb-12 transition-all duration-300 hover:-translate-y-1">
        <div className="grid md:grid-cols-2 gap-6 bg-white">
          <div className="relative h-[300px] w-full">
            <img
              src="https://nhakhoakim.com/wp-content/uploads/2025/06/anh-thumb-tre-bi-cam-mieng.jpg"
              alt="Trẻ bị cạm miệng"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4 group-hover:text-yellow-600">
              Trẻ bị cam miệng: Nguyên nhân, triệu chứng và cách điều trị
            </h1>
            <p className="text-gray-600 mb-4">
              Tình trạng trẻ bị cam miệng khiến miệng bé bị đau rát, biếng ăn và
              thậm chí quấy khóc. Nếu không được chăm sóc đúng cách, cam miệng
              sẽ kéo dài và ảnh hưởng đến sức khỏe của trẻ. Do đó, cha mẹ cần
              nắm rõ nguyên nhân, dấu hiệu để xử lý kịp thời giúp bé nhanh chóng
              hồi phục. Cam miệng ở trẻ là bệnh gì? Cam miệng (hay bệnh cam)
              thường xảy ra ở trẻ nhỏ giai đoạn 2...
            </p>
            <div className="inline-block items-center justify-center gap-4">
              <div className="text-center text-white py-2 px-4 bg-[#005f9d] rounded-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                Tìm hiểu thêm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full">
              <img src={article.image} alt={article.title} />
            </div>
            <h3 className="mb-2 text-md hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8 gap-2">
        <div className="flex flex-row items-center justify-center gap-2">
          {getPageNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => paginate(number)}
              className={`px-3 py-1 min-w-[32px] text-center cursor-pointer ${
                number === currentPage
                  ? "bg-[#0066cc] text-white"
                  : number === "..."
                  ? "cursor-default"
                  : "text-red-500 hover:bg-blue-100"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
        <span className="ml-4 text-gray-600">
          Hiển thị trang {currentPage} trên {totalPages} trang
        </span>
      </div>
    </div>
  );
};

export default News;
