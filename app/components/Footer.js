'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    hcm: true,
    hanoi: true,
    dongnai: true,
    tiengiang: true,
    binhduong: true,
    baria: true
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const branches = {
    hcm: [
      { name: "150 – 152 Hai Bà Trưng, P.Đa Kao, Q.1", url: "/chi-nhanh/150-152-hai-ba-trung-p-da-kao-q1" },
      { name: "A43 – 187A Cống Quỳnh, P.Nguyễn Cư Trinh, Q.1", url: "/chi-nhanh/a43-187a-cong-quynh-p-nguyen-cu-trinh-quan-1" },
      { name: "345 Lê Văn Sỹ, P.12, Q.3", url: "/nha-khoa-kim-le-van-sy" },
      { name: "500 – 502 Nguyễn Thị Minh Khai, P.2, Q.3", url: "/chi-nhanh/500-502-nguyen-thi-minh-khai-phuong-2-quan-3" },
      { name: "43 – 45 An Dương Vương, P.7, Q.5", url: "/nha-khoa-kim-an-duong-vuong" },
      { name: "348 – 350 Nguyễn Trãi, P.7, Q.5", url: "/chi-nhanh/348-350-nguyen-trai-phuong-8-quan-5" },
      { name: "410 – 410A – 410B Hậu Giang, P.12, Q.6", url: "/chi-nhanh/410-410a-410b-hau-giang-p-12-quan-6-tp-hcm" },
      { name: "493 Nguyễn Thị Thập, P.Tân Phong, Q.7", url: "/nha-khoa-kim-nguyen-thi-thap" },
      { name: "60C Nguyễn Thị Thập, P.Bình Thuận, Q.7", url: "/chi-nhanh/60c-nguyen-thi-thap-p-binh-thuan-quan-7-tp-hcm" },
      { name: "1401 – 1403 Khu phố Mỹ Toàn 2-H4 Nguyễn Văn Linh, Q.7", url: "/chi-nhanh/1401-1403-khu-pho-my-toan-2-h4-nguyen-van-linh-quan-7" },
      { name: "829 – 829A Tạ Quang Bửu, P.5, Q.8", url: "/chi-nhanh/829-ta-quang-buu-phuong-5-quan-8" },
      { name: "396 – 398 Đường 3 Tháng 2, P.12, Q.10", url: "/nha-khoa-kim-396-duong-3-thang-2" },
      { name: "335B – 337 Lạc Long Quân, P.5, Q.11", url: "/335b-337-lac-long-quan-phuong-5-quan-11" },
      { name: "369A Nguyễn Ảnh Thủ, P.Trung Mỹ Tây, Q.12", url: "/396a-nguyen-anh-thu-quan-12-tp-hcm" },
      { name: "02 Nguyễn Oanh, P.1, Q.Gò Vấp", url: "/nha-khoa-kim-nguyen-oanh" },
      { name: "366 A25 – A26 Phan Văn Trị, P.5, Q.Gò Vấp", url: "/nha-khoa-kim-phan-van-tri" },
      { name: "270 Quang Trung, P.10, Q.Gò Vấp", url: "/nha-khoa-kim-quang-trung" },
      { name: "33 – 35 Lê Văn Duyệt, P.1, Q.Bình Thạnh", url: "/nha-khoa-kim-le-van-duyet" },
      { name: "240 – 242 Xô Viết Nghệ Tĩnh, P.19, Q.Bình Thạnh", url: "/chi-nhanh/240-242-xo-viet-nghe-tinh-p-21-q-binh-thanh-tp-hcm" },
      { name: "304 Cộng Hòa, P.13, Q.Tân Bình", url: "/nha-khoa-kim-cong-hoa" },
      { name: "60 – 62 Lê Văn Việt, Hiệp Phú, TP.Thủ Đức", url: "/chi-nhanh/62-le-van-viet-hiep-phu-thanh-pho-thu-duc-tp-hcm" },
      { name: "46A Võ Văn Ngân, P.Trường Thọ, TP.Thủ Đức", url: "/46a-vo-van-ngan-p-truong-tho-quan-thu-duc-tp-hcm" },
      { name: "03 Trần Não, P. An Khánh, Q2, TP.Thủ Đức", url: "/chi-nhanh/nha-khoa-kim-tran-nao-quan-2" },
      { name: "357 Phan Xích Long, P.1, Q.Phú Nhuận", url: "/nha-khoa-kim-quan-phu-nhuan-357-phan-xich-long" },
      { name: "586A Lũy Bán Bích, P.Hoà Thạnh, Q.Tân Phú", url: "/nha-khoa-kim-quan-tan-phu" }
    ],
    hanoi: [
      { name: "224 Xã Đàn, P.Phương Liên - Trung Tự, Q.Đống Đa", url: "/nha-khoa-kim-xa-dan" }
    ],
    dongnai: [
      { name: "264A Phạm Văn Thuận, P.Thống Nhất, TP.Biên Hòa", url: "/chi-nhanh/264a-pham-van-thuan-p-thong-nhat-tp-bien-hoa-dong-nai" },
      { name: "93A Nguyễn Ái Quốc, P.Tân Phong, TP.Biên Hòa", url: "/nha-khoa-kim-nguyen-ai-quoc" }
    ],
    tiengiang: [
      { name: "304A Lý Thường Kiệt, P.5, TP.Mỹ Tho", url: "/nha-khoa-kim-ly-thuong-kiet-my-tho" }
    ],
    binhduong: [
      { name: "1 Nguyễn Văn Tiết, P.Hiệp Thành, TP. Thủ Dầu Một", url: "/nha-khoa-kim-nguyen-van-tiet-binh-duong" },
      { name: "191 Phú Lợi, P.Phú Lợi, TP. Thủ Dầu Một", url: "/Nha-khoa-kim-Phu-Loi" }
    ],
    baria: [
      { name: "101 Nam Kỳ Khởi Nghĩa, P.3, TP.Vũng Tàu", url: "/chi-nhanh/101-nam-ky-khoi-nghia-p-3-tp-vung-tau-ba-ria-vung-tau" }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Quality Certifications Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-bold text-gray-900 mb-6">
            Nha Khoa Tiêu Chuẩn Chất lượng
          </h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap">
            <Link href="/tieu-chuan-chat-luong" className="hover:opacity-80">
              <Image 
                src="/images/mainpage/ChungNhan-01.png" 
                alt="Chứng nhận thương hiệu dịch vụ" 
                width={100} 
                height={80}
                className="object-contain"
              />
            </Link>
            <Link href="/tieu-chuan-chat-luong" className="hover:opacity-80">
              <Image 
                src="/images/mainpage/NKK-GCR.png" 
                alt="Chứng nhận GRC" 
                width={100} 
                height={80}
                className="object-contain"
              />
            </Link>
            <Link href="/tieu-chuan-chat-luong" className="hover:opacity-80">
              <Image 
                src="/images/mainpage/ChungNhan-02.png" 
                alt="Chứng nhận BSI" 
                width={100} 
                height={80}
                className="object-contain"
              />
            </Link>
            <Link href="/tieu-chuan-chat-luong" className="hover:opacity-80">
              <Image 
                src="/images/mainpage/ChungNhan-03.png" 
                alt="Chứng nhận cúp top 10" 
                width={100} 
                height={80}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Branch Locations */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6">Hệ thống Nha Khoa Kim</h3>
              
              <div className="space-y-4">
                {/* TP.HCM */}
                <div>
                  <button
                    onClick={() => toggleSection('hcm')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>TP.Hồ Chí Minh</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.hcm ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.hcm && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.hcm.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hà Nội */}
                <div>
                  <button
                    onClick={() => toggleSection('hanoi')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>Hà Nội</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.hanoi ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.hanoi && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.hanoi.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Đồng Nai */}
                <div>
                  <button
                    onClick={() => toggleSection('dongnai')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>Đồng Nai</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.dongnai ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.dongnai && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.dongnai.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tiền Giang */}
                <div>
                  <button
                    onClick={() => toggleSection('tiengiang')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>Tiền Giang</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.tiengiang ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.tiengiang && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.tiengiang.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bình Dương */}
                <div>
                  <button
                    onClick={() => toggleSection('binhduong')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>Bình Dương</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.binhduong ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.binhduong && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.binhduong.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bà Rịa - Vũng Tàu */}
                <div>
                  <button
                    onClick={() => toggleSection('baria')}
                    className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <span>Bà Rịa - Vũng Tàu</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${openSections.baria ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.baria && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4">
                      <ul className="space-y-2">
                        {branches.baria.map((branch, index) => (
                          <li key={index}>
                            <Link 
                              href={branch.url} 
                              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                            >
                              {branch.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact & Links */}
            <div>
              <div className="space-y-8">
                {/* Contact Info */}
                <div>
                  <ul className="space-y-4">
                    <li>
                      <Link href="tel:19006899" className="flex items-center text-yellow-400 hover:text-yellow-300 font-bold">
                        <span className="mr-2">Hotline:</span>
                        <strong>1900 6899</strong>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+842873086899" className="flex items-center text-yellow-400 hover:text-yellow-300 font-bold">
                        <span className="mr-2">Foreigners</span>
                        <strong>+842873086899</strong>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:cskh@kimdental.vn" className="flex items-center text-yellow-400 hover:text-yellow-300">
                        <span className="mr-2">Email</span>
                        <strong>cskh@kimdental.vn</strong>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="space-y-4">
                  <Link href="http://online.gov.vn/Home/WebDetails/41072" target="_blank" className="block">
                    <Image 
                      src="/images/mainpage/tb-bo-cong-thuong.png" 
                      alt="Thông báo bộ công thương" 
                      width={120} 
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/nhakhoakimcom-1647617604" target="_blank" className="block">
                    <Image 
                      src="/images/mainpage/NCA.png" 
                      alt="Chung nhan Tin Nhiem Mang" 
                      width={120} 
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="https://www.dmca.com/Protection/Status.aspx?ID=46ac375f-a83a-4baf-b85f-12c801d1e791" target="_blank" className="block">
                    <Image 
                      src="/images/mainpage/DMCA.png" 
                      alt="Content Protection by DMCA.com" 
                      width={120} 
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* GCR Badge */}
                <div>
                  <Link href="/nha-khoa-kim-thang-hang-top-50-nha-khoa-tot-nhat-the-gioi-tren-bang-xep-hang-gcr.html" className="block">
                    <Image 
                      src="/images/mainpage/NKK-GCR.png" 
                      alt="GCR" 
                      width={120} 
                      height={60}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
            <div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tra-gop-0-lai-suat-va-thanh-toan-linh-hoat-tai-nha-khoa-kim.html" className="text-gray-300 hover:text-blue-400">Trả góp 0% - Thanh toán linh hoạt</Link></li>
                <li><Link href="/hop-tac-chien-luoc" className="text-gray-300 hover:text-blue-400">Hợp tác chiến lược</Link></li>
                <li><Link href="/bao-hiem-lien-ket" className="text-gray-300 hover:text-blue-400">Bảo hiểm liên kết</Link></li>
                <li><Link href="/dia-chi-nha-khoa" className="text-gray-300 hover:text-blue-400">Hệ thống phòng khám</Link></li>
                <li><Link href="https://vieclam.nhakhoakim.com" className="text-gray-300 hover:text-blue-400">Tuyển dụng</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/nha-may-san-xuat-rang-cua-he-thong-nha-khoa-kim.html" className="text-gray-300 hover:text-blue-400">Nhà máy răng sứ</Link></li>
                <li><Link href="/tieu-chuan-chat-luong" className="text-gray-300 hover:text-blue-400">Tiêu chuẩn chất lượng</Link></li>
                <li><Link href="/nieng-rang-tham-my-cho-nu-cuoi-dep-hoan-hao.html" className="text-gray-300 hover:text-blue-400">Niềng răng thẩm mỹ</Link></li>
                <li><Link href="/trong-rang-implant-nhung-dieu-ban-can-biet.html" className="text-gray-300 hover:text-blue-400">Trồng răng Implant</Link></li>
                <li><Link href="/boc-rang-su-tham-my.html" className="text-gray-300 hover:text-blue-400">Răng sứ thẩm mỹ</Link></li>
              </ul>
            </div>
            <div>
              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-300 mb-4">Kết nối với chúng tôi</p>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/NHAKHOAKIM" target="_blank" className="hover:opacity-80">
                    <Image src="/images/social/facebook.png" alt="Facebook" width={32} height={32} />
                  </Link>
                  <Link href="https://zalo.me/401329610049130347" target="_blank" className="hover:opacity-80">
                    <Image src="/images/social/zalo.png" alt="Zalo" width={32} height={32} />
                  </Link>
                  <Link href="https://www.youtube.com/c/NHAKHOAKIM" target="_blank" className="hover:opacity-80">
                    <Image src="/images/social/youtube.png" alt="Youtube" width={32} height={32} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Links */}
          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <div className="flex justify-center space-x-4 text-sm mb-4">
              <Link href="/chinh-sach-bao-mat" className="text-gray-300 hover:text-blue-400">Chính sách bảo mật</Link>
              <span className="text-gray-500">-</span>
              <Link href="/csbh.html" className="text-gray-300 hover:text-blue-400">Chính sách bảo hành</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-400">
              © 2019. Công ty TNHH Nha Khoa Kim. GPĐKKD: 0313956153 do sở KH & ĐT TP.HCM cấp ngày 09/08/2016 . 
              Địa chỉ: 150-152 Hai Bà Trưng, P.Đa Kao, Q1, Tp. Hồ Chí Minh. Điện thoại: 19006899. 
              Email: cskh@kimdental.vn. Chịu trách nhiệm nội dung: Ban truyền thông Công ty TNHH Nha Khoa Kim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
