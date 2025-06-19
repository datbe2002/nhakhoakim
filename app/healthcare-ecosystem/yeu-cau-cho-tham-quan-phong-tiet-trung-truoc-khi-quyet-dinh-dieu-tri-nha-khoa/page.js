import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "⚠️ Cảnh báo nhiễm khuẩn chéo: Đừng vệ sinh răng khi chưa kiểm tra khu vô trùng - Nha Khoa KIM",
  description:
    "Tại sao khách hàng phải tham quan phòng tiệt khuẩn dụng cụ và hỏi quy trình khử khuẩn trước khi điều trị nha khoa",
};

export default function ArticlePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1 max-w-none lg:max-w-[800px] article-main">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              ⚠️ Cảnh báo nhiễm khuẩn chéo: Đừng vệ sinh răng khi chưa kiểm tra
              khu vô trùng
            </h1>
            <p className="text-gray-600 mb-6">Nội Dung Chính</p>

            <div className="flex gap-4 mb-6">
              <Image
                src="/images/mainpage/banner/BannerWeb-PhongTietTrung-PC-01-scaled.png"
                alt="Phòng tiệt trùng"
                width={200}
                height={120}
                className="rounded-lg object-cover"
              />
              <Image
                src="/images/mainpage/banner/trong-rang-implant-tri-an-10-thang-6-desktop-scaled.png"
                alt="Trồng răng implant"
                width={200}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>
          </header>

          {/* Table of Contents */}
          <details className="mb-8 p-4 border border-gray-200 rounded-lg">
            <summary className="font-semibold cursor-pointer text-blue-600 hover:text-blue-800">
              Mục lục
            </summary>
            <nav className="mt-4 space-y-2">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#vo-trung-nha-khoa-la-gi"
                    className="text-blue-600 hover:underline"
                  >
                    Vô trùng nha khoa là gì?
                  </a>
                </li>
                <li>
                  <a
                    href="#vo-khuan-dung-cu-nha-khoa-dung-chuan"
                    className="text-blue-600 hover:underline"
                  >
                    Vô khuẩn dụng cụ nha khoa đúng chuẩn?
                  </a>
                </li>
                <li>
                  <a
                    href="#canh-bao-nhiem-khuan-cheo"
                    className="text-blue-600 hover:underline"
                  >
                    ⚠️ Cảnh báo nhiễm khuẩn chéo
                  </a>
                </li>
                <li>
                  <a
                    href="#thuc-trang-dang-lo-ngai"
                    className="text-blue-600 hover:underline"
                  >
                    ❗Thực trạng đáng lo ngại: Vô trùng bị xem nhẹ tại nhiều
                    phòng khám
                  </a>
                </li>
                <li>
                  <a
                    href="#quy-trinh-vo-trung"
                    className="text-blue-600 hover:underline"
                  >
                    Quy trình vô trùng Nha khoa Kim đã được chuẩn hóa và dán tại
                    phòng vô trùng
                  </a>
                </li>
                <li>
                  <a
                    href="#tai-sao-khach-hang-phai-tham-quan"
                    className="text-blue-600 hover:underline"
                  >
                    Tại sao khách hàng phải tham quan phòng tiệt khuẩn dụng cụ
                    và hỏi quy trình khử khuẩn
                  </a>
                </li>
                <li>
                  <a
                    href="#tay-khoan-kem-cat"
                    className="text-blue-600 hover:underline"
                  >
                    Tay khoan, kèm cắt kẽm thừa chỉnh nha – niềng răng cũng được
                    hấp chứ không phải sát trùng sơ sài
                  </a>
                </li>
              </ul>
            </nav>
          </details>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section id="vo-trung-nha-khoa-la-gi" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  <Link
                    href="https://nhakhoakim.com/quy-trinh-tiet-trung-tai-he-thong-nha-khoa-kim-nhu-the-nao.html"
                    className="text-blue-600 hover:underline"
                  >
                    Vô trùng nha khoa
                  </Link>{" "}
                  là gì?
                </strong>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Khi nói về tiệt trùng trong nha khoa, nếu chúng ta chỉ quan tâm
                có một cái lò hấp, một tủ tia cực tím, một máy rung siêu âm, một
                phòng riêng thì thật sự là thiếu sót rất nhiều. Tiệt khuẩn nha
                khoa không phải trang bị máy móc, quy trình chuẩn mà là MỘT CAM
                KẾT DUY TRÌ XUYÊN SUỐT QUY TRÌNH TIỆT KHUẨN CHUẨN. Điều này cần
                nỗ lực của cả một tập thể và sức mạnh của hy sinh mới có thể làm
                được. Phòng tiệt khuẩn nha khoa trung tâm 1 chiều Nha Khoa Kim
                đã và đang cố gắng làm điều đó tốt hơn.
              </p>
            </section>

            <section id="vo-khuan-dung-cu-nha-khoa-dung-chuan" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Vô khuẩn dụng cụ nha khoa đúng chuẩn?</strong>
              </h2>
              <div className="mb-6">
                <Image
                  src="/images/mainpage/banner/BannerWeb-PhongTietTrung-PC-01-scaled.png"
                  alt="Hệ thống làm sạch trước khi cắm ghép Implant"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Hệ thống làm sạch trước khi cắm ghép Implant cho trường hợp
                  cần kiểm soát nhiễm khuẩn mức độ cao tại Nha Khoa Kim
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "Chính vì mỗi dịch vụ lấy cao răng hay thay chun chỉnh nha…điều
                cần vô trùng đúng cách, nhằm đảm bảo an toàn sức khoẻ cho khách
                hàng, mỗi phòng khám thuộc hệ thống Nha Khoa Kim cam kết đầu tư
                phòng tiệt khuẩn vận hành theo tiêu chuẩn một chiều 8 bước, 2
                dụng dịch làm sạch và khử khuẩn, 4 test kiểm định khi hấp, gồm
                các khu: Khu bẩn, Khu sạch và Khu tiệt khuẩn, Khu lưu trữ với
                đầy đủ máy móc hiện đại và nhân sự chuyên trách xuyên suốt cho
                khu vực này."
              </p>

              <div className="mb-6">
                <Image
                  src="/images/mainpage/different/1721637718FjxLDpBNXlhqcy8.png"
                  alt="Phòng thanh trùng nha khoa"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Phòng thanh trùng nha khoa một chiều đạt chuẩn quốc tế, với 8
                  bước kiểm soát nghiêm ngặt
                </p>
              </div>
            </section>

            <section id="canh-bao-nhiem-khuan-cheo" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ⚠️ Cảnh báo nhiễm khuẩn chéo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hầu hết các kỹ thuật nha khoa – từ lấy cao răng, điều trị tủy,
                nhổ răng, phục hình sứ… đều là các thủ thuật có nguy cơ xâm lấn
                mô mềm, chảy máu, tiếp xúc trực tiếp với máu và dịch cơ thể. Nếu
                không được thực hiện trong điều kiện vô trùng nghiêm ngặt, bạn
                sẽ có nguy cơ nhiễm khuẩn chéo với các bệnh lý nguy hiểm như
                viêm gan B, C, HIV…
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Đặc biệt, nhiễm khuẩn chéo thường không biểu hiện ngay lập tức,
                chỉ phát hiện tình cờ khi kiểm tra sức khỏe định kỳ sau nhiều
                năm. Lúc ấy,{" "}
                <strong>
                  rất khó để xác định nguyên nhân có phải là do lần điều trị nha
                  khoa từ rất lâu rồi hay không và gần như không thể xử lý hậu
                  quả.
                </strong>
              </p>
            </section>

            <section id="thuc-trang-dang-lo-ngai" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  ❗Thực trạng đáng lo ngại: Vô trùng bị xem nhẹ tại nhiều phòng
                  khám
                </strong>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Nhiều cơ sở nha khoa hiện nay chưa đáp ứng đầy đủ tiêu chuẩn
                quy trình vô trùng nha khoa:"
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Thiếu phòng điều trị và phẫu thuật tách biệt</li>
                <li>
                  Không có hệ thống thanh trùng một chiều, 8 bước với 2 bước làm
                  sạch và khử khuẩn bằng 2 loại hóa chuyên dụng cũng như không
                  trang bị đày đủ 4 test kiểm định khi hấp dụng cụ
                </li>
                <li>Dụng cụ không được xử lý đúng quy trình</li>
                <li>
                  Không kiểm soát nhiễm khuẩn trước – trong – sau điều trị
                </li>
                <li>
                  Không minh bạch với khách hàng về quy trình kiểm soát vô
                  trùng, nguồn gốc sản phẩm
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Trong bối cảnh ngành nha khoa ngày càng yêu cầu cao về an toàn
                và kiểm soát nhiễm khuẩn, Ban điều hành hệ thống Nha Khoa Kim
                yêu cầu <strong>toàn bộ nhân sự</strong> khi thực hiện{" "}
                <strong>khám và tư vấn</strong> bắt buộc thông tin đến bệnh nhân
                khi khám{" "}
                <strong>"kể cả các dịch điều trị đơn giản như:"</strong>
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Lấy cao răng</li>
                <li>Điều trị tủy răng</li>
                <li>Trám răng</li>
                <li>Tẩy trắng răng</li>
                <li>Niềng răng</li>
                <li>Nhổ răng, tiểu phẫu và các dịch vụ chuyên sâu khác</li>
              </ul>
            </section>

            <section id="quy-trinh-vo-trung" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Quy trình vô trùng Nha khoa Kim đã được chuẩn hóa và dán tại
                  phòng vô trùng
                </strong>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    1. Làm sạch sơ bộ (Ngăn 1)
                  </h3>
                  <p className="text-gray-700">
                    Dụng cụ có máu/mủ được rửa sơ dưới nước sạch.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2. Ngâm với dung dịch enzyme (Ngăn 2)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Dụng cụ ngâm trong dung dịch <strong>Cidezyme</strong> trong
                    10 phút để hòa tan cặn sinh học.
                  </p>
                  <p className="text-gray-700">
                    Đối với dụng cụ sắc nhọn, khe khó rửa thì ngâm với máy rung
                    siêu âm
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    3. Ngâm dung dịch diệt khuẩn chuyên sâu (Ngăn 3 & 4)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Ngâm dụng cụ có nắp đậy bằng{" "}
                      <strong>Anios Clean Excel D</strong> trong 15 phút.
                    </li>
                    <li>
                      Sau đó rửa sạch lại bằng{" "}
                      <strong>nước sạch hai lần</strong> để loại bỏ hóa chất dư
                      thừa.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    4. Ngâm khử khuẩn cấp độ cao (Ngăn 5) dụng cụ bán thiết yếu
                  </h3>
                  <p className="text-gray-700">
                    Ngâm trong{" "}
                    <strong>
                      Cidex orthophthalaldehyde 0.55% từ 2–10 phút
                    </strong>{" "}
                    theo chuẩn của Bộ Y tế.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    5. Lau khô & sấy khô
                  </h3>
                  <p className="text-gray-700">
                    Dụng cụ được <strong>lau khô bằng khăn sạch</strong>, sau đó{" "}
                    <strong>sấy khô bằng máy chuyên dụng</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    6. Đóng gói vô trùng
                  </h3>
                  <p className="text-gray-700">
                    Tất cả dụng cụ được đóng gói trong bao bì chuyên dụng, có{" "}
                    <strong>chỉ thị kiểm tra tiệt trùng</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    7. Tiệt trùng bằng hấp chân không Class B
                  </h3>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    8. Lưu trữ & kiểm định
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Dụng cụ được lưu tại{" "}
                      <strong>tủ tia cực tím vô trùng</strong>.
                    </li>
                    <li>
                      <strong>Thực hiện 4 lần tái kiểm định</strong> tại các
                      khâu then chốt: sau làm sạch, sau đóng gói, sau hấp, trước
                      khi sử dụng.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="font-bold text-blue-900 mb-3">
                  💡 Lưu ý bắt buộc khi tư vấn:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Mỗi bác sĩ, tư vấn viên phải{" "}
                    <strong>
                      tư vấn rõ ràng cho khách hàng về quy trình vô trùng
                    </strong>{" "}
                    đang áp dụng, giúp khách hàng hiểu và yên tâm khi điều trị
                    tại Nha Khoa Kim.
                  </li>
                  <li>
                    <strong>
                      Bác sĩ bắt buộc phải nắm rất rõ về quy trình sử lý dụng
                      cụ, 2 loại hóa chất sử dụng, các loại test kiểm định để
                      thông tin đầy đủ đến bệnh nhân và đưa bệnh nhân đến phòng
                      thanh trùng giải thích trước hoặc trong hoặc sau khi điều
                      trị
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <p className="font-bold text-green-900 mb-3">
                  ✅ Là khách hàng thông minh, bạn nên:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    🔍 Đừng vội chọn nơi điều trị lấy cao răng, trám răng … chỉ
                    vì giá quá rẻ
                  </p>
                  <p>
                    🔍Đừng vội chọn nơi điều trị lấy cao răng, trám răng … chỉ
                    vì tiện đường, gần nhà
                  </p>
                  <p>
                    🔍 Đừng chọn nơi chỉ có bác sĩ giỏi mà thiếu đầu tư cơ sở
                    vật chất, con người xung quanh họ cũng như từng quy trình
                    điều trị
                  </p>
                  <p>
                    🔍 Chủ động hỏi kỹ về quy trình vô trùng, hệ thống xử lý
                    dụng cụ
                  </p>
                  <p>🔍 Yêu cầu được tham quan thực tế khu vực thanh trùng</p>
                </div>
              </div>
            </section>

            <section id="tai-sao-khach-hang-phai-tham-quan" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Tại sao khách hàng phải tham quan phòng tiệt khuẩn dụng cụ và
                  hỏi quy trình khử khuẩn
                </strong>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Khi có sự giám sát chặt chẽ từ các bộ phận khác nhau, đặc biệt
                là việc giám sát của khách hàng đối với quy trình tiệt khuẩn sẽ
                giúp bộ phận tiệt trùng không lơ là và thậm chí đôi khi cẩu thả
                gây nên những hệ lụy khó lường. Vì vậy, Nha Khoa Kim mong muốn
                khách hàng trước khi điều trị cần yêu cầu được tham quan phòng
                tiệt khuẩn để các nhân viên chuyên trách và các bộ phận khác
                biết rằng cần phải làm ĐÚNG xuyên suốt.
              </p>

              <div className="space-y-4 text-gray-700">
                <p>
                  – (Nhóm 1) Băng chỉ thị nhiệt 3M Comply – 1322: dán cố định
                  bên ngoài các gói dụng cụ cần tiệt khuẩn. Khi vạch chuyển sang
                  màu đậm hoặc đen báo hiệu là đã qua tiếp xúc tiệt khuẩn.
                </p>
                <p>
                  – (Nhóm 5) Chỉ thị hóa học 3M – 1243A test áp suất gói dụng
                  cụ: giúp đánh giá chính xác, tức thời và dễ nhận biết chất
                  lượng tiệt khuẩn sâu bên trong gói dụng cụ có đạt hay không.
                </p>
                <p>
                  – (Nhóm 4) Chỉ thị hóa học 3M Comply – 1250 test kiểm soát gói
                  đồ vải: đặt vào bên trong các gói dụng cụ nhằm xác định các
                  điều kiện tiệt khuẩn bằng hơi nước có đạt hay không. Dùng có
                  chu trình tiệt khuẩn 121 độc C hoặc 134 độ C. Vạch màu trắng
                  chuyển sang màu đen là đạt chuẩn.
                </p>
                <p>
                  – (Nhóm 2) Giấy thử Bowie Dick 3M Comply 1233LF test lò tiệt
                  khuẩn: kiểm tra chất lượng lò tiệt khuẩn hơi nước chân không
                  có còn khí lạnh không, loại bỏ khí không đạt hoặc quá trình
                  rút chân không không đạt.
                </p>
              </div>

              <div className="my-8">
                <Image
                  src="/images/mainpage/different/BacSi-02-555x312.png"
                  alt="Xử lý dụng cụ tiệt trùng 1 chiều tại Nha Khoa Kim"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Xử lý dụng cụ tiệt trùng 1 chiều tại Nha Khoa Kim
                </p>
              </div>

              <div className="my-8">
                <Image
                  src="/images/mainpage/different/Bacsi-555x312-1.png"
                  alt="Phòng tiệt khuẩn 1 chiều Nha Khoa Kim"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Phòng tiệt khuẩn 1 chiều Nha Khoa Kim với máy rung dụng cụ
                  siêu âm, lò hấp chân không class B
                </p>
              </div>
            </section>

            <section id="tay-khoan-kem-cat" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Tay khoan, kèm cắt kẽm thừa chỉnh nha – niềng răng cũng được
                  hấp chứ không phải sát trùng sơ sài
                </strong>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không
                hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng
                bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex. Điều này
                chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như
                dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm
                chỉnh nha. Chính vì thế, Nha Khoa Kim quy định các vật liệu dụng
                cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng
                thiết yếu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1
                chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ,
                vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc
                thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test
                kiểm định cùng 8 bước tiệt khuẩn chuẩn.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Mỗi phòng khám thuộc hệ thống Nha Khoa Kim được Sở Y tế các tỉnh
                thành thẩm định các danh mục kỹ thuật khác nhau. Quý khách sẽ
                được thực hiện các dịch vụ theo đúng những danh mục kỹ thuật mà
                Sở Y tế cho phép. Những danh mục khác sẽ được thực hiện tại bệnh
                viện.
              </p>
            </section>

            {/* Social Share */}
            <div className="flex items-center gap-4 py-6 border-t border-gray-200">
              <span className="text-gray-600">Chia sẻ</span>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnhakhoakim.com%2Fhealthcare-ecosystem%2Fyeu-cau-cho-tham-quan-phong-tiet-trung-truoc-khi-quyet-dinh-dieu-tri-nha-khoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/share?text=⚠️ Cảnh báo nhiễm khuẩn chéo: Đừng vệ sinh răng khi chưa kiểm tra khu vô trùng&url=https%3A%2F%2Fnhakhoakim.com%2Fhealthcare-ecosystem%2Fyeu-cau-cho-tham-quan-phong-tiet-trung-truoc-khi-quyet-dinh-dieu-tri-nha-khoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 article-sidebar">
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Latest News */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tin mới nhất
              </h3>
              <div className="space-y-6">
                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/thumbnail-home.png"
                        alt="Nha Khoa Kim đạt được Thành tựu Y khoa 2024"
                        width={320}
                        height={200}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Nha Khoa Kim đạt được Thành tựu Y khoa 2024 do Sở Y tế
                      TP.HCM tổ chức
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/chungnhanHarvard.png"
                        alt="Nha Khoa Kim hân hạnh đồng hành cùng trường Đại học Harvard"
                        width={320}
                        height={200}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Nha Khoa Kim hân hạnh đồng hành cùng trường Đại học
                      Harvard trong dự án Field Global Immersion
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/social/zalo.png"
                        alt="Chính thức ra mắt Zalo App Nha Khoa Kim"
                        width={320}
                        height={200}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Chính thức ra mắt Zalo App Nha Khoa Kim với nhiều tiện ích
                      cho khách hàng
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/banner/Implant-PC.png"
                        alt="Nha Khoa Kim đối tác tin cậy của Invisalign Hoa Kỳ và Implant Straumann Thụy Sỹ"
                        width={320}
                        height={200}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Nha Khoa Kim đối tác tin cậy của Invisalign Hoa Kỳ và
                      Implant Straumann Thụy Sỹ
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/banner/NiengRang-PC.png"
                        alt="Những con số cực ấn tượng của Hành trình răng hạnh phúc tháng 10"
                        width={320}
                        height={200}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Những con số cực ấn tượng của Hành trình răng hạnh phúc
                      tháng 10
                    </h4>
                  </Link>
                </article>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bài viết liên quan
              </h3>
              <div className="space-y-6">
                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/chungnhanHarvard.png"
                        alt="Nha Khoa Kim – Đối tác toàn cầu của Đại học Harvard"
                        width={320}
                        height={180}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Nha Khoa Kim – Đối tác toàn cầu của Đại học Harvard
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/different/1721637718FjxLDpBNXlhqcy8.png"
                        alt="4 khác biệt tạo nên Nha Khoa Kim uy tín chất lượng"
                        width={320}
                        height={180}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      4 khác biệt tạo nên Nha Khoa Kim uy tín chất lượng
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/ChungNhan-01.png"
                        alt="Những thành tựu Nha Khoa Kim"
                        width={320}
                        height={180}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Những thành tựu Nha Khoa Kim
                    </h4>
                  </Link>
                </article>

                <article className="group">
                  <Link href="/#" className="block">
                    <div className="mb-3">
                      <Image
                        src="/images/mainpage/ChungNhan-02.png"
                        alt="Nha Khoa Kim – Doanh Nghiệp Điển Hình Của Quỹ Đầu Tư Chính Phủ Singapore"
                        width={320}
                        height={180}
                        className="rounded-lg w-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Nha Khoa Kim – Doanh Nghiệp Điển Hình Của Quỹ Đầu Tư Chính
                      Phủ Singapore
                    </h4>
                  </Link>
                </article>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
