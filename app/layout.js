import { Geist, Geist_Mono, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import SubFooter2 from "./components/SubFooter2";
import HeroSection from "./components/main/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata = {
  title: "Nha Khoa Kim - Chăm Sóc Nụ Cười Của Bạn",
  description: "Phòng khám nha khoa chất lượng cao tại Thành phố Hồ Chí Minh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="w-full relative">
          <div className="max-w-[1140px] mx-auto">{children}</div>
        </main>
        <SubFooter />
        <SubFooter2 />
        <Footer />
      </body>
    </html>
  );
}
