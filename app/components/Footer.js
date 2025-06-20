import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const column1 = [
    { title: "Trả góp 0% - Thanh toán linh hoạt", href: "/tra-gop" },
    { title: "Hợp tác chiến lược", href: "/hop-tac" },
    { title: "Bảo hiểm liên kết", href: "/bao-hiem" },
    { title: "Hệ thống phòng khám", href: "/he-thong" },
    { title: "Tuyển dụng", href: "/tuyen-dung" },
  ];

  const column2 = [
    { title: "Nhà máy răng sứ", href: "/nha-may-rang-su" },
    { title: "Tiêu chuẩn chất lượng", href: "/tieu-chuan" },
    { title: "Niềng răng thẩm mỹ", href: "/nieng-rang" },
    { title: "Trồng răng Implant", href: "/trong-rang" },
    { title: "Răng sứ thẩm mỹ", href: "/rang-su" },
  ];

  return (
    <footer className="bg-[#005f9d] text-white">
      <div className="max-w-[1140px] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              {column1.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              {column2.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Links */}
          <div>
            <h3 className="font-medium mb-4">Kết nối với chúng tôi</h3>
            <div className="flex gap-4 mb-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/zalo.png"
                  alt="Zalo"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/youtube.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="space-y-2 flex gap-2 flex-row">
              <Link
                href="/#"
                className="block hover:text-gray-200 transition-colors"
              >
                Chính sách bảo mật
              </Link>
              {"|"}
              <Link
                href="/#"
                className="block hover:text-gray-200 transition-colors"
              >
                Chính sách bảo hành
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Info */}
      <div className="text-[12px] text-center bg-[#30374b] py-2">
        <p className="text-gray-300">
          © 2019. Công ty TNHH Nha Khoa Kim. GPĐKKD: 0313956153 do sở KH & ĐT
          TP.HCM cấp ngày 09/08/2016 . Địa chỉ: 150-152 Hai Bà Trưng, P.Đa Kao,
          Q1, Tp. Hồ Chí Minh. Điện thoại: 19006899. Email: cskh@kimdental.vn.
          Chịu trách nhiệm nội dung: Ban truyền thông Công ty TNHH Nha Khoa Kim.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
