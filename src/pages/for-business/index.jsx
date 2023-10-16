import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container, Pagination } from '@/shared/ui'
import Slider from 'react-slick'
import { api } from '@/shared/api'
import { useState } from 'react'
import { removeEmpty } from '@/shared/lib'
import { useRouter } from 'next/router'

const PrevSlideBtn = (props) => {
  return (
    <button {...props} className="absolute left-[35px] bottom-[-30px] mr-4 outline-none z-50">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
        <path d="M1.12102 8.22664C0.730494 7.83611 0.730494 7.20295 1.12102 6.81242L7.48498 0.448463C7.8755 0.0579391 8.50867 0.0579391 8.89919 0.448463C9.28972 0.838988 9.28972 1.47215 8.89919 1.86268L3.24234 7.51953L8.89919 13.1764C9.28972 13.5669 9.28972 14.2001 8.89919 14.5906C8.50867 14.9811 7.8755 14.9811 7.48498 14.5906L1.12102 8.22664ZM19.8281 8.51953L1.82812 8.51953V6.51953L19.8281 6.51953V8.51953Z" fill="#0006BB"/>
      </svg>
    </button>
  )
}
const NextSlideBtn = (props) => {
  return (
    <button {...props} className="absolute bottom-[-30px] right-[35px] ml-4 outline-none z-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
        <path d="M19.5352 8.22664C19.9258 7.83611 19.9258 7.20295 19.5352 6.81242L13.1713 0.448463C12.7807 0.0579391 12.1476 0.0579391 11.7571 0.448463C11.3665 0.838988 11.3665 1.47215 11.7571 1.86268L17.4139 7.51953L11.7571 13.1764C11.3665 13.5669 11.3665 14.2001 11.7571 14.5906C12.1476 14.9811 12.7807 14.9811 13.1713 14.5906L19.5352 8.22664ZM0.828125 8.51953L18.8281 8.51953V6.51953L0.828125 6.51953L0.828125 8.51953Z" fill="#0006BB"/>
        </svg>
    </button>
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
  prevArrow: <PrevSlideBtn />,
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

const fakeHistory = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    date: '01.01.1999',
    title: 'Lorem ipsum dolor sit amet.',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    date: '01.01.1999',
    title: 'Lorem ipsum dolor sit amet.',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    date: '01.01.1999',
    title: 'Lorem ipsum dolor sit amet.',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    date: '01.01.1999',
    title: 'Lorem ipsum dolor sit amet.',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    date: '01.01.1999',
    title: 'Lorem ipsum dolor sit amet.',
  },
]

const fakeSlider = [
  {
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    short_descr: '01.01.1999',
    title: 'Lorem ipsum dolor.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY=1000&q=80',
    short_descr: '01.01.1999',
    title: 'Lorem ipsum dolor.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    short_descr: '01.01.1999',
    title: 'Lorem ipsum dolor.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    short_descr: '01.01.1999',
    title: 'Lorem ipsum dolor4.'
  },
]

const AnnualReports = () => {
  const { t } = useTranslation()

  const [searchField, setSearchFiled] = useState('')
  const router = useRouter()
  let { query } = router
  const enableSearch = (query) => {
    router.push({ pathname: '/for-business', query: removeEmpty({ ...router.query, ...query })})
  }
  const changeSearch = (e) => {
    setSearchFiled(e.target.value)
  }

  return (
    <>
      <Head>
        <title>{t('materials.head.busy')}</title>
      </Head>
      <section className="pt-6 px-3 md:pt-8 md:px-8 lg:pt-6">
        <Container>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl/8 lg:text-3xl font-bold text-primaryDark uppercase">{t('materials.head.busy')}</h1>
            <div className="flex flex-end h-[38px]">
              <div className="ml-auto flex shadow pr-3 rounded-lg flex-row items-center justify-between w-fit">
                <input
                  className="ml-auto w-[70%] py-2 px-3 outline-none placeholder:text-right"
                  type="text"
                  placeholder={t('success-stories.search')}
                  onChange={changeSearch}
                  onKeyDown={ (e) => e.key === 'Enter' ? enableSearch({ search: searchField || null }) : ''}
                />
                <div className="cursor-pointer" onClick={ () => enableSearch({ search: searchField || null })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M14.0948 12.3124C13.7043 11.9219 13.0711 11.9219 12.6806 12.3124C12.2901 12.7029 12.2901 13.3361 12.6806 13.7266L14.0948 12.3124ZM17.6806 18.7266C18.0711 19.1172 18.7043 19.1172 19.0948 18.7266C19.4853 18.3361 19.4853 17.7029 19.0948 17.3124L17.6806 18.7266ZM9.22103 13.6862C6.55165 13.6862 4.3877 11.5222 4.3877 8.85286H2.3877C2.3877 12.6268 5.44708 15.6862 9.22103 15.6862V13.6862ZM4.3877 8.85286C4.3877 6.18349 6.55165 4.01953 9.22103 4.01953V2.01953C5.44708 2.01953 2.3877 5.07892 2.3877 8.85286H4.3877ZM9.22103 4.01953C11.8904 4.01953 14.0544 6.18349 14.0544 8.85286H16.0544C16.0544 5.07892 12.995 2.01953 9.22103 2.01953V4.01953ZM14.0544 8.85286C14.0544 11.5222 11.8904 13.6862 9.22103 13.6862V15.6862C12.995 15.6862 16.0544 12.6268 16.0544 8.85286H14.0544ZM12.6806 13.7266L17.6806 18.7266L19.0948 17.3124L14.0948 12.3124L12.6806 13.7266Z"
                      fill="#343BFF"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-6 px-3 md:pb-6 md:px-8 lg:pb-6">
        <Container>
          <Slider {...settings} className="mt-6 md:mt-8 lg:mt-10 w-full h-[576px]">
            {fakeSlider.map((item, index) => (
              <div key={index} className='h-[576px] relative'>
                <div>
                  <Image src={item.imgUrl} alt={item.imgUrl} objectFit='cover' fill={true}/>
                  <div className='absolute bg-[#00000080] h-[576px] min-w-full'></div>
                </div>
                <div className='absolute bottom-[24px] lg:bottom-[48px] left-[24px] lg:left-[48px] right-[24px] lg:right-[48px] text-white'>
                  <p className='text-xs lg:text-sm'>25.05.1985</p>
                  <h3 className='text-2xl lg:text-[32px] font-bold my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit
                  </h3>
                  <p className='text-base lg:text-base max-w-[520px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat culpa enim! Doloribus, blanditiis? Consequuntur beatae exercitationem, quibusdam qui deserunt recusandae cum dignissimos saepe molestias. Sit dolore magnam quidem consequuntur.
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
      <section className="pt-6 pb-8 px-3 md:py-8 md:px-8 lg:py-8">
        <Container className="flex-col">
          <div className="mb-2 sm:mb-6 md:mb-10 lg:mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative">
            {fakeHistory.map((item, i) => {
              return (
                <Link href="test" key={i} className="">
                  <div className="relative w-[100%] h-[216px] rounded-[8px] overflow-hidden">
                    <Image src={item.imgUrl} alt={i} fill={true} objectFit="cover" />
                  </div>
                  <div className="py-4 px-5">
                    <p className="text-darkGray text-[10px] sm:text-xs">{item.date}</p>
                    <h3 className="text-primaryDark text-base font-medium lg:font-semibold md:text-xl lg:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
          <Pagination totalCount={4} currentPage={1} />
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale, query } = context
  const response = await api.get(`/materials?page=${query.page || 1}&type=business`, {
    params: query,
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default AnnualReports
