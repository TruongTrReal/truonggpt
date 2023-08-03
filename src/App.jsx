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
        <div className='' style={
          {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
          }
        }>
          <Experience />
        </div>
        <div className='relative z-0'>
          <Groups handleMainButtonClick={handleButtonClick} secondaryButtonsData={secondaryButtonsData} />
        </div>
        <div className='relative mt-[100%] mb-[70%] sm:mt-0 sm:mb-0' style={
          {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }
        }>
          <Plans />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App