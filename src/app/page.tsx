import Image from "next/image";
import { PiTelevisionSimple } from "react-icons/pi";
import Link from "next/link";
import Navbar from "@/component/navbar/Navbar";
import Contact from "@/component/contactPeople/Contact";

export default function Home() {
  return (
    <div className="flex ">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 pt-[76px] p-20">
        Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum không
        phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của
        nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước
        Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của
        trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự. Nó đến từ đâu? Trái với quan điểm chung của số đông, Lorem Ipsum
        không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
        gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
        trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
        của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một
        trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn
        của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong
        văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem
        Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
        "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu)
        viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận
        thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của
        Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong
        đoạn thứ 1.10.32. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế
        kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn
        1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero
        cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng
        Anh được dịch bởi H. Rackham vào năm 1914. Làm thế nào để có nó? Có rất
        nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được
        biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi
        không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum,
        bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở
        giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum
        đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi,
        khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá
        nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
        thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật
        sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự
        lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật
        tự.
      </div>

      {/* Right Sidebar */}
      <Contact />
    </div>
  );
}
