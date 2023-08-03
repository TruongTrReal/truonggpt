import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works, StarsCanvas, GalaxyCanvas, Groups, Plans } from './components';


const App = () => {
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
      description: "Nhóm Tin Chứng Khoán 24/7 FlashBot",
      link: "https://t.me/chungkhoanmoinhat",
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
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App