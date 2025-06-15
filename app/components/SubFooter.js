import React from "react";
import Image from "next/image";

const SubFooter = () => {
  const certificates = [
    {
      src: "/images/mainpage/ChungNhan-01.png",
      alt: "Chứng nhận thương hiệu danh tiếng quốc gia",
    },
    {
      src: "/images/mainpage/ChungNhan-02.png",
      alt: "Chứng nhận chất lượng",
    },
    {
      src: "/images/mainpage/ChungNhan-03.png",
      alt: "Kim Dental International Accredited Clinic",
    },
    {
      src: "/images/mainpage/ChungNhan-06.png",
      alt: "BSI Certificate of Registration",
    },
    {
      src: "/images/mainpage/ChungNhan-08.png",
      alt: "BSI Certificate of Registration",
    },
    {
      src: "/images/mainpage/chungnhanHarvard.png",
      alt: "BSI Certificate of Registration",
    },
  ];

  // Duplicate certificates to create seamless loop
  const allCertificates = [...certificates, ...certificates];

  return (
    <div className="w-full">
      <h2 className="text-center text-white text-xl font-bold bg-[#005f9d] p-2 w-full">
        NHA KHOA TIÊU CHUẨN CHẤT LƯỢNG
      </h2>
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-96 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <div className="py-4 sm:py-6 md:py-8 overflow-hidden w-full">
            <div className="animate-carousel flex gap-2 sm:gap-3 md:gap-4">
              {allCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex-none w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 sm:p-3 md:p-4"
                >
                  <div className="relative w-full">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={280}
                      height={200}
                      style={{ objectFit: "contain" }}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
