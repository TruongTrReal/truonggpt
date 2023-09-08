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
      price: "FREE TRIAL 30 ngày",
      features: [
        "- Sử dụng công nghệ GPT-3.5-TURBO",
        "- Dữ liệu tài chính cập nhật lên tục đến thời điểm hiện tại 24/7",
        "- Giải đáp chứng khoán cơ bản",
        "- Phân tích kỹ thuật, phân tích tài chính",
        "- Phân tích ngành, kinh tế vĩ mô",
      ],
      backgroundColor: "from-blue-500 to-white-800",
      star: false,
    },
    {
      title: "PRO",
      icon: "🔥",
      price: "650.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 100.000.000đ",
      features: [
        "- GPT-4 access",
        "- Mọi tác vụ phân tích sẽ có chất lượng tốt hơn x5 lần so với bản FREE",
        "- Support khi sử dụng TruongGPT"
      ],
      backgroundColor: "from-red-400 to-orange-700",
      star: true,
    },
    {
      title: "PREMIUM",
      icon: "🚀",
      price: "1.850.000đ/tháng hoặc Nạp tiền giao dịch chứng khoán VPS từ 1.000.000.000đ",
      features: [
        "- Bật khả năng Khuyến Nghị cổ phiếu TruongGPT",
        "- Bật khả năng phân tích giao dịch, theo dõi cá mập bằng AI",
        "- Coaching 1-1 sử dụng TruongGPT để phân tích chứng khoán",
        "- Support 24/7"
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