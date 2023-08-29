import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "chat",
      title: "Bắt đầu",
    },
    {
      id: "login",
      title: "Đăng nhập",
    },
    {
      id: "signup",
      title: "Đăng ký",
    }
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
      price: "1.950.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 100.000.000đ",
      features: [
        "- GPT-4 access",
        "- AI Phân tích kỹ thuật cổ phiếu",
        "- AI Phân tích ngành",
        "- AI Phân tích báo cáo tài chính",
        "- Room cộng đồng, tư vấn ưu tiên",
      ],
      backgroundColor: "from-red-400 to-orange-700",
      star: true,
    },
    {
      title: "PREMIUM",
      icon: "🚀",
      price: "5.850.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 1.000.000.000đ",
      features: [
        "- Hướng dẫn phân tích cổ phiếu bằng AI (nâng cao, prompt chuyên sâu)",
        "- TruongGPT khuyến nghị cổ phiếu tiềm năng bằng AI",
        "- Tư vấn 1-1 trong quá trình đầu tư và sử dụng TruongGPT, mức độ ưu tiên cao nhất",
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
  
  const APP_ID = "application-truonggpt-zecuw";

  export { services, plans, technologies, APP_ID };