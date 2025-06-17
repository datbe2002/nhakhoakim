'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleLayout from '../components/ArticleLayout'
import TableOfContents from '../components/TableOfContents'
import SocialShare from '../components/SocialShare'
import RelatedArticles from '../components/RelatedArticles'

export default function ImplantTechnologyPage() {
  const tocItems = [
    {
      id: "Mang_dinh_vi_trong_rang_Implant_la_gi",
      title: "Máng định vị trồng răng Implant là gì?",
      level: 2
    },
    {
      id: "Vi_sao_mang_dinh_vi_dam_bao_cam_Implant_chinh_xac",
      title: "Vì sao máng định vị đảm bảo cắm Implant chính xác?",
      level: 2,
      children: [
        {
          id: "Quy_trinh_chuan_xac_tu_dau",
          title: "Quy trình chuẩn xác từ đầu",
          level: 3
        },
        {
          id: "Loai_bo_cam_xuc_cua_bac_si_khi_thuc_hien",
          title: "Loại bỏ cảm xúc của bác sĩ khi thực hiện",
          level: 3
        }
      ]
    },
    {
      id: "Nhung_uu_diem_khac_cua_mang_dinh_vi",
      title: "Những ưu điểm khác của máng định vị?",
      level: 2,
      children: [
        {
          id: "Khong_dau_khong_chay_mau",
          title: "Không đau, không chảy máu",
          level: 3
        },
        {
          id: "Thuc_hien_nhanh_chong_va_lanh_thuong_nhanh",
          title: "Thực hiện nhanh chóng và lành thương nhanh",
          level: 3
        }
      ]
    },
    {
      id: "Nha_Khoa_Kim_dam_bao_an_toan_cho_khach_hang_khi_trong_rang_Implant",
      title: "Nha Khoa Kim đảm bảo an toàn cho khách hàng khi trồng răng Implant",
      level: 2,
      children: [
        {
          id: "Vat_lieu_chinh_hang",
          title: "Vật liệu chính hãng",
          level: 3
        },
        {
          id: "Phong_trong_rang_Implant_duoc_tham_dinh_chuyen_sau_theo_tieu_chuan_So_Y_te",
          title: "Phòng trồng răng Implant được thẩm định chuyên sâu theo tiêu chuẩn Sở Y tế",
          level: 3
        },
        {
          id: "Dung_cu_trong_rang_Implant_duoc_tiet_khuan_vo_trung",
          title: "Dụng cụ trồng răng Implant được tiệt khuẩn, vô trùng",
          level: 3
        }
      ]
    }
  ]

  const relatedArticles = [
    {
      title: "Trẻ bị cam miệng: Nguyên nhân, triệu chứng và cách điều trị",
      url: "/tre-bi-cam-mieng.html",
      image: "/images/implant/cam-mieng.jpg"
    },
    {
      title: "Nguyên nhân bị mọc thừa răng? Răng thừa có cần nhổ bỏ không?",
      url: "/rang-thua-co-can-nho-khong.html",
      image: "/images/implant/rang-thua.jpg"
    },
    {
      title: "Hàm giữ khoảng là gì? Công dụng và các loại phổ biến",
      url: "/ham-giu-khoang-la-gi.html",
      image: "/images/implant/ham-giu-khoang.jpg"
    },
    {
      title: "9 Mẹo chữa đau răng sâu cấp tốc, hiệu quả tại nhà",
      url: "/meo-chua-dau-rang-sau.html",
      image: "/images/implant/dau-rang-sau.jpg"
    },
    {
      title: "Trám răng tạm thời để làm gì? Khi nào cần trám tạm thời?",
      url: "/tram-rang-tam-thoi-de-lam-gi.html",
      image: "/images/implant/tram-rang.jpg"
    },
    {
      title: "Vì sao hơi thở có mùi dù đã vệ sinh răng miệng sạch sẽ?",
      url: "/vi-sao-hoi-tho-co-mui.html",
      image: "/images/implant/hoi-tho.jpg"
    },
    {
      title: "Cao răng đen: Nguyên nhân, tác hại và cách loại bỏ hiệu quả",
      url: "/cao-rang-den.html",
      image: "/images/implant/cao-rang-den.jpg"
    },
    {
      title: "Hướng dẫn cách đếm và đọc tên các loại răng",
      url: "/cach-dem-va-doc-ten-cac-loai-rang.html",
      image: "/images/implant/cach-dem-rang.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Trồng Răng Implant An Toàn Chính Xác Với Máng Định Vị 3D
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Ngày nay, việc trồng răng Implant (cấy ghép Implant) tại Việt Nam đã trở nên dễ dàng hơn bao giờ hết nhờ công nghệ phát triển và đội ngũ bác sĩ chuyên môn cao. Tuy nhiên, yếu tố quan trọng nhất để đảm bảo thành công của ca trồng răng Implant vẫn là sự CHÍNH XÁC trên thực tế chứ không phải phân tích trên phần mềm hay mô phỏng trên máy tính.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Nội Dung Chính</h4>
              <TableOfContents items={tocItems} />
            </div>

            <ArticleLayout>
              <section id="Mang_dinh_vi_trong_rang_Implant_la_gi" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Máng định vị trồng răng Implant là gì?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Máng định vị là dụng cụ chuyên dụng hỗ trợ quá trình{' '}
                    <strong>
                      <a href="/trong-rang-implant-nhung-dieu-ban-can-biet.html" className="text-blue-600 hover:text-blue-800">
                        trồng răng Implant
                      </a>
                    </strong>
                    . Máng được thiết kế để vừa vặn với khung hàm và tạo ra khoảng trống tại vị trí mất răng, giúp bác sĩ xác định chính xác vị trí và hướng cắm trụ, từ đó nâng cao tỷ lệ thành công của ca Implant.
                  </p>
                  <div className="my-6">
                    <img 
                      src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-1.webp" 
                      alt="Máng định vị giúp bác sĩ cắm Implant một cách chính xác"
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">
                      Máng định vị giúp bác sĩ cắm Implant một cách chính xác
                    </p>
                  </div>
                </div>
              </section>

              <section id="Vi_sao_mang_dinh_vi_dam_bao_cam_Implant_chinh_xac" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Vì sao máng định vị đảm bảo cắm Implant chính xác?
                </h2>
                <p className="mb-6 text-gray-700">
                  Nha Khoa Kim tự hào 100% ca trồng răng Implant bằng MÁNG ĐỊNH VỊ 3D giúp bác sĩ định vị, cắm Implant một cách chính xác tuyệt đối.
                </p>

                <div id="Quy_trinh_chuan_xac_tu_dau" className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Quy trình chuẩn xác từ đầu
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4">
                      Khách hàng trồng răng Implant sẽ được chụp X-quang Conebeam CT, scan răng 3D để biết được chính xác tình trạng răng miệng. Từ dữ liệu trên, bác sĩ sử dụng phần mềm phân tích chuyên nghiệp SIMPLANT/R2GATE để xác định vị trí, độ sâu, hướng cắm trụ Implant và loại bỏ các rủi ro một cách chính xác ngay từ bước đầu. Từ đó, mô phỏng, giả lập quá trình cắm Implant cũng như trao đổi với khách hàng về kế hoạch điều trị.
                    </p>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-2.webp" 
                        alt="Khách hàng sẽ được chụp X-quang Conebeam CT"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Khách hàng sẽ được chụp X-quang Conebeam CT – bước không thể thiếu để quá trình trồng răng Implant diễn ra an toàn, chính xác.
                      </p>
                    </div>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-3.webp" 
                        alt="Phần mềm R2Gate hỗ trợ bác sĩ lên kế hoạch điều trị"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Phần mềm R2Gate hỗ trợ bác sĩ lên kế hoạch điều trị chính xác, mô phỏng trước quá trình cắm trụ Implant một cách trực quan
                      </p>
                    </div>
                    <p className="mb-4">
                      Sau khi nhận được dữ liệu của khách hàng và kế hoạch điều trị từ bác sĩ, thông tin sẽ được gửi trực tiếp đến Labo A&B. Tại đây, các kỹ thuật viên sẽ thực hiện thiết kế và in máng định vị. Máng được in từ chất liệu nhựa cao cấp, tương thích sinh học, chính hãng từ châu Âu, đảm bảo an toàn tuyệt đối khi sử dụng trong miệng.
                    </p>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-4.webp" 
                        alt="Labo A&B thiết kế máng định vị"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Labo A&B thiết kế máng định vị dựa trên dữ liệu khách hàng và từ chất liệu nhựa cao cấp, tương thích sinh học, an toàn trong miệng
                      </p>
                    </div>
                  </div>
                </div>

                <div id="Loai_bo_cam_xuc_cua_bac_si_khi_thuc_hien" className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Loại bỏ cảm xúc của bác sĩ khi thực hiện
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4">
                      Bác sĩ có thể phân tích lý thuyết trên phần mềm rất giỏi, thực hiện các loại mô phỏng trên máy tính, nhưng khi thao tác thực tế thì làm thế nào? Bằng trí nhớ, bằng cảm xúc hay vừa cắm Implant vừa xem màn hình mô phỏng?
                    </p>
                    <p className="mb-4">
                      Với MÁNG ĐỊNH VỊ 3D, Nha Khoa Kim loại trừ sự chủ quan khi bác sĩ có nhiều kinh nghiệm, loại trừ cảm xúc của bác sĩ khi thực hiện để đảm bảo ca trồng răng Implant thành công tuyệt đối. Chỉ 10 phút/trụ và "có muốn cắm Implant sai cũng không làm được".
                    </p>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-5.webp" 
                        alt="Máng định vị loại trừ sự chủ quan và cảm xúc của bác sĩ"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Máng định vị loại trừ sự chủ quan và cảm xúc của bác sĩ khi thực hiện, đảm bảo thành công tuyệt đối
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="Nhung_uu_diem_khac_cua_mang_dinh_vi" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Những ưu điểm khác của máng định vị?
                </h2>

                <div id="Khong_dau_khong_chay_mau" className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Không đau, không chảy máu
                  </h3>
                  <p className="text-gray-700">
                    Kỹ thuật trồng răng Implant sử dụng máng định vị giúp hạn chế tối đa xâm lấn, bác sĩ sẽ không cần phải sử dụng dao hay rạch nướu (lợi), do đó gần như không xảy ra chảy máu, không gây đau đớn.
                  </p>
                </div>

                <div id="Thuc_hien_nhanh_chong_va_lanh_thuong_nhanh" className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Thực hiện nhanh chóng và lành thương nhanh
                  </h3>
                  <p className="text-gray-700">
                    Do sử dụng máng định vị 3D nên thời gian thực hiện cắm Implant rất nhanh (chỉ mất 10 phút cho mỗi trụ Implant), đồng thời hạn chế tối đa xâm lấn và giúp quá trình lành thương diễn ra nhanh chóng.
                  </p>
                </div>
              </section>

              <section id="Nha_Khoa_Kim_dam_bao_an_toan_cho_khach_hang_khi_trong_rang_Implant" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nha Khoa Kim đảm bảo an toàn cho khách hàng khi trồng răng Implant
                </h2>

                <div id="Vat_lieu_chinh_hang" className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Vật liệu chính hãng
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4">
                      Nha Khoa Kim sử dụng các loại trụ Implant hàng đầu thế giới Mỹ, Thụy Sỹ (Nobel, Straumann, Swiss) và trụ Implant Hàn Quốc (Dio, Biotem, Megagen AnyRidge) có nguồn gốc xuất xứ rõ ràng, đầy đủ thông tin chính hãng, minh bạch, độ bền và ổn định cao, tích hợp xương tốt, giúp người dùng tránh được các vấn đề ảnh hưởng đến sức khỏe răng miệng.
                    </p>
                    <p className="mb-4 font-semibold">
                      "Sau khi trồng răng Implant tại Nha Khoa Kim, khách hàng sẽ được mang về:"
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Máng định vị và mẫu hàm 3D thiết kế riêng hỗ trợ quá trình điều trị.</li>
                      <li>Vỏ hộp trụ Implant đã sử dụng.</li>
                      <li>Thẻ bảo hành online.</li>
                    </ul>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-6.webp" 
                        alt="Khách hàng sẽ nhận được máng định vị, vỏ hộp trụ Implant và thẻ bảo hành"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Khách hàng sẽ nhận được máng định vị, vỏ hộp trụ Implant và thẻ bảo hành
                      </p>
                    </div>
                  </div>
                </div>

                <div id="Phong_trong_rang_Implant_duoc_tham_dinh_chuyen_sau_theo_tieu_chuan_So_Y_te" className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Phòng trồng răng Implant được thẩm định chuyên sâu theo tiêu chuẩn Sở Y tế
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 font-semibold">
                      "Một trong những yếu tố giúp ca điều trị Implant thành công chính là môi trường trồng răng Implant an toàn tuyệt đối. Tại Nha Khoa Kim, phòng trồng răng Implant được thẩm định chuyên sâu theo tiêu chuẩn của Sở Y Tế với:"
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>"Khu vực rửa tay cảm biến: quy trình rửa tay ngoại khoa đúng chuẩn với dung dịch rửa tay phẫu thuật Chlorhexidine Gluconate, Anios Gel; khẩu trang, nón trùm đầu…"</li>
                      <li>"Ghế nha với bồn súc miệng tháo rời, nước xử lý RO: kiểm soát nhiễm khuẩn đạt tối ưu; đảm bảo nguồn nước đầu vào cho ghế nha luôn sạch và an toàn."</li>
                      <li>"Đèn chiếu tia UV: khử trùng và diệt khuẩn trước và sau khi điều trị."</li>
                      <li>Phòng được thi công với 100% vật liệu vinyl kháng khuẩn, hạn chế tối đa góc cạnh, dễ dàng vệ sinh.</li>
                      <li>"Phòng được thiết kế kín, riêng biệt: đảm bảo vô trùng."</li>
                    </ul>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-7.webp" 
                        alt="Phòng điều trị tại Nha Khoa Kim được thẩm định chuyên sâu"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Phòng điều trị tại Nha Khoa Kim được thẩm định chuyên sâu, đảm bảo an toàn cho khách hàng
                      </p>
                    </div>
                  </div>
                </div>

                <div id="Dung_cu_trong_rang_Implant_duoc_tiet_khuan_vo_trung" className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dụng cụ trồng răng Implant được tiệt khuẩn, vô trùng
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4">
                      Trước khi đưa đến phòng điều trị cho khách hàng, bộ dụng cụ Implant tại Nha Khoa Kim bao gồm gói đồ tiểu phẫu, dụng cụ tiểu phẫu, bộ kit cắm Implant… sẽ được xử lý, tiệt khuẩn tại phòng tiệt khuẩn theo đúng quy trình 1 chiều – 8 bước – 4 test kiểm định. Đặc biệt, bộ dụng cụ tiểu phẫu, bộ kit Implant được kiểm định bằng test vi sinh để đảm bảo rằng tất cả dụng cụ đều đạt tiêu chuẩn an toàn tối đa, tránh nguy cơ lây nhiễm chéo.
                    </p>
                    <div className="my-6">
                      <img 
                        src="/images/implant/trong-rang-Implant-chinh-xac-mang-dinh-vi-Nha-Khoa-Kim-8.webp" 
                        alt="Phòng tiệt khuẩn đúng quy trình tại Nha Khoa Kim"
                        className="w-full rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Phòng tiệt khuẩn đúng quy trình 1 chiều – 8 bước – 4 test kiểm định tại Nha Khoa Kim
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 mb-4">
                    Nha Khoa Kim sẵn sàng mời khách hàng kiểm tra phòng tiệt khuẩn tại phòng khám trước khi quyết định điều trị để thấy rõ quy trình nghiêm ngặt mà chúng tôi áp dụng giúp bảo vệ sức khỏe của khách hàng và đảm bảo an toàn trong mọi dịch vụ nha khoa.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Mỗi phòng khám thuộc hệ thống Nha Khoa Kim được Sở Y tế các tỉnh thành thẩm định các danh mục kỹ thuật khác nhau. Quý khách sẽ được thực hiện các dịch vụ theo đúng những danh mục kỹ thuật mà Sở Y tế cho phép. Những danh mục khác sẽ được thực hiện tại bệnh viện.
                  </p>
                </div>
              </section>
            </ArticleLayout>

            <SocialShare 
              title="Trồng Răng Implant An Toàn Chính Xác Với Máng Định Vị 3D"
              url="/cong-nghe-cay-implant-safest-nhanh-tai-nha-khoa-kim.html"
            />

            <div className="mt-12">
              <div className="mb-6">
                <span className="text-sm text-gray-600">Chuyên mục</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a href="/hoat-dong-nha-khoa-kim" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
                    Hoạt động Nha Khoa Kim
                  </a>
                  <a href="/kien-thuc-nha-khoa" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
                    Kiến Thức Nha Khoa
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/4">
            <div className="sticky top-8">
              <h4 className="text-lg font-semibold mb-4">Tin mới nhất</h4>
              <div className="space-y-4">
                <article className="border-b pb-4">
                  <a href="/nha-khoa-kim-duoc-vinh-danh-top-20-giai-thuong-thanh-tuu-y-khoa-viet-nam-2024.html" className="block">
                    <img 
                      src="/images/implant/thanh-tuu-y-khoa-2024.jpg" 
                      alt="Nha Khoa Kim đạt được Thành tựu Y khoa 2024"
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h5 className="font-medium text-sm leading-tight">
                      Nha Khoa Kim đạt được Thành tựu Y khoa 2024 do Sở Y tế TP.HCM tổ chức
                    </h5>
                  </a>
                </article>
                
                <article className="border-b pb-4">
                  <a href="/nha-khoa-kim-tu-hao-la-doi-tac-toan-cau-cua-dai-hoc-harvard.html" className="block">
                    <img 
                      src="/images/implant/harvard-partnership.jpg" 
                      alt="Nha Khoa Kim hân hạnh đồng hành cùng trường Đại học Harvard"
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h5 className="font-medium text-sm leading-tight">
                      Nha Khoa Kim hân hạnh đồng hành cùng trường Đại học Harvard trong dự án Field Global Immersion
                    </h5>
                  </a>
                </article>

                <article className="border-b pb-4">
                  <a href="/chinh-thuc-ra-mat-zalo-app-nha-khoa-kim-voi-nhieu-tien-ich-cho-khach-hang.html" className="block">
                    <img 
                      src="/images/implant/zalo-app.jpg" 
                      alt="Chính thức ra mắt Zalo App Nha Khoa Kim"
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h5 className="font-medium text-sm leading-tight">
                      Chính thức ra mắt Zalo App Nha Khoa Kim với nhiều tiện ích cho khách hàng
                    </h5>
                  </a>
                </article>

                <article className="border-b pb-4">
                  <a href="/nha-khoa-kim-voi-doi-tac-tin-cay-invisalign-hoa-ky-va-implant-straumann-thuy-sy.html" className="block">
                    <img 
                      src="/images/implant/invisalign-straumann.jpg" 
                      alt="Nha Khoa Kim đối tác tin cậy của Invisalign Hoa Kỳ và Implant Straumann Thụy Sỹ"
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h5 className="font-medium text-sm leading-tight">
                      Nha Khoa Kim đối tác tin cậy của Invisalign Hoa Kỳ và Implant Straumann Thụy Sỹ
                    </h5>
                  </a>
                </article>

                <article>
                  <a href="/nhung-con-so-cuc-an-tuong-cua-hanh-trinh-rang-hanh-phuc-thang-10.html" className="block">
                    <img 
                      src="/images/implant/hanh-trinh-rang-hanh-phuc.jpg" 
                      alt="Những con số cực ấn tượng của Hành trình răng hạnh phúc tháng 10"
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h5 className="font-medium text-sm leading-tight">
                      Những con số cực ấn tượng của Hành trình răng hạnh phúc tháng 10
                    </h5>
                  </a>
                </article>
              </div>
            </div>
          </aside>
        </div>

        <RelatedArticles articles={relatedArticles} />
      </main>

      <Footer />
    </div>
  )
} 