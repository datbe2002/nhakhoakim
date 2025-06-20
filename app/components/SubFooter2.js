import React from "react";
import Image from "next/image";

const SubFooter2 = () => {
  const locations = {
    "TP.Hồ Chí Minh": [
      "150 – 152 Hai Bà Trưng, P.Đa Kao, Q.1",
      "A43 – 187A Cống Quỳnh, P.Nguyễn Cư Trinh, Q.1",
      "345 Lê Văn Sỹ, P.12, Q.3",
      "500 – 502 Nguyễn Thị Minh Khai, P.2, Q.3",
      "43 – 45 An Dương Vương, P.7, Q.5",
      "348 – 350 Nguyễn Trãi, P.7, Q.5",
      "410 – 410A – 410B Hậu Giang, P.12, Q.6",
      "492 Nguyễn Thị Thập, P.Tân Phong, Q.7",
      "60C Nguyễn Thị Thập, P.Bình Thuận, Q.7",
      "1401 – 1403 Khu phố Mỹ Toàn 2-H4 Nguyễn Văn Linh, Q.7",
      "829 – 829A Tạ Quang Bửu, P.5, Q.8",
      "396 – 398 Đường 3 Tháng 2, P.12, Q.10",
      "335B – 337 Lạc Long Quân, P.5, Q.11",
      "369A Nguyễn Ảnh Thủ, P.Trung Mỹ Tây, Q.12",
      "02 Nguyễn Oanh, P.1, Q.Gò Vấp",
      "366 A25 – A26 Phan Văn Trị, P.5, Q.Gò Vấp",
      "270 Quang Trung, P.10, Q.Gò Vấp",
      "33 – 35 Lê Văn Duyệt, P.1, Q.Bình Thạnh",
      "240 – 242 Xô Viết Nghệ Tĩnh, P.19, Q.Bình Thạnh",
      "304 Cộng Hòa, P.13, Q.Tân Bình",
      "60 – 62 Lê Văn Việt, Hiệp Phú, TP.Thủ Đức",
      "46A Võ Văn Ngân, P.Trường Thọ, TP.Thủ Đức",
      "03 Trần Não, P. An Khánh, Q2, TP.Thủ Đức",
      "357 Phan Xích Long, P.1, Q.Phú Nhuận",
      "586A Lũy Bán Bích, P.Hòa Thạnh, Q.Tân Phú",
    ],
    "Hà Nội": ["224 Xã Đàn, P.Phương Liên - Trung Tự, Q.Đống Đa"],
    "Đồng Nai": [
      "264A Phạm Văn Thuận, P.Thống Nhất, TP.Biên Hòa",
      "93A Nguyễn Ái Quốc, P.Tân Phong, TP.Biên Hòa",
    ],
    "Tiền Giang": ["304A Lý Thường Kiệt, P.5, TP.Mỹ Tho"],
    "Bình Dương": [
      "1 Nguyễn Văn Tiết, P.Hiệp Thành, TP. Thủ Dầu Một",
      "191 Phú Lợi, P.Phú Lợi, TP. Thủ Dầu Một",
    ],
    "Bà Rịa - Vũng Tàu": ["101 Nam Kỳ Khởi Nghĩa, P.3, TP.Vũng Tàu"],
  };

  const contactInfo = {
    hotline: "1900 6899",
    foreigners: "+84287308899",
    email: "cskh@kimdental.vn",
  };

  return (
    <div className="py-8 bg-[#f8f9fa]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[#f26522] text-2xl font-medium mb-8">
          Hệ thống Nha Khoa Kim
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 flex justify-center items-center">
            {Object.entries(locations).map(
              ([city, addresses]) =>
                city === "TP.Hồ Chí Minh" && (
                  <div key={city} className="space-y-2">
                    <h3 className="text-[#005f9d] font-medium flex items-center gap-2">
                      <Image
                        src="/icon-dc.svg"
                        alt="Location"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      {city}
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-600 ml-6">
                      {addresses.map((address, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span>{address}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>

          <div className="space-y-4 justify-center items-center">
            {Object.entries(locations).map(
              ([city, addresses]) =>
                city !== "TP.Hồ Chí Minh" && (
                  <div key={city} className="space-y-2">
                    <h3 className="text-[#005f9d] font-medium flex items-center gap-2">
                      <Image
                        src="/icon-dc.svg"
                        alt="Location"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      {city}
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-600 ml-6">
                      {addresses.map((address, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span>{address}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <div>
              <p className="text-gray-600">
                Hotline:{" "}
                <span className="text-[#30374b] font-medium">
                  {contactInfo.hotline}
                </span>
              </p>
              <p className="text-gray-600">
                Foreigners:{" "}
                <span className="text-[#30374b] font-medium">
                  {contactInfo.foreigners}
                </span>
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <span className="text-[#30374b] font-medium">
                  {contactInfo.email}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src="/images/mainpage/tb-bo-cong-thuong.png"
                alt="Bộ Công Thương"
                width={200}
                height={57}
              />
              <Image
                src="/images/mainpage/NCA.png"
                alt="NCA"
                width={200}
                height={57}
              />
              <Image
                src="/images/mainpage/DMCA.png"
                alt="SSL"
                width={180}
                height={57}
              />
              <Image
                src="/images/mainpage/NKK-GCR.png"
                alt="DMCA"
                width={200}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter2;
