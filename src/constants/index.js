import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    editvideo,
    telesale,
    android,
    crypto,
    tet,
    smartone
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Giới thiệu",
    },
    {
      id: "start",
      title: "Bắt đầu",
    },
    {
      id: "plans",
      title: "Gói dịch vụ",
    },
    {
      id: "contact",
      title: "Liên hệ",
    },
  ];
  
  const services = [
    {
      title: "Thông tin mới nhất",
      icon: "📰",
    },
    {
      title: "Phân tích cổ phiếu",
      icon: "📈",
    },
    {
      title: "Phân tích ngành",
      icon: "📊",
    },
    {
      title: "AI khuyến nghị",
      icon: "🤖",
    },
  ];

  const plans = [
    {
      title: "FREE",
      icon: "🆓",
      price: "500.000đ/tháng hoặc Đăng ký miễn phí tài khoản chứng khoán VPS, không cần nạp tiền, không cần đăng ký gói dịch vụ",
      features: [
        "- Khả năng cập nhật thông tin mới nhất",
        "- Ghi nhớ giá cổ phiếu thời gian thực",
        "- Giải đáp chứng khoán cơ bản",
      ],
      backgroundColor: "from-blue-500 to-white-800",
      star: false,
    },
    {
      title: "PRO",
      icon: "🔥",
      price: "1.000.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 100.000.000đ",
      features: [
        "- AI Phân tích kỹ thuật cổ phiếu",
        "- AI Phân tích ngành",
        "- AI khuyến nghị",
        "- Room cộng đồng, tư vấn ưu tiên",
      ],
      backgroundColor: "from-red-400 to-orange-700",
      star: true,
    },
    {
      title: "MAX",
      icon: "🚀",
      price: "2.000.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 500.000.000đ",
      features: [
        "- GPT-4 access",
        "- AI Phân tích báo cáo tài chính",
        "- AI phân tích cơ bản và ngành liên quan trong 1 câu hỏi",
        "- Room khách hàng ưu tiên, tư vấn 1-1 với Founder",
      ],
      backgroundColor: "from-green-500 to-purple-800",
      star: true,
    },
  ];
  
  const technologies = [
    {
      name: "Ptcb",
      icon: html,
    },
    {
      name: "Ptkt",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Video Editor",
      company_name: "Rakan Gaming",
      icon: editvideo,
      iconBg: "#E6DEDD",
      date: "2018 - 2019",
      points: [
        "Edit video bằng Premire Pro cho 1 trang làm content về game trên Facebook.",
        "Các thể loại content như highlight, tấu hài và tâm sự game thủ.",
        "Bằng cách bắt trend tốt, có thời điểm video mình edit được hơn 100k lượt xem và ăn đề xuất của Facebook.",
        "Về sau Page bị hack và nhóm mình giải tán."
      ],
    },
    {
      title: "Telesale",
      company_name: "",
      icon: telesale,
      iconBg: "#383E56",
      date: "10/2020 - 12/2020",
      points: [
        "Telesale thuốc Đông Y.",
        "Gọi điện theo data có sẵn, tư vấn về sản phẩm hỗ trợ điều trị gut.",
        "Doanh số 2 tháng làm việc đạt 40tr.",
        "Nghỉ việc do nghi vấn sản phẩm kém chất lượng."
      ],
    },
    {
      title: "Thực Tập Lập Trình Web",
      company_name: "",
      icon: android,
      iconBg: "#E6DEDD",
      date: "1/2021 - 2/2021",
      points: [
        "Thực tập lập trình Web với ReactJS, NodeJS, JavaScript, SASS, mySQL.",
        "Được học thêm các ngôn ngữ back-end C++, C#, Python.",
        "Dừng thực tập vì chỗ ở cách xa nơi thực tập quá mà không có xe, và đãi ngộ không được tốt.",
      ],
    },
    {
      title: "Môi giới Crypto - Forex",
      company_name: "Exness",
      icon: crypto,
      iconBg: "#383E56",
      date: "2/2021 - 8/2021",
      points: [
        "Phân tích kĩ thuật trên thị trường Forex theo trường phái DOW, lý thuyết Elliot + Fibonanci.",
        "Hiểu biết về hệ thống tài chính, cách vận hành cơ bản và các chính sách tiền tệ.",
        "Tìm kiếm khách hàng trên Facebook, giải quyết nhu cầu về tín hiệu giao dịch.",
        "Nghỉ sau 1 thời gian vì quá tập trung vào phân tích nhưng sale không hiệu quả.",
        "Từng cháy 5000$ sau khi all in Dogecoin."
      ],
    },
    {
      title: "Kinh doanh Online",
      company_name: "Decor Tết",
      icon: tet,
      iconBg: "#E6DEDD",
      date: "10/2022 - 1/2023",
      points: [
        "Nhập hàng từ Trung Quốc và Hàng Mã, các mặt hàng trang trí tết 2023 để bán sỉ lẻ trên Facebook, Tiktok.",
        "Đăng bài bán hàng trên các nhóm Facebook và tạo video gắn link sản phẩm trên Tiktok.",
        "Sử dụng thủ thuật để thu hút tương tác và kéo traffic.",
        "Ngày cao điểm doanh thu đạt 25tr, gần 30 đơn hàng đi các tỉnh.",
        "Tổng kết: Doanh thu gần 200tr, lợi nhuận khoảng 10% sau khi trừ chi phí.",
        "Là lần đầu kinh doanh nên toàn bộ quá trình từ nhập hàng, bán hàng, tư vấn, đóng gói, ship đều 1 tay mình làm nên kết quả chưa được tốt, chốt đơn không kịp và vận hành thiếu hiệu quả dẫn đến chi phí vận hành cao."
      ],
    },
    {
      title: "Môi giới Chứng Khoán",
      company_name: "VPS Securities",
      icon: smartone,
      iconBg: "#383E56",
      date: "8/2021 - Present",
      points: [
        "Phân tích chứng khoán, đọc báo cáo tài chính, phân tích biểu đồ giá để đưa ra khuyến nghị cho nhà đầu tư.",
        "Chăm sóc các nhà đầu tư qua Zalo.",
        "Tạo content Facebook, Tiktok để thu hút sự chú ý.",
        "Quản lý hơn 100 tài khoản chứng khoán.",
        "Khoản đầu tư lãi % nhiều nhất: HSG (đỉnh điểm trên 600%)."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "This 3D Website",
      description:
        "1 chiếc website giúp bộc lộ kỹ năng, kinh nghiệm và trình độ của ứng viên đối nhà tuyển dụng. Được xây dựng bằng ReactJS, ThreeJS, Tailwindcss và 1 số công nghệ khác.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Tool View",
      description:
        "Sử dụng HTML CSS và JavaScript, mình tạo 1 số tool giúp phát triển giao diện phục vụ nhu cầu sử dụng cho cá nhân cũng như đồng nghiệp. Nhờ ý tưởng này họ đã phát triển vượt bậc.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "1 số dự án khác",
      description:
        "Mình đã từng tạo website cv cho mình và bạn bè để họ dễ ứng tuyển hơn. Hầu hết đều đạt được công việc mong muốn. Mình cũng góp sức 1 trong 1 vài dự án nhỏ.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, plans, technologies, experiences, testimonials, projects };