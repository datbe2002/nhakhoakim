import React from "react";
import HeaderTilte from "./HeaderTilte";
import Link from "next/link";

const ExclusiveTechnologySection = () => {
  const technology = [
    {
      id: 1,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2023/07/Implant-555x312-1.jpg",
      title: "Tri ân 10% dịch vụ Răng sứ thẩm mỹ",
    },
    {
      id: 2,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2023/07/RangSu-555x312-1.jpg",
      title: "Tri ân 10% dịch vụ Răng sứ thẩm mỹ",
    },
    {
      id: 3,
      image:
        "https://nhakhoakim.com/wp-content/uploads/2023/07/NiengRang-555x312-1.jpg",
      title: "Tri ân 10% dịch vụ Răng sứ thẩm mỹ",
    },
  ];
  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      <HeaderTilte title="CÔNG NGHỆ ĐỘC QUYỀN TẠI NHA KHOA KIM" />
      <div className="flex mt-10 bg-white rounded-sm overflow-hidden shadow-lg w-full">
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full">
          {technology.map((item) => (
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
    </div>
  );
};

export default ExclusiveTechnologySection;
