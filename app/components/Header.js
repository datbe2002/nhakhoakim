'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 h-[72px] bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <nav className="flex items-center justify-between h-full gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-40 h-12 relative">
              <Image
                src="/nhakhoakimlogo.svg"
                alt="Nha Khoa Kim Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <Link
                href="/gioi-thieu-nha-khoa-kim.html"
                className="text-gray-700 hover:text-blue-600 py-6 text-sm font-medium uppercase tracking-wide"
              >
                Giới thiệu 
              </Link>
            </div>

            <div className="relative group">
              <Link
                href="/dich-vu"
                className="flex items-center text-gray-700 hover:text-blue-600 py-6 text-sm font-medium uppercase tracking-wide"
              >
                Dịch vụ 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            <Link
              href="/bang-gia-nha-khoa-nieng-rang-rang-su-implant.html"
              className="text-gray-700 hover:text-blue-600 py-6 text-sm font-medium uppercase tracking-wide"
            >
              Bảng giá
            </Link>

            <div className="relative group">
              <Link
                href="/tin-tuc"
                className="flex items-center text-gray-700 hover:text-blue-600 py-6 text-sm font-medium uppercase tracking-wide"
              >
                Tin tức 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              <Link
                href="/chuong-trinh-uu-dai"
                className="flex items-center text-gray-700 hover:text-blue-600 py-6 text-sm font-medium uppercase tracking-wide"
              >
                Tri ân 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Book Appointment Button */}
            <Link
              href="/dat-lich-hen"
              className="bg-blue-600 text-white px-6 h-[40px] flex items-center rounded-full hover:bg-blue-700 transition-colors text-sm font-medium uppercase tracking-wide"
            >
              ✓ ĐẶT HẸN
            </Link>

            {/* Phone Number */}
            <Link
              href="tel:19006899"
              className="flex items-center font-bold text-red-600 hover:text-red-700 px-2 h-[40px] text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 011.26-.12 11.17 11.17 0 003.78.84 1 1 0 01.85.98v3.37a1 1 0 01-.85 1A19 19 0 012 5a1 1 0 011-.85h3.37a1 1 0 01.98.85 11.17 11.17 0 00.84 3.78 1 1 0 01-.12 1.26z"/>
              </svg>
              1900 6899
            </Link>

            {/* Language Selector */}
            <Link
              href="https://kimdental.vn"
              className="flex items-center text-gray-700 hover:text-blue-600 px-2 h-[40px] text-sm font-medium"
            >
              <Image src="/UKFlag.png" alt="English" width={20} height={15} className="mr-1" />
              <span>EN</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/gioi-thieu-nha-khoa-kim.html" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Giới thiệu
              </Link>
              <Link href="/dich-vu" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Dịch vụ
              </Link>
              <Link href="/bang-gia-nha-khoa-nieng-rang-rang-su-implant.html" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Bảng giá
              </Link>
              <Link href="/tin-tuc" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Tin tức
              </Link>
              <Link href="/chuong-trinh-uu-dai" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Tri ân
              </Link>
              <Link href="/dat-lich-hen" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium text-center mx-4">
                ĐẶT HẸN
              </Link>
              <Link href="tel:19006899" className="text-red-600 hover:text-red-700 font-bold text-center px-4 py-2">
                1900 6899
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
