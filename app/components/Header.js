import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 h-[72px]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-96">
        <nav className="flex items-center justify-between h-full gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-15 h-15 relative">
              <Image
                src="/nhakhoakimlogo.svg"
                alt="Nha Khoa Kim"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="font-bold text-2xl text-[#005f9d]">
              Nha Khoa Kim
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/gioi-thieu"
                className="text-gray-700 hover:text-blue-600 py-6"
              >
                Giới thiệu
              </Link>
            </div>

            <div className="relative group">
              <Link
                href="/dich-vu"
                className="text-gray-700 hover:text-blue-600 py-6"
              >
                Dịch vụ
              </Link>
            </div>

            <Link
              href="/bang-gia"
              className="text-gray-700 hover:text-blue-600 py-6"
            >
              Bảng giá
            </Link>

            <Link
              href="/tin-tuc"
              className="text-gray-700 hover:text-blue-600 py-6"
            >
              Tin tức
            </Link>

            <div className="relative group">
              <Link
                href="/tri-an"
                className="text-gray-700 hover:text-blue-600 py-6"
              >
                Tri ân
              </Link>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Book Appointment Button */}
            <Link
              href="/dat-lich-hen"
              className="bg-red-600 text-white px-4 h-[40px] flex items-center rounded transition-all hover:-translate-y-[2px]"
            >
              ĐẶT HẸN
            </Link>

            {/* Phone Number */}
            <Link
              href="tel:19006899"
              className="flex items-center font-semibold bg-[#005f9d] text-white px-4 h-[40px] rounded transition-all hover:-translate-y-[2px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              1900 6899
            </Link>

            {/* Language Selector */}
            <div className="flex items-center">
              <Link
                href="/en"
                className="flex gap-2 items-center text-sm bg-[#005f9d] text-white px-4 h-[40px] rounded transition-all hover:-translate-y-[2px]"
              >
                <Image src="/UKFlag.png" alt="English" width={20} height={20} />
                <span>EN</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" aria-label="Menu">
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
      </div>
    </header>
  );
};

export default Header;
