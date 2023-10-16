import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import clsx from 'clsx'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  centerMode: true,
  swipeToSlide: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }
  ],
}

const settingsLastSlide = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: false,
  swipeToSlide: true,
  customPaging: function (i) {
    return (
      <div className="custom-dot"></div>
    );
  },
  appendDots: (dots) => (
    <div>
      <ul className='custom-dots' style={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: "relative", top: "10px"}}>
        {dots}
      </ul>
    </div>
  ),
}

const About = ({ main_block, histories, values }) => {
  const { t } = useTranslation()
  const sliderRef = useRef(null)
  const containerRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(2)
  const [bottom, setBottom] = useState(0)

  const handleSlideClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  }

  useEffect(() => {
    setBottom(containerRef?.current?.offsetHeight + 64)
  }, [])
  return (
    <>
      <Head>
        <title>{t('menu.fund.about-us.root')}</title>
        <meta name="description" content={main_block.main_text}  />
      </Head>
      <section className="flex flex-col md:flex-col lg:flex-row bg-secondary">
        <div className="flex-[4] p-4 lg:mr-10 lg:p-12">
          <h1 className="text-2xl/8 lg:text-3xl font-bold text-primaryDark uppercase">{main_block.main_title}</h1>
          <p className="text-sm lg:text-base mt-5 lg:mt-12 font-semibold">{main_block.main_text}</p>
          <div className="mt-5 lg:mt-12 flex">
            <div className="w-4 bg-primary" style={{ flex: '1 0 8px' }} />
            <div className="ml-4 lg:ml-12 flex flex-col">
              <span className="text-2xl text-primaryDark font-semibold">{main_block.mission_title}</span>
              <span className="mt-2 font-medium">{main_block.mission_text}</span>
            </div>
          </div>
          <div className="mt-5 lg:mt-12 flex">
            <div className="w-4 bg-primary" style={{ flex: '1 0 8px' }} />
            <div className="ml-4 lg:ml-12 flex flex-col">
              <span className="text-2xl text-primaryDark font-semibold">{main_block.vision_title}</span>
              <span className="mt-2 font-medium">{main_block.vision_text}</span>
            </div>
          </div>
        </div>
        <div className="relative h-[340px] md:h-[440px] lg:h-[auto] lg:flex-[3]">
          <Image
            src={main_block.image}
            priority={true}
            fill={true}
            alt={main_block.main_title}
            objectFit='cover'
            objectPosition='bottom'
          />
        </div>
      </section>
      <section className="relative py-6 lg:py-12 flex flex-col">
        <h2 className="text-2xl lg:text-3xl font-bold text-primaryDark uppercase px-3 lg:px-0 lg:text-center">{t('about-us.history-title')}</h2>
        {activeSlide !== null && (
          <div className="absolute left-0 right-0 mx-auto drop-shadow flex flex-col px-3 lg:px-0 items-center animate-[growUp_0.3s_ease-in-out_forwards]" style={{ bottom: bottom + 'px' }}>
            <div className="p-7 max-w-[430px] bg-white rounded-2xl font-semibold">
              {histories[activeSlide].text}
            </div>
            <svg className="relative top-[-2px]" width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.306396 0.830078H17.3064H34.3064L17.3064 22.6583L0.306396 0.830078Z" fill="white"/>
            </svg>
          </div>
        )}
        <div ref={containerRef} className="relative mt-[400px] lg:mt-72">
          <div className="absolute top-[50%] left-0 w-full h-1 bg-[#ACA7E9]" />
          <Slider 
            ref={sliderRef} 
            {...settings} 
            beforeChange={() => setActiveSlide(null)}
            afterChange={(index) => setActiveSlide(index)}
          >
            {histories.map((item, index) => (
              <div key={item.year} className="!flex justify-center items-center">
                <div 
                  className={clsx('w-[60px] h-[60px] lg:w-[6vw] lg:h-[6vw] rounded-full font-semibold text-white cursor-pointer flex justify-center items-center', {
                    ['bg-primaryLight']: index !== activeSlide,
                    ['bg-primary']: index === activeSlide,
                  })}
                  onClick={() => handleSlideClick(index)}
                >
                  {item.year}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="py-6 lg:py-12">
        <Container className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-primaryDark uppercase px-3 md:px-0 md:text-center">{t('about-us.values-title')}</h2>
          <div className='hidden md:block px-3'>
            {values.map((item, index) => (
              <div key={index} className={clsx('mt-12 min-h-[398px] flex', {
                ['flex-row']: index % 2 === 0,
                ['flex-row-reverse']: index % 2 > 0,
              })}>
                <div className="flex-1 flex justify-center items-center">
                  <div className="max-w-[400px] flex flex-col">
                    <span className="text-2xl font-semibold">{item.title}</span>
                    <span className="mt-5 font-medium">{item.text}</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl flex-1">
                  <Image
                    src={item.image}
                    fill={true}
                    alt={item.title}
                    objectFit='cover'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="block md:hidden mt-6 mb-6">
            <Slider {...settingsLastSlide} className="w-full h-[576px]">
              {values.map((item, index) => (
                <div key={index} className='min-h-[398px] flex'>
                  <div className="relative overflow-hidden flex-1 h-[318px]">
                    <Image
                      src={item.image}
                      fill={true}
                      alt={item.title}
                      objectFit='cover'
                    />
                  </div>
                  <div className="py-6 px-3">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold">{item.title}</span>
                      <span className="mt-2 tex-base font-medium">{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  const response = await api.get('/about-us', {
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data
    },
  }
}

export default About
