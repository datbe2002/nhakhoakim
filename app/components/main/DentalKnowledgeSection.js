import React from "react";
import HeaderTilte from "./HeaderTilte";

const DentalKnowledgeSection = () => {
  const dentalKnowledge = [
    {
      id: 1,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/anh-thumb-ham-giu-khoang.jpg",
      title: "Hàm giữ khoảng là gì? Công dụng và các loại phổ biến",
    },
    {
      id: 2,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/anh-thumb-meo-chua-dau-rang-sau.jpg",
      title: "9 Mẹo chữa đau răng sâu cấp tốc, hiệu quả tại nhà",
    },
    {
      id: 3,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/anh-thumb-tram-rang-tam-thoi.jpg",
      title: "Trảm răng tạm thời là gì? Cách trảm răng tạm thời hiệu quả",
    },
    {
      id: 4,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/Hoi-tho-co-mui.jpg",
      title: "Vì sao hơi thở có mùi dù đã vệ sinh răng miệng sạch sẽ?",
    },
    {
      id: 5,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/Cao-rang-den.jpg",
      title: "Cao răng đèn là gì? Cách điều trị và phòng ngừa",
    },
    {
      id: 6,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2025/06/anh-thumb-cac-loai-rang.jpg",
      title: "Hướng dẫn cách đếm và đọc tên các loại răng",
    },
  ];
  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <HeaderTilte title="KIẾN THỨC NHA KHOA" />
      <div className="flex mt-10 bg-white rounded-sm overflow-hidden shadow-lg w-full">
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full">
          {dentalKnowledge.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <div className="">
                <img src={item.image} alt={item.title} />
              </div>

              <h3 className="mb-2 text-xl hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mt-10">
        <div className="text-center text-white py-2 px-4 bg-[#005f9d] rounded-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          Tìm hiểu thêm
        </div>
      </div>
    </div>
  );
};

export default DentalKnowledgeSection;
