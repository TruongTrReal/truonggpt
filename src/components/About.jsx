import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h1 className='text-white text-[100px] font-bold'>{icon}</h1>

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giới thiệu</p>
        <h2 className={styles.sectionHeadText}>TruongGPT</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Bạn gặp khó khăn trong việc tìm kiếm <span className="blue-text-gradient">cơ hội đầu tư?</span> đầu tư chứng khoán cần sự <span className="blue-text-gradient">trợ giúp tư vấn 24/7?</span> hay đơn giản chỉ muốn bắt đầu <span className="blue-text-gradient">học chứng khoán</span> tốt hơn? <br/> <span className="text-white">Chúng tôi đã có giải pháp!</span><br/>
        <span className="text-white">TruongGPT </span>không đơn thuần là một công cụ chatbot bình thường. Mà là một siêu trợ thủ thông minh và mạnh mẽ. Với khả năng học tập và phân tích từ <span className="blue-text-gradient">hàng triệu dữ liệu chứng khoán</span>, với <span className="blue-text-gradient">công nghệ OpenAI</span> và <span className="blue-text-gradient">bigdata</span>, nó không chỉ giúp bạn tìm ra <span className="blue-text-gradient">cơ hội tiềm năng</span> mà còn giải đáp mọi câu hỏi liên quan đến chứng khoán như <span className="blue-text-gradient">khuyến nghị cổ phiếu, phân tích cơ bản, phân tích kỹ thuật, phân tích ngành, tìm kiếm thông tin, kiến thức tài chính</span>, hoặc bất cứ thứ gì bạn cần để đầu tư chứng khoán<span className="text-white"> chỉ cần 1 câu hỏi</span>, <span className="text-white">TruongGPT</span> sẽ trả lời trong vài giây, một cách chính xác, 24/7.<br/>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 place-content-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");