import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Groups, Plans } from './components';
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./index.css";


const Home = () => {
  const secondaryButtonsData = [
    {
      description: "Channel Chứng Khoán TruongGPT",
      link: "https://t.me/reviewchungkhoan",
    },
    {
      description: "Nhóm Cộng Đồng Ứng Dụng TruongGPT",
      link: "https://t.me/reviewchungkhoan_chat",
    },
    {
      description: "Telegram Founder TruongGPT",
      link: "https://t.me/truonggpt",
    },
  ];
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };
  return (


    <div>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
          <Navbar />
        </div>

        <About />

        <Experience />

        <Groups handleMainButtonClick={handleButtonClick} secondaryButtonsData={secondaryButtonsData} />

        <Plans />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </div>
  )
}

export default Home