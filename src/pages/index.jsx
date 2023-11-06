import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Slider from 'react-slick'
import Image from 'next/image'
import { Container } from '@/shared/ui'
import { useTranslation } from 'next-i18next'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Link from 'next/link'
import clsx from 'clsx'
import { api } from '@/shared/api'


const PrevSlideBtn = (props) => {
  return (
    <>
      <button {...props} className="absolute left-[35px] bottom-[-30px] mr-4 outline-none z-20 !hidden md:!block">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="16" viewBox="0 0 86 16" fill="none">
          <path d="M0.292892 8.70711C-0.0976334 8.31658 -0.0976334 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM86 9L1 9V7L86 7V9Z" fill="#0006BB"/>
        </svg>
      </button>
      <button {...props} className="absolute left-[35px] bottom-[-30px] mr-4 outline-none z-20 !block md:!hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
          <path d="M0.292892 8.20711C-0.0976295 7.81658 -0.0976295 7.18342 0.292892 6.79289L6.65685 0.428932C7.04738 0.0384078 7.68054 0.0384078 8.07107 0.428932C8.46159 0.819457 8.46159 1.45262 8.07107 1.84315L2.41421 7.5L8.07107 13.1569C8.46159 13.5474 8.46159 14.1805 8.07107 14.5711C7.68054 14.9616 7.04738 14.9616 6.65685 14.5711L0.292892 8.20711ZM33 8.5L1 8.5V6.5L33 6.5V8.5Z" fill="#0006BB"/>
        </svg>
      </button>
    </>
  )
}
const NextSlideBtn = (props) => {
  return (
    <>
      <button {...props} className="absolute bottom-[-30px] right-[35px] ml-4 outline-none z-20 !hidden md:!block">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="16" viewBox="0 0 86 16" fill="none">
          <path d="M85.7071 8.70711C86.0976 8.31658 86.0976 7.68342 85.7071 7.29289L79.3431 0.928932C78.9526 0.538408 78.3195 0.538408 77.9289 0.928932C77.5384 1.31946 77.5384 1.95262 77.9289 2.34315L83.5858 8L77.9289 13.6569C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.70711ZM0 9L85 9V7L0 7L0 9Z" fill="#0006BB"/>
        </svg>
      </button>
      <button {...props} className="absolute bottom-[-30px] right-[35px] ml-4 outline-none z-20 !block md:!hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
          <path d="M32.7071 8.20711C33.0976 7.81658 33.0976 7.18342 32.7071 6.79289L26.3431 0.428932C25.9526 0.0384078 25.3195 0.0384078 24.9289 0.428932C24.5384 0.819457 24.5384 1.45262 24.9289 1.84315L30.5858 7.5L24.9289 13.1569C24.5384 13.5474 24.5384 14.1805 24.9289 14.5711C25.3195 14.9616 25.9526 14.9616 26.3431 14.5711L32.7071 8.20711ZM0 8.5L32 8.5V6.5L0 6.5L0 8.5Z" fill="#0006BB"/>
        </svg>
      </button>
    </>
  )
}


const CircularProgressBarWithImage = ({ percentage, imageUrl }) => {
  return (
    <div className="flex justify-center">
      <div className='w-[128px] sm:w-[148px] h-[128px] sm:h-[148px] relative'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: '16px',
          pathColor: `#0006BB`,
          textColor: '#007acc',
          trailColor: '#EEEFFF',
        })}
      />
      <div style={{ transform: 'translate(-50%, -50%)' }} className='absolute top-[50%] left-[50%] w-[108px] sm:w-[130px] h-[108px] sm:h-[130px]'>
        <img
          src={imageUrl}
          alt="Изображение"
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
    </div>
    </div>
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: false,
  swipeToSlide: true,
  nextArrow: <NextSlideBtn/>,
  prevArrow: <PrevSlideBtn/>,
  customPaging: function (i) {
    return (
      <div className="custom-dot"></div>
    );
  },
  appendDots: (dots) => (
    <div>
      <ul className='custom-dots' style={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: "relative", top: "7px"}}>
        {dots}
      </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
    }
  ]
}

const settingsDonor = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  rows: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const settingsTeam = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: false,
  swipeToSlide: true,
  arrows: false,
  customPaging: function (i) {
    return (
      <div className="custom-dot"></div>
    );
  },
  appendDots: (dots) => (
    <div>
      <ul className='custom-dots' style={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: "relative", top: "7px"}}>
        {dots}
      </ul>
    </div>
  )
}


const Home = ({annual_report, donors, materials, partners, projects, slider, text, title, trustees, employees}) => {
  const { t } = useTranslation() 
  return (
    <>
      <Head>
        <title>{t('main.head')}</title>
      </Head>
      <main>
        <section className="hero px-3">
          <Container className="pt-[24px] flex-col">
            <div className='flex flex-col md:flex-row items-start gap-5 md:items-center mb-4 justify-between'>
              <h1 className='max-w-[450px] font-bold text-2xl sm:text-3xl md:text-4xl leading-[normal] uppercase'>
                {title}
              </h1>
              <p className='max-w-[632px] text-sm md:text-lg font-medium leading-[normal]'>
                {text}
              </p>
            </div>
            <Link href="/about-us" className='py-3 px-6 md:px-7 w-fit ml-auto bg-white rounded-[25px] border-2 border-primary text-sm md:text-base font-medium'>{t('main.more')}</Link>
          </Container>
        </section>
        <section className="hero-slider">
          <Slider {...settings} className="mt-6 md:mt-8 lg:mt-10 w-full h-[482px]">
              {slider.map((item, index) => (
                <div key={index} className='h-[482px] relative'>
                  <div>
                    <Image src={item} alt={`image${index}`} objectFit='cover' fill={true}/>
                  </div>
                </div>
              ))}
            </Slider>
        </section>
        <section className="main-stats bg-secondary mt-[48px] pb-[24px] sm:pb-[56px] px-3">
        <Container className='pt-[28px] md:pt-[48px] pb-[24px]'>
          <div className={clsx('w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[20px]', {
            ['lg:grid-cols-2'] : annual_report.stats.length <= 2,
            ['lg:grid-cols-3'] : annual_report.stats.length > 2
          })}>
            {annual_report.stats.map( (item, index) => {
              return (
                <div key={index} className="flex smd:justify-center items-center gap-[64px] lg:block">
                  <CircularProgressBarWithImage percentage={item.percent} imageUrl={item.image}/>
                  <div className='lg:ml-[50%] mt-0 lg:mt-5 lg:w-[150px]'>
                    <h3 className='text-primary text-[36px] sm:text-[64px] font-bold leading-[55px]'>
                      {item.percent}%
                    </h3>
                    <p className='text-sm sm:text-base font-semibold'>
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
        <Container className="pt-[40px] pb-[24px] sm:pt-[24px] sm:pb-[48px]">
          <div className="w-full grid gap-3 sm:gap-6 md:gap-10 lg:gap-x-[46px] lg:gap-y-[34px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {annual_report.advantages.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-5 px-6 lg:py-7 lg:px-10 bg-primary rounded-[16px] flex sm:block items-center gap-[24px]"
                >
                  <div className="flex gap-[16px] sm:gap-[24px] justify-between items-center sm:mb-2 flex-row-reverse sm:flex-row">
                    <h3 className="text-white flex flex-col sm:flex-row items-center sm:gap-4">
                      <p className="text-[36px] sm:text-[44px] md:text-[58px] w-[40px] lg:text-[64px] font-bold">{item.count}</p>
                    </h3>
                    <div className="hidden sm:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61"
                        height="61"
                        viewBox="0 0 61 61"
                        fill="none"
                      >
                        <path
                          d="M30.6934 48C40.3583 48 48.1934 40.165 48.1934 30.5C48.1934 20.835 40.3583 13 30.6934 13C21.0284 13 13.1934 20.835 13.1934 30.5C13.1934 40.165 21.0284 48 30.6934 48Z"
                          fill="white"
                        />
                        <path
                          d="M30.6934 57.9C29.3184 57.9 28.1934 56.875 28.1934 55.5V55.3C28.1934 53.925 29.3184 52.8 30.6934 52.8C32.0684 52.8 33.1934 53.925 33.1934 55.3C33.1934 56.675 32.0684 57.9 30.6934 57.9ZM48.5434 50.85C47.8934 50.85 47.2684 50.6 46.7684 50.125L46.4434 49.8C45.4684 48.825 45.4684 47.25 46.4434 46.275C47.4184 45.3 48.9934 45.3 49.9684 46.275L50.2934 46.6C51.2684 47.575 51.2684 49.15 50.2934 50.125C49.8184 50.6 49.1934 50.85 48.5434 50.85ZM12.8434 50.85C12.1934 50.85 11.5684 50.6 11.0684 50.125C10.0934 49.15 10.0934 47.575 11.0684 46.6L11.3934 46.275C12.3684 45.3 13.9434 45.3 14.9184 46.275C15.8934 47.25 15.8934 48.825 14.9184 49.8L14.5934 50.125C14.1184 50.6 13.4684 50.85 12.8434 50.85ZM55.6934 33H55.4934C54.1184 33 52.9934 31.875 52.9934 30.5C52.9934 29.125 54.1184 28 55.4934 28C56.8684 28 58.0934 29.125 58.0934 30.5C58.0934 31.875 57.0684 33 55.6934 33ZM5.89336 33H5.69336C4.31836 33 3.19336 31.875 3.19336 30.5C3.19336 29.125 4.31836 28 5.69336 28C7.06836 28 8.29336 29.125 8.29336 30.5C8.29336 31.875 7.26836 33 5.89336 33ZM48.2184 15.475C47.5684 15.475 46.9434 15.225 46.4434 14.75C45.4684 13.775 45.4684 12.2 46.4434 11.225L46.7684 10.9C47.7434 9.925 49.3184 9.925 50.2934 10.9C51.2684 11.875 51.2684 13.45 50.2934 14.425L49.9684 14.75C49.4934 15.225 48.8684 15.475 48.2184 15.475ZM13.1684 15.475C12.5184 15.475 11.8934 15.225 11.3934 14.75L11.0684 14.4C10.0934 13.425 10.0934 11.85 11.0684 10.875C12.0434 9.9 13.6184 9.9 14.5934 10.875L14.9184 11.2C15.8934 12.175 15.8934 13.75 14.9184 14.725C14.4434 15.225 13.7934 15.475 13.1684 15.475ZM30.6934 8.1C29.3184 8.1 28.1934 7.075 28.1934 5.7V5.5C28.1934 4.125 29.3184 3 30.6934 3C32.0684 3 33.1934 4.125 33.1934 5.5C33.1934 6.875 32.0684 8.1 30.6934 8.1Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="block sm:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                      >
                        <path
                          d="M21.4997 33.75C28.4262 33.75 34.0413 28.2655 34.0413 21.5C34.0413 14.7345 28.4262 9.25 21.4997 9.25C14.5731 9.25 8.95801 14.7345 8.95801 21.5C8.95801 28.2655 14.5731 33.75 21.4997 33.75Z"
                          fill="white"
                        />
                        <path
                          d="M21.5003 40.68C20.5149 40.68 19.7087 39.9625 19.7087 39V38.86C19.7087 37.8975 20.5149 37.11 21.5003 37.11C22.4857 37.11 23.292 37.8975 23.292 38.86C23.292 39.8225 22.4857 40.68 21.5003 40.68ZM34.2928 35.745C33.827 35.745 33.3791 35.57 33.0207 35.2375L32.7878 35.01C32.0891 34.3275 32.0891 33.225 32.7878 32.5425C33.4866 31.86 34.6153 31.86 35.3141 32.5425L35.547 32.77C36.2457 33.4525 36.2457 34.555 35.547 35.2375C35.2066 35.57 34.7587 35.745 34.2928 35.745ZM8.70783 35.745C8.24199 35.745 7.79408 35.57 7.43574 35.2375C6.73699 34.555 6.73699 33.4525 7.43574 32.77L7.66866 32.5425C8.36741 31.86 9.49616 31.86 10.1949 32.5425C10.8937 33.225 10.8937 34.3275 10.1949 35.01L9.96199 35.2375C9.62158 35.57 9.15574 35.745 8.70783 35.745ZM39.417 23.25H39.2737C38.2882 23.25 37.482 22.4625 37.482 21.5C37.482 20.5375 38.2882 19.75 39.2737 19.75C40.2591 19.75 41.137 20.5375 41.137 21.5C41.137 22.4625 40.4024 23.25 39.417 23.25ZM3.72699 23.25H3.58366C2.59824 23.25 1.79199 22.4625 1.79199 21.5C1.79199 20.5375 2.59824 19.75 3.58366 19.75C4.56908 19.75 5.44699 20.5375 5.44699 21.5C5.44699 22.4625 4.71241 23.25 3.72699 23.25ZM34.0599 10.9825C33.5941 10.9825 33.1462 10.8075 32.7878 10.475C32.0891 9.7925 32.0891 8.69 32.7878 8.0075L33.0207 7.78C33.7195 7.0975 34.8482 7.0975 35.547 7.78C36.2457 8.4625 36.2457 9.565 35.547 10.2475L35.3141 10.475C34.9737 10.8075 34.5257 10.9825 34.0599 10.9825ZM8.94074 10.9825C8.47491 10.9825 8.02699 10.8075 7.66866 10.475L7.43574 10.23C6.73699 9.5475 6.73699 8.445 7.43574 7.7625C8.13449 7.08 9.26324 7.08 9.96199 7.7625L10.1949 7.99C10.8937 8.6725 10.8937 9.775 10.1949 10.4575C9.85449 10.8075 9.38866 10.9825 8.94074 10.9825ZM21.5003 5.82C20.5149 5.82 19.7087 5.1025 19.7087 4.14V4C19.7087 3.0375 20.5149 2.25 21.5003 2.25C22.4857 2.25 23.292 3.0375 23.292 4C23.292 4.9625 22.4857 5.82 21.5003 5.82Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base font-semibold text-white">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
        <Container className='flex justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-base sm:text-[32px] font-bold uppercase'>{t('annual-reports.year')}</h3>
            <h6 className='text-base text-primaryLight'>{annual_report.main_year.file.type}, { (annual_report.main_year.file.size*0.001).toFixed(2) } MB</h6>
          </div>
          <Link className='flex bg-primary justify-center items-center gap-2.5 w-[144px] h-[48px] rounded-[40px] text-base' href={annual_report.main_year.file.path}>
            <span className='text-base text-white font-semibold'>{t('annual-reports.download')}</span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 14H12M8 2L8 11.3333M8 11.3333L11.3333 8M8 11.3333L4.66667 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
        </Container>
        </section>


        <section className="main-projects">
          <h3 className='py-6 sm:py-12 text-2xl sm:text-[32px] font-bold bg-white px-3 sm:px-0 uppercase flex justify-start sm:justify-center items-center gap-[10px]'>
            <Link href='/projects'>{t('projects.head')}</Link>
            <div className="block sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.5">
                <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </div>
          </h3>
          { projects.map( (item, index) => {
            return (
              <div key={index} className={clsx('flex flex-col items-center pb-6 sm:pb-0 gap-6 sm:gap-12', {
                ['sm:flex-row']: index % 2 === 0,
                ['sm:flex-row-reverse']: index % 2 > 0,
                ['bg-secondary']: index % 2 === 0,
                ['bg-lightYellow']: index % 2 === 1
              })}>
                <div className='relative h-[277px] sm:h-[688px] w-[100%] sm:w-[45%]'>
                  <Image src={item.image} alt={item.imgUrl} objectFit='cover' fill={true}/>
                </div>
                <div className='w-[100%] sm:w-[45%] px-3 sm:px-0'>
                  <h3 className='text-2xl sm:text-[32px] font-bold text-primaryDark'>
                      {item.title}
                    </h3>
                    <p className='text-base sm:text-lg py-3 sm:pt-[20px] sm:pb-[33px] font-medium'>
                      {item.text}
                    </p>
                    <Link href={`/projects/${item.id}`} className='text-sm sm:text-base flex ml-auto w-[127px] sm:w-[147px] h-[41px] sm:h-[48px] rounded-[24px] border-primaryDark border-[2px] items-center justify-center font-semibold'>{t('main.more')}</Link>
                </div>
              </div>
            )
          })}
          <Link href='/projects' className='hidden sm:flex text-base text-white font-semibold bg-primary items-center justify-center rounded-[24px] mx-auto my-6 w-[198px] h-[48px]'>{t('main.more-projects')}</Link>
        </section>



        <section className="main-team">
          <h3 className='py-6 sm:py-12 text-2xl sm:text-[32px] font-bold bg-white px-3 sm:px-0 uppercase flex justify-start sm:justify-center items-center gap-[10px]'>
            <Link href='/team'>{t('menu.fund.team.root')}</Link>
            <div className="block sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.5">
                <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </div>
          </h3>
          <div className='hidden md:block pb-[50px]'>
            <Slider {...settings} className="w-full min:h-[400px]">
              {partners.map((item, index) => (
                <div key={index} className='!flex items-center gap-12 relative'>
                  <div className='relative h-[688px] w-[45%]'>
                    <Image src={item.image} alt={item.full_name} objectFit='cover' objectPosition='top' fill={true}/>
                  </div>
                  <div className='w-[50%] relative h-[688px] flex flex-col justify-center px-3 xl:px-0'>
                    <h3 className='text-2xl font-bold text-primaryDark'>
                      { item.full_name }
                    </h3>
                    <p className='text-2xl pt-[53px] font-medium'>
                      {item.text}
                    </p>
                    {/* <Link href='http://test.com' className={clsx('absolute bottom-[20px]', {
                      ['right-[20px]']: index % 2 === 0,
                      ['left-[20px]']: index % 2 > 0
                    })}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="86" height="16" viewBox="0 0 86 16" fill="none">
                        <path d="M85.7071 8.70711C86.0976 8.31658 86.0976 7.68342 85.7071 7.29289L79.3431 0.928932C78.9526 0.538408 78.3195 0.538408 77.9289 0.928932C77.5384 1.31946 77.5384 1.95262 77.9289 2.34315L83.5858 8L77.9289 13.6569C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.70711ZM0 9L85 9V7L0 7L0 9Z" fill="#0006BB"/>
                      </svg>
                    </Link> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="block md:hidden mb-14">
            <Slider {...settingsTeam} className="w-full min:h-[400px]">
              {partners.map((item, index) => (
                <div key={index}>
                  <div className='h-[338px] relative'>
                    <Image src={item.image} alt={index} objectFit='cover' objectPosition='top' fill={true}/>
                  </div>
                  <div className='px-3 py-6'>
                    <h3 className='text-2xl font-semibold text-primaryDark mb-2'>
                      { item.full_name }
                    </h3>
                    <p className='text-base'>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>


        <section className="bg-secondary py-6 sm:py-8 md:py-10 py-12 px-3">
          <Container className='flex-col'>
            <h3 className='text-2xl sm:text-[32px] mb-6 font-bold sm:px-0 uppercase flex justify-start sm:justify-center items-center gap-[10px]'>
              <Link href='/news'>{t('materials.head.news')}</Link>
              <div className="block sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g opacity="0.5">
                  <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </div>
            </h3>
            <div className='main-news flex flex-wrap flex-col md:flex-row justify-center gap-6'>
              {materials.map( (item, index) => {
                return (
                  <Link href={`/news/${item.id}`} key={index} className='main-news__item'>
                    <div className='main-news__img relative'>
                      <Image src={item.image} alt="image" fill={true} objectFit='cover'/>
                    </div>
                    <div className='main-news__bg'></div>
                    <div className={clsx('main-news__content overflow-hidden', {
                      ['py-4 px-[20px] smd:text-white']: index === 0,
                      ['py-4 px-[20px]']: index !== 0,
                    })}>
                      <p className={clsx('flex items-center gap-12 relative font-medium', {
                        ['text-sm text-darkGray smd:text-white smd:text-base']: index === 0,
                        ['text-sm text-darkGray']: index !== 0,
                      })}>
                        {item.created_at  }
                      </p>
                      <h3 className={clsx('flex items-center gap-12 relative font-medium', {
                        ['text-2xl text-primaryDark py-3 smd:py-6 smd:text-white md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold']: index === 0,
                        ['text-2xl font-semibold md:text-[20px] lg:text-[20px] lg:leading-[25px] xl:leading-[30px] xl:text-[24px] text-primaryDark py-3 sm:py-2']: index !== 0,
                      })}>
                        { item.title }
                      </h3>
                      {/* <p className={clsx('main-news__content-p flex items-center hidden smd:block gap-12 relative font-medium', {
                        ['smd:text-white text-base font-semibold smd:font-medium']: index === 0,
                        ['text-base smd:text-2xl font-semibold text-black']: index !== 0,
                      })}>
                          { item.title }
                      </p> */}
                    </div>
                  </Link>
                )
              })}
            </div>
            <Link href='/news' className="w-[197px] h-[48px] rounded-[24px] flex justify-center items-center bg-white mx-auto mt-4 sm:mt-6 text-base font-semibold">{t('main.more-news')}</Link>
          </Container>
        </section>


        <section className="main-logos pb-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
          <Container className='flex-col'>
            <h3 className='py-6 sm:py-12 text-2xl sm:text-[32px] font-bold bg-white px-3 sm:px-0 uppercase flex justify-start sm:justify-center items-center gap-[10px]'>
            <Link href='/projects'>{t('main.helped')}</Link>
            <div className="block sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.5">
                <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </div>
          </h3>
            <div className='hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-[104px] px-3'>
              {donors.map( (item, index) => {
                return (
                  <div key={index} className='relative w-[80px] h-[80px] mx-auto'>
                    <Image src={item} alt="image" fill={true} objectFit='contain'/>
                  </div>
                )
              })}
            </div>
            <div className="block sm:hidden">
              <Slider {...settingsDonor} className="w-full h-[188px]">
              {donors.map( (item, index) => {
                return (
                  <div key={index} className={`check-test${index % 2} relative w-[80px] h-[80px]`}>
                    <Image src={item} alt="image" fill={true} objectFit='contain'/>
                  </div>
                )
              })}
              </Slider>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale } = context
  const fetchMain = await api.get('/main', {
    headers: { 'Accept-Language' : locale }
  })
  const fetchTeam = await api.get('/team', {
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...fetchMain.data,
      ...fetchTeam.data
    },
  }
}

export default Home
