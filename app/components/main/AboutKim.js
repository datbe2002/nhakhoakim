import Link from "next/link";
import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const AboutKim = () => {
  return (
    <div className="flex flex-col py-10 gap-4">
      <HeroSection />
      {/* h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] */}
      <div className="flex flex-row py-10 gap-4 mt-[30vh] sm:mt-[40vh] md:mt-[50vh] lg:mt-[60vh]">
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Về Nha Khoa Kim</h1>
          <p>
            Là chuỗi Phòng khám Nha khoa uy tín Việt Nam với đội ngũ Bác sĩ điều
            trị giỏi; Chăm sóc khách tận tâm và Kết quả nụ cười đẹp. Nha Khoa
            Kim với 235 Bác sĩ, 251 Phụ tá tại 32 Phòng khám phủ khắp TpHCM, Hà
            Nội, Biên Hoà, Bình Dương, Vũng Tàu, Tiền Giang, sẵn sàng phục vụ
            khách hàng nhanh chóng, thuận tiện.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-row items-center">
              <FaRegHandPointRight className="text-red-500 mr-1" />
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                Được Quỹ Temasek thuộc sở hữu Chính phủ Singapore đầu tư.
              </Link>
            </div>

            <div className="flex flex-row items-center">
              <FaRegHandPointRight className="text-red-500 mr-1" />
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                Đối tác toàn cầu của đại học Harvard.
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <FaRegHandPointRight className="text-red-500 mr-1" />
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                100% đội ngũ Bác sĩ có chứng chỉ hành nghề.
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <FaRegHandPointRight className="text-red-500 mr-1" />
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                Phòng tiệt khuẩn một chiều tuân thủ quy định của Sở Y tế.
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <FaRegHandPointRight className="text-red-500 mr-1" />
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                4 khác biệt tạo nên uy tín chất lượng của Nha khoa Kim.
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default AboutKim;
